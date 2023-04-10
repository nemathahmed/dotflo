import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 300.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,650.000000) scale(0.050000,-0.050000)"
fill="#ffffff" stroke="none">
<path d="M4791 7430 c-430 -153 -399 -772 44 -867 256 -55 507 127 538 390 39
329 -275 586 -582 477z"/>
<path d="M5984 7063 c-584 -208 -451 -1072 166 -1072 498 0 742 558 410 936
-125 142 -386 204 -576 136z"/>
<path d="M3792 6995 c-157 -41 -324 -288 -283 -419 4 -14 13 -51 20 -81 6 -30
40 -86 74 -126 283 -322 789 -46 667 365 -62 209 -262 318 -478 261z"/>
<path d="M3096 6161 c-353 -112 -300 -629 68 -655 263 -19 438 245 323 488
-61 128 -254 211 -391 167z"/>
<path d="M6559 5834 c-537 -152 -717 -833 -323 -1220 356 -349 947 -247 1168
202 271 549 -257 1185 -845 1018z"/>
<path d="M1873 5787 c-7 -8 -13 -126 -13 -264 l0 -250 -55 52 c-336 320 -856
-151 -634 -574 119 -225 443 -300 613 -141 68 63 70 63 86 -10 11 -50 23 -60
72 -60 l58 0 0 630 0 630 -57 0 c-31 0 -62 -6 -70 -13z m-173 -523 c273 -143
166 -604 -140 -604 -180 0 -289 122 -287 321 2 248 219 392 427 283z"/>
<path d="M4930 5772 c-93 -40 -119 -86 -130 -230 -10 -132 -10 -132 -75 -138
-103 -10 -98 -124 5 -124 l70 0 0 -370 0 -370 70 0 70 0 0 369 0 369 105 6
c164 9 173 111 11 120 l-106 6 -6 84 c-8 112 20 159 105 175 62 11 71 20 71
72 0 68 -77 81 -190 31z"/>
<path d="M5600 5170 l0 -630 70 0 70 0 0 630 0 630 -70 0 -70 0 0 -630z"/>
<path d="M3910 5546 c-7 -42 -14 -89 -16 -106 -3 -19 -31 -32 -79 -36 -119
-10 -114 -124 5 -124 l80 0 0 -285 c1 -380 47 -455 285 -455 l95 0 0 70 c0 69
-1 70 -89 70 -142 0 -151 20 -151 331 l0 269 130 0 130 0 0 59 c0 59 -1 59
-125 65 l-125 6 -10 100 c-14 138 -109 164 -130 36z"/>
<path d="M2730 5392 c-365 -162 -318 -759 67 -851 443 -107 733 454 400 773
-112 107 -323 142 -467 78z"/>
<path d="M3011 4385 c-224 -57 -254 -361 -46 -468 98 -49 187 -38 274 35 202
170 29 499 -228 433z"/>
<path d="M3373 3699 c-112 -89 -105 -288 13 -360 245 -149 484 185 259 362
-68 53 -203 52 -272 -2z"/>
</g>
</svg>

            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>
              </li>
            </ul> */}

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
