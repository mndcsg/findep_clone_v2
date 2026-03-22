import React from 'react';

const colors = {
  primary: '#1A4D4D',
  accentGold: '#BFA586',
  textLight: '#F0F2F0',
  overlayDark: 'rgba(26, 77, 77, 0.9)',
};

const Banner = ({ image, title, description }) => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '450px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: colors.primary,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(to right, ${colors.overlayDark} 0%, rgba(26, 77, 77, 0.7) 60%, rgba(26, 77, 77, 0.3) 100%)`,
      zIndex: 2,
    },
    content: {
      position: 'relative',
      zIndex: 3,
      maxWidth: '1200px',
      width: '90%',
      color: colors.textLight,
      padding: '40px',
      paddingLeft: '60px',
      borderLeft: `4px solid ${colors.accentGold}`,
      backgroundColor: 'rgba(26, 77, 77, 0.3)',
      backdropFilter: 'blur(2px)',
      borderRadius: '0 8px 8px 0',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    },
    title: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '16px',
      letterSpacing: '0.5px',
      lineHeight: '1.2',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.6',
      opacity: 0.95,
      maxWidth: '600px',
      fontWeight: '300',
      textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    },
  };

  const reliableImage = image || "./photo-1486325212027-8081e485255e.png";

  return (
    <div style={styles.container}>
      <img src={reliableImage} alt={title} style={styles.backgroundImage} onError={(e) => {e.target.style.display='none'}} />
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>{title || "Título de Ejemplo"}</h1>
        <p style={styles.description}>{description || "Descripción de ejemplo para verificar la visibilidad del componente."}</p>
      </div>
    </div>
  );
};

export default Banner;



