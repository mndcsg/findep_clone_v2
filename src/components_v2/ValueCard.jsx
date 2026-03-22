// ValueCard.jsx
import React from 'react';
import { theme } from './theme';

const ValueCard = ({ number, label, description, suffix = "" }) => {
  const styles = {
    card: { backgroundColor: theme.colors.primary, padding: '40px 30px', borderRadius: '12px', textAlign: 'center', color: theme.colors.textLight, boxShadow: theme.shadows.card, transition: theme.transitions.standard, position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
    decoration: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150px', height: '150px', borderRadius: '50%', border: `1px solid ${theme.colors.accentGold}`, opacity: 0.2, zIndex: 0 },
    numberWrapper: { position: 'relative', zIndex: 1, marginBottom: '16px' },
    number: { fontSize: '64px', fontWeight: '800', color: theme.colors.accentGold, lineHeight: '1', letterSpacing: '-2px' },
    suffix: { fontSize: '32px', fontWeight: '700', color: theme.colors.accentGold, verticalAlign: 'top', marginLeft: '4px' },
    label: { fontSize: '18px', fontWeight: '600', color: theme.colors.white, marginBottom: '12px', zIndex: 1, position: 'relative' },
    description: { fontSize: '14px', color: 'rgba(240, 242, 240, 0.7)', lineHeight: '1.5', maxWidth: '80%', zIndex: 1, position: 'relative' }
  };

  return (
    <div 
      style={styles.card}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(26, 77, 77, 0.3)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = theme.shadows.card;
      }}
    >
      <div style={styles.decoration}></div>
      <div style={styles.numberWrapper}>
        <span style={styles.number}>{number}</span>
        {suffix && <span style={styles.suffix}>{suffix}</span>}
      </div>
      <h3 style={styles.label}>{label}</h3>
      {description && <p style={styles.description}>{description}</p>}
    </div>
  );
};

export default ValueCard;