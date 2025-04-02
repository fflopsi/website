'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NavBar from './navBar';

export default function StickyNavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        // Add sticky class to navbar when on top of screen
        if (nav.getBoundingClientRect().top <= 0) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    '/',
    '/ta/',
    '/ta/informatik/',
    '/ta/linalg/',
    '/coding/',
    '/astro/',
    '/legal/',
  ];
  const path = usePathname();
  console.log(path);
  return NavBar(navLinks.includes(path) ? path : '/404/');
}
