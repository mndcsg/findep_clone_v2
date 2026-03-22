// Comite.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import Table from '../components_v2/Table';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const Comite = () => {
  // 表格数据 - 转换为 Table 组件格式
  const tableHeaders = ['Comités de Auditoría y Prácticas Societarias', 'Rol'];
  
  const tableData = [
    ['Carlos Javier de la Paz Mena', 'Consejero Propietario (independiente)'],
    ['José Ramón Elizondo Anaya', 'Consejero Propietario (independiente)'],
    ['Héctor Ángel Rodríguez Acosta', 'Consejero Propietario (independiente)'],
    ['Juan García Madrigal', 'Coordinador']
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
    centeredContainer: {
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      padding: '60px 24px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    section: {
      width: '100%',
      // marginBottom: '60px'
    },
    // 两列布局容器
    twoColumnContainer: {
      width: '100%',
      display: 'flex',
      gap: '40px',
      margin: '40px 0',
      boxSizing: 'border-box',
      flexWrap: 'wrap'
    },
    leftColumn: {
      flex: '1',
      minWidth: '300px'
    },
    rightColumn: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '300px'
    },
    sideImage: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '8px',
      boxShadow: theme.shadows.card
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
          image="./photo-1556761175-b413da4baf72.jpeg"
          title="Comités del Consejo"
          description="Estructura especializada para una gestión sólida y transparente"
        />
        
        {/* 委员会简介 */}
        <div style={styles.centeredContainer}>
          <SectionTitle 
            title="Gobierno Corporativo" 
            subtitle="COMITÉS ESPECIALIZADOS"
            align="center"
          />
          <WideCard align="left">
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              El{' '}
              <strong style={styles.highlight}>Comité de Gobierno Corporativo</strong>{' '}
              es un órgano consultivo fundamental del Consejo.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Se encarga de evaluar y proponer las{' '}
              <strong style={styles.highlight}>políticas de gobierno corporativo</strong>{' '}
              de la entidad.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Asesora sobre la{' '}
              <strong style={styles.highlight}>integración, composición y renovación</strong>{' '}
              del Consejo de Administración.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              Garantiza el{' '}
              <strong style={styles.highlight}>cumplimiento normativo y la transparencia</strong>{' '}
              en la gestión corporativa.
            </p>
          </WideCard>
        </div>

        {/* 表格 + 图片 两列布局 */}
        <div style={{ ...styles.section, backgroundColor: theme.colors.background }}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Comité de Auditoría" 
              subtitle="INTEGRANTES"
              align="center"
            />
            <div style={styles.twoColumnContainer}>
              {/* 左列 - 表格 */}
              <div style={styles.leftColumn}>
                <Table 
                  headers={tableHeaders}
                  data={tableData}
                  width="100%"
                />
              </div>
              
              {/* 右列 - 图片 */}
              <div style={styles.rightColumn}>
                <img 
                  src="./photo-1577962917302-cd874c4e31d2.jpeg"
                  alt="Comité de Auditoría"
                  style={styles.sideImage}
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

export default Comite;