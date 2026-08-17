import * as React from "react"
import * as d3 from "d3"

import type { ContributionCalendar } from "@/lib/octokit"

type ActivityChartProps = {
  calendar: ContributionCalendar | null
  loading?: boolean
}

type ChartDay = ContributionCalendar["contributions"][number] & {
  parsedDate: Date
}

type TooltipState = {
  count: number
  date: string
  x: number
  y: number
}

export function ActivityChart({ calendar, loading = false }: ActivityChartProps) {
  const chartRef = React.useRef<SVGSVGElement>(null)
  const figureRef = React.useRef<HTMLElement>(null)
  const [tooltip, setTooltip] = React.useState<TooltipState | null>(null)

  React.useEffect(() => {
    if (!chartRef.current || loading || !calendar?.contributions.length) return

    const svg = d3.select(chartRef.current)
    svg.selectAll("*").remove()

    const days: ChartDay[] = calendar.contributions.map((day) => ({
      ...day,
      parsedDate: d3.timeParse("%Y-%m-%d")(day.date) as Date,
    }))
    const gridStart = d3.timeSunday.floor(days[0].parsedDate)
    const gridEnd = days[days.length - 1].parsedDate
    const weeks = d3.timeWeek.count(gridStart, gridEnd) + 1
    const cellSize = 10
    const cellGap = 3
    const left = 28
    const top = 20
    const width = left + weeks * (cellSize + cellGap)
    const height = top + 7 * (cellSize + cellGap)
    const colors = [
      "var(--chart-empty)",
      "var(--activity-1)",
      "var(--activity-2)",
      "var(--activity-3)",
      "var(--activity-4)",
    ]

    svg.attr("viewBox", `0 0 ${width} ${height}`)

    const monthStarts = days.filter(
      (day, index) => index === 0 || day.parsedDate.getDate() === 1
    )

    svg
      .append("g")
      .selectAll("text")
      .data(monthStarts)
      .join("text")
      .attr(
        "x",
        (day) =>
          left + d3.timeWeek.count(gridStart, day.parsedDate) * (cellSize + cellGap)
      )
      .attr("y", 9)
      .attr("fill", "currentColor")
      .attr("font-size", 8)
      .attr("opacity", 0.62)
      .text((day) => d3.timeFormat("%b")(day.parsedDate))

    svg
      .append("g")
      .selectAll("text")
      .data(["Mon", "Wed", "Fri"])
      .join("text")
      .attr("x", 0)
      .attr("y", (_, index) => top + (index * 2 + 1) * (cellSize + cellGap) + 8)
      .attr("fill", "currentColor")
      .attr("font-size", 8)
      .attr("opacity", 0.62)
      .text((day) => day)

    const showTooltip = (event: PointerEvent | FocusEvent, day: ChartDay) => {
      const figure = figureRef.current
      const target = event.currentTarget as SVGRectElement
      if (!figure || !target) return

      const figureBounds = figure.getBoundingClientRect()
      const targetBounds = target.getBoundingClientRect()
      const pointerX =
        event instanceof PointerEvent
          ? event.clientX
          : targetBounds.left + targetBounds.width / 2
      const pointerY =
        event instanceof PointerEvent ? event.clientY : targetBounds.top

      setTooltip({
        count: day.count,
        date: d3.timeFormat("%B %-d, %Y")(day.parsedDate),
        x: Math.min(Math.max(pointerX - figureBounds.left, 72), figureBounds.width - 72),
        y: pointerY - figureBounds.top,
      })
    }

    svg
      .append("g")
      .selectAll("rect")
      .data(days)
      .join("rect")
      .attr(
        "x",
        (day) =>
          left + d3.timeWeek.count(gridStart, day.parsedDate) * (cellSize + cellGap)
      )
      .attr("y", (day) => top + day.parsedDate.getDay() * (cellSize + cellGap))
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("rx", 2.5)
      .attr("fill", (day) => colors[Math.min(day.level, 4)])
      .attr("tabindex", 0)
      .attr("role", "graphics-symbol")
      .attr(
        "aria-label",
        (day) =>
          `${day.count} ${day.count === 1 ? "commit" : "commits"} on ${d3.timeFormat(
            "%B %-d, %Y"
          )(day.parsedDate)}`
      )
      .on("pointerenter", showTooltip)
      .on("pointermove", showTooltip)
      .on("pointerleave", () => setTooltip(null))
      .on("focus", showTooltip)
      .on("blur", () => setTooltip(null))
  }, [calendar, loading])

  return (
    <figure className="activity-card" ref={figureRef}>
      <div className="chart-scroll">
        {loading || !calendar ? (
          <div className="chart-skeleton" aria-label="Loading contribution chart" />
        ) : (
          <svg
            aria-label={`${calendar.total} GitHub contributions in the last year`}
            className="activity-chart"
            ref={chartRef}
            role="img"
          />
        )}
      </div>
      <div className="chart-caption">
        <span>
          {loading || !calendar
            ? "Loading contributions…"
            : `${calendar.total} contributions in the last year`}
        </span>
        <span className="chart-legend" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <i data-level={level} key={level} />
          ))}
          More
        </span>
      </div>
      {tooltip ? (
        <div
          aria-live="polite"
          className="activity-tooltip"
          role="status"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <strong>
            {tooltip.count} {tooltip.count === 1 ? "commit" : "commits"}
          </strong>
          <span>{tooltip.date}</span>
        </div>
      ) : null}
    </figure>
  )
}
