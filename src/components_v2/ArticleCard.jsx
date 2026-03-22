// ArticleCard.jsx
import React from 'react';
import { theme } from './theme';

const ArticleCard = ({ title, description, date, author }) => {
  const styles = {
    card: { 
      backgroundColor: theme.colors.white,
      borderLeftColor:theme.colors.accentGold,
      transform:'translateY(-5px)',


       padding: '40px', borderRadius: '12px', 
       boxShadow: theme.shadows.hover, 
       transition: theme.transitions.standard,
        borderLeft: `4px solid transparent`, height: '100%', 
        display: 'flex', flexDirection: 'column', 
        justifyContent: 'space-between' },
    meta: { fontSize: '13px', color: theme.colors.accentOchre, fontWeight: '600', marginBottom: '16px', letterSpacing: '0.5px' },
    title: { fontSize: '24px', fontWeight: '700', color: theme.colors.primary, marginBottom: '16px', lineHeight: '1.3' },
    description: { fontSize: '15px', color: theme.colors.textMuted, lineHeight: '1.7', marginBottom: '24px' },
    link: { fontSize: '14px', fontWeight: '700', color: theme.colors.primary, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: theme.transitions.standard }
  };

  return (
    <div 
      style={styles.card}
    
    >
      <div>
        {(date || author) && (
          <div style={styles.meta}>
            {date && <span>{date}</span>}
            {date && author && <span> • </span>}
            {author && <span>{author}</span>}
          </div>
        )}
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>

    </div>
  );
};

export default ArticleCard;