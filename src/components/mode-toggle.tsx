"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [spinning, setSpinning] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setSpinning(true)
    setTheme(theme === "light" ? "dark" : "light")
    setTimeout(() => setSpinning(false), 500)
  }

  // 🚫 Don't render icons until we know the theme
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
          theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        } ${spinning ? "animate-spin" : ""}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        } ${spinning ? "animate-spin" : ""}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
