"use client";

import { useEffect } from "react";
import NavBar from "./navBar";

export default function StickyNavBar({ active }: { active: string }) {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        // Add sticky class to navbar when on top of screen
        if (nav.getBoundingClientRect().top <= 0) nav.classList.add("sticky");
        else nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return NavBar(active);
}
