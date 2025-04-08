'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const matchPath = (current: string, link: string): 'active' | '' =>
  link && (current === link || (current.startsWith(link) && link.length >= 3))
    ? 'active'
    : '';

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        // Add sticky class to navbar when on top of screen
        if (nav.getBoundingClientRect().top <= 0) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
      }
    };
    // Correctly apply stickyness after reload
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const path = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Close navBar after route change
    setIsOpen(false);
    navRef?.current?.classList.remove('responsive');
  }, [path]);

  return (
    <nav ref={navRef}>
      <Link href='/' className={matchPath(path, '/')}>
        Home
      </Link>
      {/* <div class='dropdown'>
        <button class='dropbtn'>Teaching Assistant
          <i class='fa fa-caret-down'></i>
        </button>
        <div class='dropdown-content'>
          <a href='/ta/linalg/'>Lineare Algebra II</a>
          <a href='/ta/informatik/'>Informatik</a>
          <a href='/ta/'><i>Overview</i></a>
        </div>
      </div> */}
      <Link href='/ta/' className={matchPath(path, '/ta/')}>
        Teaching Assistant
      </Link>
      <Link href='/coding/' className={matchPath(path, '/coding/')}>
        Hobby Coder
      </Link>
      <Link href='/astro/' className={matchPath(path, '/astro/')}>
        Hobby Astronomer
      </Link>
      <Link id='legal' href='/legal/' className={matchPath(path, '/legal/')}>
        Legal
      </Link>
      <Link
        id='contact'
        href='/contact/'
        className={matchPath(path, '/contact/')}
      >
        Contact
      </Link>
      <button
        className='icon'
        onClick={() => {
          if (navRef.current) {
            navRef.current.classList.toggle('responsive');
            setIsOpen(!isOpen);
          }
        }}
      >
        {isOpen ? '\u25b2' : '\u25bc'}
      </button>
    </nav>
  );
}
