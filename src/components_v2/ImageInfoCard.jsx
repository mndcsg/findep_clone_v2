// ImageInfoCard.jsx
import React from 'react';
import { theme } from './theme';

const ImageInfoCard = ({ image, title, description }) => {
  const styles = {
    card: { backgroundColor: theme.colors.white, borderRadius: '12px', overflow: 'hidden', boxShadow: theme.shadows.card, transition: theme.transitions.standard, height: '100%', display: 'flex', flexDirection: 'column', cursor: 'default' },
    imageWrapper: { height: '240px', overflow: 'hidden', position: 'relative' },
    image: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' },
    content: { padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' },
    title: { fontSize: '22px', fontWeight: '700', color: theme.colors.primary, marginBottom: '12px' },
    description: { fontSize: '15px', color: theme.colors.textMuted, lineHeight: '1.6', flex: 1 }
  };

  return (
    <div 
      style={styles.card}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.hover;
        e.currentTarget.style.transform = 'translateY(-8px)';
        const img = e.currentTarget.querySelector('img');
        if(img) img.style.transform = 'scale(1.08)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.card;
        e.currentTarget.style.transform = 'translateY(0)';
        const img = e.currentTarget.querySelector('img');
        if(img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={styles.imageWrapper}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ImageInfoCard;