// WideCard.jsx
import React from 'react';
import { theme } from './theme';

const WideCard = ({ title, children, align = 'left' }) => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px 0',
      fontFamily: "'Roboto', sans-serif",
      textAlign: align,
      // Explicitly no background, no shadow, no border as requested
      backgroundColor: 'transparent',
      boxShadow: 'none',
      border: 'none',
    },
    title: {
      fontSize: '32px',
      fontWeight: '800',
      color: theme.colors.primary,
      marginBottom: '24px',
      lineHeight: '1.2',
      letterSpacing: '-0.5px',
    },
    content: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: theme.colors.textDark,
      fontWeight: '300',
    }
  };

  return (
    <div style={styles.container}>
      {title && <h2 style={styles.title}>{title}</h2>}
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default WideCard;