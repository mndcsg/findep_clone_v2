// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    {
      label: "Conoce la Empresa",
      links: [
        { name: "Trayectoria", url: "#/corporativa/historia" },
        { name: "Perfil Institucional", url: "#/corporativa/perfil" }
      ]
    },
    {
      label: "Estructura Directiva",
      links: [
        { name: "Alta Dirección", url: "#/gobierno/equipo-directivo" },

      ]
    },
    {
      label: "Mercado de Capitales",
      links: [
        { name: "Gráfica Histórica", url: "#/accion/grafica-historica" },
        { name: "Información de Dividendos", url: "#/accion/precios-historicos" },
        { name: "Cobertura de Analistas", url: "#/accion/analistas" }
      ]
    },
    {
      label: "Compromiso Social",
      links: [
        { name: "Responsabilidad Social", url: "#/responsabilidad-social" }
      ]
    }
  ];

  // Handle Scroll Effect for Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Hover Logic - Independent for each item
  const handleMouseEnter = (index) => {
    setActiveDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdownIndex(null);
  };

  // Mobile Logic
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileSubmenuOpen(null);
    }
  };

  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index);
  };

  // Design Tokens
  const colors = {
    primary: '#1A4D4D',
    background: '#F0F2F0',
    accentGold: '#BFA586',
    accentOchre: '#8C5E48',
    textDark: '#1A4D4D',
    textMuted: '#5A6B6B',
    white: '#FFFFFF',
    border: '#D1D9D1',
    shadow: '0 10px 30px -5px rgba(26, 77, 77, 0.15)',
  };

  const styles = {
    header: {
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: colors.white,
      borderBottom: isScrolled ? `1px solid ${colors.border}` : `3px solid ${colors.primary}`,
      boxShadow: isScrolled ? '0 4px 20px rgba(26, 77, 77, 0.08)' : 'none',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
    },
    headerContainer: {
      maxWidth: '1600px',
      margin: '0 auto',
      padding: '0 24px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: colors.primary,
      textDecoration: 'none',
      letterSpacing: '0.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      zIndex: 1002,
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: colors.primary,
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.accentGold,
      fontSize: '18px',
      fontWeight: 'bold',
    },
    navDesktop: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    navItemWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    navLink: {
      color: colors.textDark,
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      padding: '28px 16px',
      display: 'block',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    navLinkNoHref: {  // ← 新增：用于无链接的菜单项
      color: colors.textDark,
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      padding: '28px 16px',
      display: 'block',
      transition: 'color 0.3s ease',
      cursor: 'default',
      position: 'relative',
    },
    navLinkActive: {
      color: colors.accentOchre,
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: colors.white,
      borderRadius: '8px',
      boxShadow: colors.shadow,
      minWidth: '260px',
      zIndex: 1001,
      padding: '16px 0',
      marginTop: '4px',
      border: `1px solid ${colors.border}`,
      borderTop: `4px solid ${colors.accentGold}`,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(10px)',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    dropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    dropdownItem: {
      padding: '12px 20px',
      textDecoration: 'none',
      color: colors.textMuted,
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.2s ease',
      borderLeft: '3px solid transparent',
      margin: '0 8px',
      borderRadius: '4px',
    },
    mobileToggle: {
      display: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: colors.primary,
      background: 'none',
      border: 'none',
      padding: '8px',
      zIndex: 1002,
    },
    mobileMenu: {
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.border}`,
      maxHeight: isMobileMenuOpen ? '500px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease-out',
      boxShadow: '0 10px 10px rgba(0,0,0,0.05)',
    },
    mobileNavItem: {
      borderBottom: `1px solid ${colors.border}`,
    },
    mobileNavLink: {
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: colors.textDark,
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      outline: 'none',
    },
    mobileSubmenu: {
      backgroundColor: colors.background,
      maxHeight: mobileSubmenuOpen !== null ? '300px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-out',
    },
    mobileSubItem: {
      padding: '12px 24px 12px 36px',
      color: colors.textMuted,
      textDecoration: 'none',
      fontSize: '14px',
      display: 'block',
      borderLeft: '3px solid transparent',
    },
  };

  const handleDropdownItemHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.backgroundColor = colors.background;
      e.currentTarget.style.color = colors.primary;
      e.currentTarget.style.borderLeftColor = colors.accentGold;
      e.currentTarget.style.transform = 'translateX(4px)';
    } else {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = colors.textMuted;
      e.currentTarget.style.borderLeftColor = 'transparent';
      e.currentTarget.style.transform = 'translateX(0)';
    }
  };

  // Check screen size for mobile toggle visibility
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
      <Link to="/" style={styles.logo}>
        <img src="./pic.jpg" alt="Logo" style={{
  width: '50px',
  height: '50px',
  objectFit: 'contain',
  borderRadius: '6px',
}} />
          Aliado Patrimonial, S.A.P.I. de C.V. SOFOM, E.N.R.
        </Link>

        {/* Desktop Navigation */}
        <nav style={{...styles.navDesktop, display: isMobile ? 'none' : 'flex'}}>
          {menuItems.map((item, index) => {
            const isActive = activeDropdownIndex === index;
            const hasLinks = item.links.length > 0;
            
            return (
              <div 
                key={index} 
                style={styles.navItemWrapper}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* 修复：有子菜单时使用 span，无子菜单时使用 a 标签 */}
                {hasLinks ? (
                  <span
                    style={{
                      ...styles.navLinkNoHref,
                      ...(isActive ? styles.navLinkActive : {})
                    }}
                  >
                    {item.label}
                    <span style={{marginLeft: '6px', fontSize: '10px', opacity: 0.7}}>▼</span>
                  </span>
                ) : (
                  <a 
                    href="/"
                    style={{
                      ...styles.navLink,
                      ...(isActive ? styles.navLinkActive : {})
                    }}
                  >
                    {item.label}
                  </a>
                )}
                
                {hasLinks && (
                  <div style={{
                    ...styles.dropdown,
                    ...(isActive ? styles.dropdownVisible : {})
                  }}>
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        style={styles.dropdownItem}
                        onMouseOver={(e) => handleDropdownItemHover(e, true)}
                        onMouseOut={(e) => handleDropdownItemHover(e, false)}
                      >
                        <span>{link.name}</span>
                        <span style={{fontSize: '16px', opacity: 0.3}}>›</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          style={{...styles.mobileToggle, display: isMobile ? 'block' : 'none'}} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div style={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <div key={index} style={styles.mobileNavItem}>
              <div 
                style={styles.mobileNavLink}
                onClick={() => item.links.length > 0 ? toggleMobileSubmenu(index) : null}
              >
                <span>{item.label}</span>
                {item.links.length > 0 && (
                  <span style={{
                    fontSize: '12px', 
                    transform: mobileSubmenuOpen === index ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.3s',
                    color: colors.accentGold
                  }}>
                    ▼
                  </span>
                )}
              </div>
              
              {item.links.length > 0 && (
                <div style={styles.mobileSubmenu}>
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      style={styles.mobileSubItem}
                      onClick={(e) => {
                        e.currentTarget.style.borderLeftColor = colors.accentGold;
                        e.currentTarget.style.color = colors.primary;
                        e.currentTarget.style.fontWeight = 'bold';
                      }}
                      onMouseOut={(e) => {
                         e.currentTarget.style.borderLeftColor = 'transparent';
                         e.currentTarget.style.color = colors.textMuted;
                         e.currentTarget.style.fontWeight = 'normal';
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;