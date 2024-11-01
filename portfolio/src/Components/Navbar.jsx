import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Navbar({ navOpen }) {
  const lastActiveLink = useRef(null);
  const activeBox = useRef();

  const hanldeActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    hanldeActiveBox();

    const handleResize = () => {
      hanldeActiveBox(); // Update activeBox on resize
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove('active');
    e.target.classList.add('active');
    lastActiveLink.current = e.target;
    hanldeActiveBox();
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'block' : 'hidden'} md:flex`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
          ref={key === 0 ? lastActiveLink : null} // Set initial active link ref
        >
          {label}
        </a>
      ))}
      <div ref={activeBox} className="active-box"></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
