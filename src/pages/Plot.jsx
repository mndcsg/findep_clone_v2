// Plot.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import ToggleSection from '../components_v2/ToggleSection';
import PlotSection from '../components_v2/PlotSection';
import { theme } from '../components_v2/theme';

const Plot = () => {
  // ToggleSection 数据 - 使用指定的 menuItems
  const menuItems = [
    { label: "Gráfica Histórica", path: "/accion/grafica-historica" },
    { label: "Información de Dividendos", path: "/accion/precios-historicos" },
    { label: "Cobertura de Analistas", path: "/accion/analistas" }
  ];

  const styles = {
    main: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Roboto', sans-serif",
      overflowX: 'hidden'
    },
    content: {
      flex: 1,
      width: '100%'
    },
    // 上下布局容器 - 改为垂直排列
    contentContainer: {
      width: '100%',
      padding: '40px 80px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',  // 改为垂直排列
      gap: '40px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    // ToggleSection 容器 - 居中对齐
    toggleWrapper: {
      width: '100%',
      // display: 'flex',
      // justifyContent: 'center',
      // marginBottom: '20px'
    },
    // 主要内容容器
    contentWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    sectionWrapper: {
      width: '100%',
      marginBottom: '60px'
    },
    // 高亮文本样式
    highlight: {
      color: theme.colors.accentOchre,
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.main}>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main style={styles.content}>
        
        {/* Banner */}
        <Banner 
          image="./photo-1611974789855-9c2a0a7236a3.jpeg"
          title="Gráfica Histórica"
          description="Evolución y datos clave de la acción en tiempo real"
        />
        
        {/* 上下布局容器 */}
        <div style={styles.contentContainer}>
          
          {/* ToggleSection - 顶部居中 */}
          <div style={styles.toggleWrapper}>
            <ToggleSection 
              items={menuItems}
              initialPath="#/accion/grafica-historica"
            />
          </div>
          
          {/* 主要内容 - 下方 */}
          <div style={styles.contentWrapper}>
            
            {/* 简介文字 */}
            <div style={styles.sectionWrapper}>
              <WideCard align="center">
                <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                  La{' '}
                  <strong style={styles.highlight}>Gráfica Histórica</strong>{' '}
                  refleja la trayectoria y evolución del valor de la acción a lo largo del tiempo.
                </p>
                <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                  Permite analizar{' '}
                  <strong style={styles.highlight}>tendencias, volatilidad y rendimiento histórico</strong>{' '}
                  de forma visual y detallada.
                </p>
                <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                  Proporciona{' '}
                  <strong style={styles.highlight}>datos fundamentales y contextuales</strong>{' '}
                  para la toma de decisiones de inversión.
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  Ofrece una visión integral de la{' '}
                  <strong style={styles.highlight}>performance y solidez financiera</strong>{' '}
                  del activo en el mercado.
                </p>
              </WideCard>
            </div>
            
            {/* 股票图表 */}
            <div style={styles.sectionWrapper}>
              <PlotSection />
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Plot;