// Analistas.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import Table from '../components_v2/Table';
import SectionTitle from '../components_v2/SectionTitle';
import ToggleSection from '../components_v2/ToggleSection';


const Analistas = () => {
  // ToggleSection 数据 - 使用指定的 menuItems
  const menuItems = [
    { label: "Gráfica Histórica", path: "/accion/grafica-historica" },
    { label: "Información de Dividendos", path: "/accion/precios-historicos" },
    { label: "Cobertura de Analistas", path: "/accion/analistas" }
  ];

  // CAPITAL 表格数据 - 转换为 Table 组件格式
  const capitalHeaders = ['Nombre', 'Institución', 'Correo'];
  
  const capitalData = [
    ['Carlos de Legarreta', 'GBM', 'cadelegarreta@gbm.com']
  ];

  // DEUDA 表格数据 - 转换为 Table 组件格式
  const deudaHeaders = ['Nombre', 'Institución', 'Correo'];
  
  const deudaData = [
    ['Arturo Galindo', 'BCP Securities LLC.', 'agalindo@bcpsecurities.com'],
    ['Nicolas Riva', 'BofA', 'nicolas.riva@bofa.com'],
    ['Natalia Corfield', 'J.P. Morgan', 'natalia.corfield@jpmorgan.com'],
    ['Jonathan Szwarc', 'DebtWire', 'jonathan.szwarc@acuris.com'],
    ['Nick Dimitrov', 'Morgan Stanley', 'nickolai.dimitrov@morganstanley.com']
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

    },
    // 主要内容容器
    contentWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      
    },
    sectionWrapper: {
      width: '100%',
      marginBottom: '60px'
    },
    // 表格容器样式
    tableContainer: {
      width: '100%',

      margin: '0 auto'
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
          title="Cobertura de Analistas"
          description="Equipo de análisis financiero"
        />
        
        {/* 上下布局容器 */}
        <div style={styles.contentContainer}>
          
          {/* ToggleSection - 顶部居中 */}
          <div style={styles.toggleWrapper}>
            <ToggleSection 
              items={menuItems}
              initialPath="/accion/analistas"
            />
          </div>
          
          {/* 主要内容 - 下方 */}
          <div style={styles.contentWrapper}>
            
            {/* CAPITAL 部分 */}
            <div style={styles.sectionWrapper}>
              <SectionTitle 
                title="Capital" 
                subtitle=""
                align="center"
              />
              <div style={styles.tableContainer}>
                <Table 
                  headers={capitalHeaders}
                  data={capitalData}
                  width="100%"
                />
              </div>
            </div>
            
            {/* DEUDA 部分 */}
            <div style={styles.sectionWrapper}>
              <SectionTitle 
                title="Deuda" 
                subtitle=""
                align="center"
              />
              <div style={styles.tableContainer}>
                <Table 
                  headers={deudaHeaders}
                  data={deudaData}
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

export default Analistas;