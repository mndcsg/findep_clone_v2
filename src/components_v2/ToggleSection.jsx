// ToggleSection.jsx
import React, { useState } from 'react';
import { theme } from './theme';
import { useNavigate } from 'react-router-dom';

const ToggleSection = ({ items, initialPath }) => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState(
    initialPath || (items.length > 0 ? items[0].path : '')
  );

  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.primary}`,
      borderRadius: '4px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(26, 77, 77, 0.08)',
      maxWidth: '800px',
      margin: '0 auto 24px auto',
      height: '44px',
    },
    item: (isActive) => ({
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      backgroundColor: isActive ? theme.colors.primary : 'transparent',
      color: isActive ? theme.colors.white : theme.colors.primary,
      fontWeight: isActive ? 600 : 500,
      fontSize: '13px',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      borderBottom: isActive ? `2px solid ${theme.colors.accentGold}` : '2px solid transparent',
      transition: 'all 0.25s ease',
      position: 'relative',
      height: '100%',
    }),
    separator: {
      width: '1px',
      height: '60%',
      backgroundColor: '#D1DBDB',
      alignSelf: 'center',
    }
  };

  const handleClick = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <div style={styles.container}>
      {items.map((item, index) => {
        const isActive = activePath === item.path;
        
        return (
          <React.Fragment key={item.path}>
            <div
              style={styles.item(isActive)}
              onClick={() => handleClick(item.path)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(26, 77, 77, 0.04)';
                  e.currentTarget.style.color = theme.colors.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.colors.primary;
                }
              }}
            >
              {item.label}
            </div>

            {index < items.length - 1 && (
              <div style={styles.separator} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ToggleSection;



