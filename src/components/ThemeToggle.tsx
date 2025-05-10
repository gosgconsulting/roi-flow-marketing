
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("light", !newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "rounded-full relative overflow-hidden bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-10">
        {isDark ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-neonPink rotate-90 transition-all duration-300" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-neonBlue transition-all duration-300" />
        )}
      </div>
      <motion.div
        initial={false}
        animate={{ 
          x: isDark ? "0%" : "100%",
          opacity: isDark ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-deepPurple/10 to-deepPurple/5 z-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
