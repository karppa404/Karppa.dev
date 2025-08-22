import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  // Initialize theme from document class
  React.useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark")
    setIsDark(darkMode)
  }, [])

  // Apply class when theme changes
  React.useEffect(() => {
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [isDark])

  // Toggle theme on button click
  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-fit h-fit"
    >
      <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}