// DiviDendos.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import Table from '../components_v2/Table';
import WideCard from '../components_v2/WideCard';
import ToggleSection from '../components_v2/ToggleSection';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const DiviDendos = () => {
  // ToggleSection 数据 - 使用指定的 menuItems
  const menuItems = [
    { label: "Gráfica Histórica", path: "/accion/grafica-historica" },
    { label: "Información de Dividendos", path: "/accion/precios-historicos" },
    { label: "Cobertura de Analistas", path: "/accion/analistas" }
  ];

  // 股息表格数据 - 转换为 Table 组件格式（二维数组）
  const tableHeaders = [
    'Fecha de aprobación de dividendo',
    'Fecha de pago de dividendo',
    'Monto total del dividendo declarado'
  ];
  
  const tableData = [
    ['29-APR-25', '12-MAY-25', '$1,250,000,000'],
    ['29-APR-08', '14-MAY-08, 6-APR-08, 5-NOV-08, 4-FEB-09', '$510,000,000'],
    ['20-MAR-07', '21-MAR-07', '$178,785,156'],
    ['20-JUN-06', '21-JUN-06', '$836,552,509'],
    ['27-MAR-06', '27-MAR-06', '$73,265,261']
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
    // 表格容器样式
    tableContainer: {
      width: '100%',

      margin: '0 auto'
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
          title="Información de la Acción y Dividendos"
          description="Datos actualizados de la acción, rentabilidad y pagos de dividendos para inversionistas."
        />
        
        {/* 上下布局容器 */}
        <div style={styles.contentContainer}>
          
          {/* ToggleSection - 顶部居中 */}
          <div style={styles.toggleWrapper}>
            <ToggleSection 
              items={menuItems}
              initialPath="/accion/precios-historicos"
            />
          </div>
          
          {/* 主要内容 - 下方 */}
          <div style={styles.contentWrapper}>
            
            {/* 简介文字 */}
            <div style={styles.sectionWrapper}>
              <SectionTitle 
                title="Dividendos" 
                subtitle="REMUNERACIÓN AL ACCIONISTA"
                align="center"
              />
              <WideCard align="center">
                <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                  Accedemos a la{' '}
                  <strong style={styles.highlight}>Información de la Acción</strong>{' '}
                  y su rendimiento en el mercado bursátil.
                </p>
                <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                  Conocer los{' '}
                  <strong style={styles.highlight}>Dividendos Distribuidos</strong>{' '}
                  y la política de remuneración al accionista.
                </p>
                <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                  Datos actualizados de{' '}
                  <strong style={styles.highlight}>rentabilidad, historial y pagos</strong>{' '}
                  para decisiones de inversión informadas.
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  Visión completa de la{' '}
                  <strong style={styles.highlight}>solidez y retorno financiero</strong>{' '}
                  de la entidad.
                </p>
              </WideCard>
            </div>
          
            {/* 股息表格 */}
            <div style={styles.sectionWrapper}>
              <div style={styles.tableContainer}>
                <Table 
                  headers={tableHeaders}
                  data={tableData}
                  width="100%"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DiviDendos;