import Link from 'next/link';
import { useRef, useState } from 'react';

export default function NavBar({ active }: { active: string }) {
  console.log(active);
  const match = (href: string): 'active' | '' =>
    href && (active === href || (active.includes(href) && href.length >= 3))
      ? 'active'
      : '';

  const navRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav ref={navRef}>
      <Link href='/' className={match('/')}>Home</Link>
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
      <Link href='/ta/' className={match('/ta/')}>Teaching Assistant</Link>
      <Link href='/coding/' className={match('/coding/')}>Hobby Coder</Link>
      <Link href='/astro/' className={match('/astro/')}>Hobby Astronomer</Link>
      <Link id='legal' href='/legal/' className={match('/legal/')}>Legal</Link>
      <button className='icon' onClick={() => {
        if (navRef.current) {
          navRef.current.classList.toggle('responsive');
          setIsOpen(!isOpen);
        }
      }}>
        { isOpen ? '\u25b2' : '\u25bc' }
      </button>
    </nav>
  );
}
