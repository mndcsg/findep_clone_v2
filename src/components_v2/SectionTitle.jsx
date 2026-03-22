// SectionTitle.jsx
import React from 'react';
import { theme } from './theme';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const styles = {
    container: { textAlign: align, marginBottom: '60px', maxWidth: '800px', margin: `0 auto 60px auto`, fontFamily: "'Roboto', sans-serif" },
    subtitle: { color: theme.colors.accentOchre, fontSize: '14px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px', display: 'block' },
    title: { color: theme.colors.primary, fontSize: '42px', fontWeight: '800', lineHeight: '1.2', position: 'relative', display: 'inline-block' },
    underline: { width: '80px', height: '4px', backgroundColor: theme.colors.accentGold, marginTop: '20px', borderRadius: '2px', marginLeft: align === 'center' ? 'auto' : (align === 'left' ? '0' : 'auto'), marginRight: align === 'right' ? '0' : 'auto' }
  };

  return (
    <div style={styles.container}>
      {subtitle && <span style={styles.subtitle}>{subtitle}</span>}
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.underline}></div>
    </div>
  );
};

export default SectionTitle;