// CustomTable.jsx
import React from 'react';
import { theme } from './theme';

const Table = ({ headers, data, width = '100%' }) => {
  const styles = {
    wrapper: {
      width: width,
      overflowX: 'auto',
      fontFamily: "'Roboto', sans-serif",
      marginBottom: '40px',
      // 移除容器背景，让表格本身成为主体
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse', // 关键：合并边框以形成清晰网格
      fontSize: '15px',
      minWidth: '600px',
      // 整个表格的外边框
      border: `2px solid ${theme.colors.primary}`, 
      backgroundColor: theme.colors.white,
    },
    th: {
      // 【核心需求】表头背景填充为主色
      backgroundColor: theme.colors.primary, 
      color: theme.colors.accentGold, // 沙金文字，高对比度
      padding: '16px 20px',
      textAlign: 'left',
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      fontSize: '14px',
      // 表头单元格之间的分隔线 (白色或浅色，在主色背景下可见)
      borderRight: `1px solid rgba(255, 255, 255, 0.2)`,
      borderBottom: `2px solid ${theme.colors.accentGold}`, // 表头底部的强调线
    },
    td: {
      padding: '14px 20px',
      color: theme.colors.textDark,
      // 【核心需求】清晰的网格分隔线
      borderRight: `1px solid #CBD5D5`, 
      borderBottom: `1px solid #CBD5D5`,
      backgroundColor: theme.colors.white,
    },
    // 最后一列去掉右边框，保持整洁
    lastCell: {
      borderRight: 'none',
    },
    // 最后一行去掉下边框（可选，看是否喜欢底部封闭）
    lastRowCell: {
       borderBottom: 'none',
    }
  };

  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                style={{
                  ...styles.th,
                  ...(index === headers.length - 1 ? styles.lastCell : {})
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  style={{
                    ...styles.td,
                    ...(cellIndex === row.length - 1 ? styles.lastCell : {}),
                    // 如果是最后一行，可以选择去掉底部边框，或者保留以封闭表格
                    // ...(rowIndex === data.length - 1 ? styles.lastRowCell : {}) 
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;