// TimeLine.jsx
import React from 'react';
import { theme } from './theme';

const TimeLine = ({ items }) => {
  const styles = {
    container: {
      position: 'relative',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 0',
      fontFamily: "'Roboto', sans-serif",
    },
    // The central vertical line
    line: {
      position: 'absolute',
      left: '50%',
      top: '0',
      bottom: '0',
      width: '2px',
      backgroundColor: theme.colors.accentGold,
      transform: 'translateX(-50%)',
      zIndex: 0,
    },
    item: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      position: 'relative',
      zIndex: 1,
    },
    contentBox: {
      width: '45%',
      padding: '30px',
      backgroundColor: theme.colors.white,
      borderRadius: '8px',
      boxShadow: theme.shadows.card,
      position: 'relative',
      transition: theme.transitions.standard,
    },
    dot: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: theme.colors.primary,
      border: `4px solid ${theme.colors.accentGold}`,
      zIndex: 2,
    },
    date: {
      fontSize: '14px',
      fontWeight: '700',
      color: theme.colors.accentOchre,
      marginBottom: '8px',
      display: 'block',
      letterSpacing: '1px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '700',
      color: theme.colors.primary,
      marginBottom: '12px',
    },
    description: {
      fontSize: '15px',
      color: theme.colors.textMuted,
      lineHeight: '1.6',
    },
    // Spacer for flex balance
    spacer: {
      width: '65%',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.line}></div>
      
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div key={index} style={styles.item}>
            {/* Left Side - Spacer or Content */}
            {isLeft ? (
              <div 
                style={{
                  ...styles.contentBox,
                  marginRight: 'auto',
                  textAlign: 'right',
                }}
        
              >
                <span style={styles.date}>{item.date}</span>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>
            ) : (
              <div style={styles.spacer}></div>
            )}

            {/* Center Dot */}
            <div style={styles.dot}></div>
            
            {/* Right Side - Content or Spacer */}
            {isLeft ? (
              <div style={styles.spacer}></div>
            ) : (
              <div 
                style={{
                  ...styles.contentBox,
                  marginLeft: 'auto',
                  textAlign: 'left',
                }}
         
              >
                <span style={styles.date}>{item.date}</span>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TimeLine;