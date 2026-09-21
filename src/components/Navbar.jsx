import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1025px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setToggle(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && toggle) {
        setToggle(false);
        menuButtonRef.current?.focus();
      }
    };
    desktop.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [toggle]);

  return (
    <nav
      aria-label="Main navigation"
      className={`${styles.paddingX} fixed inset-x-0 top-0 z-50 h-[72px] bg-flashWhite shadow-sm`}>
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6">
        <Link
          to="/"
          aria-label="Back to home"
          className="shrink-0"
          onClick={() => {
            setActive('');
            setToggle(false);
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="" className="h-11 w-11 object-contain sm:h-[50px] sm:w-[50px]" />
        </Link>
        <ul className="hidden items-center gap-8 lg:flex xl:gap-14">
          {navLinks.map((nav) => (
            <li key={nav.id} className="nav-links">
              <a
                href={`#${nav.id}`}
                className={`${active === nav.title ? 'text-dim' : 'text-eerieBlack'} block py-3 font-mova text-[21px] uppercase tracking-[3px] hover:text-dim`}
                onClick={() => setActive(nav.title)}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={toggle}
          aria-controls="mobile-navigation"
          onClick={() => setToggle((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg lg:hidden">
          <img src={toggle ? close : menu} alt="" className="h-7 w-7 object-contain" />
        </button>
      </div>
      {toggle && (
        <div
          id="mobile-navigation"
          className={`mobile-navigation ${styles.paddingX} absolute inset-x-0 top-full border-t border-platinum bg-flashWhite py-5 shadow-xl lg:hidden`}>
          <ul className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`${active === nav.title ? 'text-dim' : 'text-eerieBlack'} block rounded-lg px-3 py-3 font-mova text-2xl uppercase tracking-wider hover:bg-platinum sm:text-3xl`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                    menuButtonRef.current?.focus();
                  }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
