// PersonCard.jsx
import React, { useState, useRef, useEffect } from 'react';
import { theme } from './theme';

const PersonCard = ({ name, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const contentRef = useRef(null);

  // 检测内容高度是否需要展开按钮
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      // 当内容高度超过 40px 时显示展开按钮
      setShowExpandButton(contentHeight > 160);
    }
  }, [description, isExpanded]);

  const styles = {
    card: {
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.primary}`,
      borderRadius: '6px',
      overflow: 'hidden',
      maxWidth: '650px',
      boxShadow: '0 4px 20px rgba(26, 77, 77, 0.15)',
      marginBottom: '24px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    header: {
      backgroundColor: theme.colors.primary,
      padding: '24px 24px 20px 24px',
      position: 'relative',
      borderBottom: `3px solid ${theme.colors.accentGold}`,
      zIndex: 1,
    },
    cornerAccent: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '40px',
      height: '40px',
      background: `linear-gradient(135deg, transparent 50%, ${theme.colors.accentGold} 50%)`,
    },
    nameContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center',
      paddingRight: '0',
    },
    name: {
      color: theme.colors.white,
      fontSize: '20px',
      fontWeight: '800',
      margin: 0,
      lineHeight: 1.3,
      letterSpacing: '0.5px',
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    titleBadge: {
      alignSelf: 'center',
      backgroundColor: theme.colors.accentOchre,
      backdropFilter: 'blur(4px)',
      border: `1px solid ${theme.colors.accentGold}`,
      color: theme.colors.white,
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      marginTop: '4px',
      display: 'inline-block',
    },
    content: {
      padding: '24px',
      backgroundColor: theme.colors.white,
      position: 'relative',
      // 未展开时限制高度
      maxHeight: isExpanded ? 'none' : '160px',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
    },
    descriptionWrapper: {
      paddingLeft: '4px',
    },
    description: {
      color: theme.colors.textDark,
      fontSize: '15px',
      lineHeight: 1.7,
      margin: 0,
      textAlign: 'left',
      fontWeight: 400,
    },
    // 展开按钮样式
    expandButton: {
      position: 'absolute',
      bottom: '8px',
      right: '24px',
      backgroundColor: theme.colors.accentOchre,
      color: theme.colors.white,
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      fontSize: '20px',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(140, 94, 72, 0.4)',
      transition: 'all 0.3s ease',
      zIndex: 10,
    },
    footerAccent: {
      height: '6px',
      backgroundColor: theme.colors.primary,
      width: '100%',
      marginTop: 'auto',
    }
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.card}>
      {/* 头部装饰角 */}
      <div style={styles.cornerAccent} />
      
      <div style={styles.header}>
        <div style={styles.nameContainer}>
          <h3 style={styles.name}>{name}</h3>
          <span style={styles.titleBadge}>{title}</span>
        </div>
      </div>

      <div style={styles.content}>
        <div ref={contentRef} style={styles.descriptionWrapper}>
          <p style={styles.description}>{description}</p>
        </div>
        
        {/* 展开/收起按钮 - 仅当内容超过 40px 时显示 */}
        {showExpandButton && (
          <button 
            style={{
              ...styles.expandButton,
              transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
            onClick={handleExpandClick}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary;
              e.currentTarget.style.transform = isExpanded ? 'rotate(45deg) scale(1.1)' : 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.accentOchre;
              e.currentTarget.style.transform = isExpanded ? 'rotate(45deg)' : 'rotate(0deg)';
            }}
          >
            {isExpanded ? '−' : '+'}
          </button>
        )}
      </div>

      {/* 底部色条 */}
      <div style={styles.footerAccent} />
    </div>
  );
};

export default PersonCard;