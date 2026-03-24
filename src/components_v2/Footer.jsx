import React from 'react';

// --- Footer Component ---
const Footer = () => {
  const footerNavItems = [
    { label: "Conoce la Empresa", url: "#/corporativa/historia" },
    { label: "Estructura Directiva", url: "#/gobierno/equipo-directivo" },
    { label: "Mercado de Capitales", url: "#/accion/grafica-historica" },
    { label: "Compromiso Social", url: "#/responsabilidad-social" }
  ];

  const colors = {
    primary: '#1A4D4D',
    background: '#F0F2F0',
    accentGold: '#BFA586',
    accentOchre: '#8C5E48',
    textLight: '#F0F2F0',
    textMuted: '#D1D9D1',
    white: '#FFFFFF',
  };

  const styles = {
    footer: {
      backgroundColor: colors.primary,
      color: colors.textLight,
      paddingTop: '60px',
      paddingBottom: '30px',
      fontFamily: "'Roboto', sans-serif",
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
    },
    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    footerTitle: {
      fontSize: '16px',
      fontWeight: '700',
      color: colors.accentGold,
      marginBottom: '8px',
      letterSpacing: '0.5px',
    },
    footerLink: {
      color: colors.textMuted,
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.2s ease',
      display: 'inline-block',
      lineHeight: '1.6',
    },
    footerBottom: {
      maxWidth: '1200px',
      margin: '40px auto 0',
      padding: '20px 24px 0',
      borderTop: `1px solid rgba(191, 165, 134, 0.3)`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    copyright: {
      fontSize: '13px',
      color: '#A0B0B0',
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
    },
    socialIcon: {
      width: '36px',
      height: '36px',
      borderRadius: '6px',
      backgroundColor: 'rgba(191, 165, 134, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.accentGold,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    contactText: {
      fontSize: '14px',
      color: colors.textMuted,
      lineHeight: '1.6',
      margin: '4px 0',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Column 1: Brand */}
        <div style={styles.footerColumn}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
          <img src="./pic.jpg" alt="Logo" style={{
  width: '50px',
  height: '50px',
  objectFit: 'contain',
  borderRadius: '6px',
            }} />
            <span style={{fontSize: '20px', fontWeight: '700', color: colors.white}}>Aliado Patrimonial, S.A.P.I. de C.V. SOFOM, E.N.R.</span>
          </div>
        
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.footerColumn}>
          <h4 style={styles.footerTitle}>Navegación</h4>
          {footerNavItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              style={styles.footerLink}
              onMouseOver={(e) => e.currentTarget.style.color = colors.accentGold}
              onMouseOut={(e) => e.currentTarget.style.color = colors.textMuted}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Column 3: Contact */}
        <div style={styles.footerColumn}>
          <h4 style={styles.footerTitle}>Contacto</h4>
          <p style={styles.contactText}>Avenida Ejército Nacional 676,interior Piso 4<br/>Colonia Polanco III Sección<br/>C.P.11540, Miguel Hidalgo, Ciudad de México</p>
        </div>

        {/* Column 4: Legal */}
        <div style={styles.footerColumn}>
          <h4 style={styles.footerTitle}>Legal</h4>
          <a href="#/" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = colors.accentGold} onMouseOut={(e) => e.currentTarget.style.color = colors.textMuted}>Política de Privacidad</a>
          <a href="#/" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = colors.accentGold} onMouseOut={(e) => e.currentTarget.style.color = colors.textMuted}>Política de Cookies</a>
          <a href="#/" style={styles.footerLink} onMouseOver={(e) => e.currentTarget.style.color = colors.accentGold} onMouseOut={(e) => e.currentTarget.style.color = colors.textMuted}>Términos de Uso</a>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div style={styles.copyright}>
          © 2026 EMPRESA. Todos los derechos reservados.
        </div>
        
       
      </div>
    </footer>
  );
};
export default Footer;
