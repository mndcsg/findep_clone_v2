// BusinessInkGoldPlotSection.js
import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush
} from 'recharts';

// 定义主题色对象
const theme = {
  colors: {
    primary: '#1A4D4D', // 深黛绿
    accentGold: '#D4B16A', // 沙金色
    white: '#FFFFFF',
    textDark: '#2D2D2D', // 深灰黑
    textLight: '#6B7280', // 浅黛灰
    backgroundLight: '#F9FAFB', // 极浅背景
    borderLight: '#D1D5DB' // 浅边框
  }
};

const PlotSection = () => {
  // --- 1. 生成伪造数据 ---
  const generateData = () => {
    const data = [];
    let basePrice = 8.50;
    const startDate = new Date('2026-01-01');
    
    for (let i = 0; i < 90; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      if (date.getDay() === 0 || date.getDay() === 6) continue;

      const volatility = 0.15;
      const change = (Math.random() - 0.48) * volatility;
      const open = basePrice;
      const close = basePrice + change;
      const high = Math.max(open, close) + Math.random() * 0.05;
      const low = Math.min(open, close) - Math.random() * 0.05;
      const volume = Math.floor(Math.random() * 2000) + 100;

      data.push({
        date: date.toISOString().split('T')[0],
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        volume: volume,
        displayDate: `${date.getDate()}/${date.getMonth() + 1}`
      });

      basePrice = close;
    }
    return data;
  };

  const data = useMemo(() => generateData(), []);
  
  const latest = data[data.length - 1];
  const previous = data[data.length - 2];
  const variation = latest && previous ? (latest.close - previous.close).toFixed(2) : "0.00";
  const variationPercent = latest && previous ? ((variation / previous.close) * 100).toFixed(2) : "0.00";
  const isPositive = variation >= 0;

  // --- 2. 样式定义 (严格使用 Theme 颜色) ---
  const styles = {
    card: {
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.primary}`,
      borderRadius: '6px',
      padding: '32px',
      boxSizing: 'border-box',
      boxShadow: '0 4px 20px rgba(26, 77, 77, 0.08)',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '32px',
      gap: '20px',
      flexWrap: 'wrap',
      borderBottom: `2px solid ${theme.colors.accentGold}`,
      paddingBottom: '20px',
    },
    titleGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      color: theme.colors.primary,
      margin: 0,
      letterSpacing: '0.5px',
    },
    subtitle: {
      fontSize: '13px',
      color: theme.colors.textLight,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 500,
    },
    priceGroup: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '8px',
    },
    currentPrice: {
      fontSize: '28px',
      fontWeight: '700',
      color: theme.colors.primary,
      lineHeight: '1.2',
    },
    variationBadge: {
      fontSize: '13px',
      fontWeight: '700',
      color: isPositive ? theme.colors.primary : '#C0372D',
      backgroundColor: isPositive ? 'rgba(26, 77, 77, 0.08)' : 'rgba(192, 55, 45, 0.08)',
      padding: '4px 10px',
      borderRadius: '4px',
      display: 'inline-block',
      border: `1px solid ${isPositive ? theme.colors.primary : '#C0372D'}`,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
    },
    chartContainer: {
      width: '100%',
      height: '350px',
      position: 'relative',
    },
    tableSection: {
      width: '100%',
    },
    tableTitle: {
      fontSize: '16px',
      color: theme.colors.primary,
      marginBottom: '16px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    titleAccent: {
      width: '4px',
      height: '18px',
      backgroundColor: theme.colors.primary,
      borderRadius: '2px',
    },
    tableWrapper: {
      overflowX: 'auto',
      border: `1px solid ${theme.colors.borderLight}`,
      borderRadius: '4px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '500px',
    },
    th: {
      textAlign: 'left',
      padding: '12px 16px',
      fontSize: '12px',
      fontWeight: '700',
      color: theme.colors.textLight,
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      borderBottom: `2px solid ${theme.colors.primary}`,
      backgroundColor: 'rgba(26, 77, 77, 0.03)',
    },
    td: {
      padding: '12px 16px',
      fontSize: '14px',
      color: theme.colors.textDark,
      borderBottom: `1px solid ${theme.colors.borderLight}`,
      fontFamily: "'Roboto', sans-serif",
    },
    source: {
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: `1px solid ${theme.colors.borderLight}`,
      fontSize: '11px',
      color: theme.colors.textLight,
      textAlign: 'right',
      fontStyle: 'italic',
    },
    customTooltip: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      padding: '12px 16px',
      borderRadius: '4px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      border: `1px solid ${theme.colors.primary}`,
      fontSize: '13px',
    },
    tooltipLabel: {
      marginBottom: '8px',
      fontSize: '12px',
      fontWeight: '700',
      color: theme.colors.primary,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    tooltipRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '24px',
      margin: '4px 0',
    },
    tooltipKey: {
      opacity: 0.8,
      fontWeight: 400,
    },
    tooltipVal: {
      fontWeight: 700,
      color: theme.colors.primary,
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div style={styles.customTooltip}>
          <div style={styles.tooltipLabel}>{d.date}</div>
          <div style={styles.tooltipRow}>
            <span style={styles.tooltipKey}>Cierre:</span>
            <span style={styles.tooltipVal}>${d.close.toFixed(2)}</span>
          </div>
          <div style={styles.tooltipRow}>
            <span style={styles.tooltipKey}>Máximo:</span>
            <span style={{color: theme.colors.white}}>${d.high.toFixed(2)}</span>
          </div>
          <div style={styles.tooltipRow}>
            <span style={styles.tooltipKey}>Mínimo:</span>
            <span style={{color: theme.colors.white}}>${d.low.toFixed(2)}</span>
          </div>
          <div style={styles.tooltipRow}>
            <span style={styles.tooltipKey}>Volumen:</span>
            <span style={{color: theme.colors.white}}>{d.volume.toLocaleString()}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={styles.card}>
      {/* 头部信息 */}
      <div style={styles.header}>
        <div style={styles.titleGroup}>
          <h2 style={styles.title}>Aliado Patrimonial, S.A.P.I. de C.V., SOFOM, E.N.R.</h2>
          <p style={styles.subtitle}>
            <span style={{width: '8px', height: '8px', backgroundColor: theme.colors.primary, borderRadius: '50%', display: 'inline-block'}}></span>
            Bolsa Mexicana de Valores &nbsp;|&nbsp; Retraso de 20 min
          </p>
        </div>
        <div style={styles.priceGroup}>
          <div style={styles.currentPrice}>
            ${latest ? latest.close.toFixed(2) : '0.00'}
          </div>
          <div style={styles.variationBadge}>
            {isPositive ? '+' : ''}{variation} ({isPositive ? '+' : ''}{variationPercent}%)
          </div>
        </div>
      </div>

      {/* 内容区域：图表 + 表格 */}
      <div style={styles.contentContainer}>
        
        {/* 图表区域 - 颜色已完全替换 */}
        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPriceNew" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={theme.colors.primary} stopOpacity={0.4}/>
                  <stop offset="95%" stopColor={theme.colors.primary} stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              {/* 网格线：使用 theme 颜色，增加透明度使其更柔和 */}
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false} 
                stroke={theme.colors.primary} 
                strokeOpacity={0.1} 
              />
              
              {/* X 轴：文字和轴线均使用主题色 */}
              <XAxis 
                dataKey="displayDate" 
                tick={{
                  fontSize: 11, 
                  fill: theme.colors.textLight, 
                  fontFamily: 'Roboto'
                }} 
                axisLine={{stroke: theme.colors.borderLight}}
                tickLine={{stroke: theme.colors.borderLight}}
                minTickGap={30}
                dy={10}
              />
              
              {/* Y 轴：文字和轴线均使用主题色 */}
              <YAxis 
                domain={['auto', 'auto']} 
                tick={{
                  fontSize: 11, 
                  fill: theme.colors.textLight, 
                  fontFamily: 'Roboto'
                }} 
                axisLine={{stroke: theme.colors.borderLight}}
                tickLine={{stroke: theme.colors.borderLight}}
                tickFormatter={(val) => `$${val}`}
                width={45}
              />
              
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: theme.colors.primary, strokeWidth: 1, strokeDasharray: '4 4' }} />
              
              <Area 
                type="monotone" 
                dataKey="close" 
                stroke={theme.colors.primary} 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#colorPriceNew)" 
                animationDuration={1500}
                name="Precio"
              />
              
              {/* Brush：背景、选中框、滑块全部使用主题色 */}
              <Brush 
                dataKey="displayDate" 
                height={30} 
                stroke={theme.colors.primary} 
                fill={theme.colors.backgroundLight} 
                travellerWidth={8}
                travellerFill={theme.colors.accentGold}
                tick={{fontSize: 10, fill: theme.colors.textLight}}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 数据表格 */}
        <div style={styles.tableSection}>
          <h3 style={styles.tableTitle}>
            <div style={styles.titleAccent}></div>
            Historial Reciente
          </h3>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Fecha</th>
                  <th style={styles.th}>Precio Cierre</th>
                  <th style={{...styles.th, textAlign: 'right'}}>Volumen</th>
                </tr>
              </thead>
              <tbody>
                {[...data].reverse().slice(0, 10).map((row, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{row.displayDate}</td>
                    <td style={{...styles.td, fontWeight: '700', color: theme.colors.primary}}>
                      ${row.close.toFixed(2)}
                    </td>
                    <td style={{...styles.td, textAlign: 'right', color: theme.colors.textDark, fontFamily: 'Roboto Mono, monospace'}}>
                      {row.volume.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={styles.source}>
        Fuente: Datos simulados con fines de demostración de diseño (Original: Economatica)
      </div>
    </div>
  );
};

export default PlotSection;



