// History.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import TimeLine from '../components_v2/TimeLine';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const History = () => {
  // 时间线数据 - 转换为 TimeLine 组件所需格式
  const timelineItems = [
    {
      date: '2025',
      title: 'Inteligencia Artificial',
      description: 'Impulso definitivo de la inteligencia artificial en riesgo y atención al cliente.'
    },
    {
      date: '2024',
      title: 'Rentabilidad y Solidez',
      description: 'Mejores resultados de rentabilidad y solidez en la década.'
    },
    {
      date: '2023',
      title: '31 Años de Trayectoria',
      description: '31 años de trayectoria. Reestructuración financiera exitosa.'
    },
    {
      date: '2022',
      title: 'Expansión y Digitalización',
      description: 'Expansión a nuevos mercados locales y lanzamiento de créditos 100% digitales.'
    },
    {
      date: '2021',
      title: 'Sistema Antifraude',
      description: 'Implementación de sistema antifraude avanzado.'
    },
    {
      date: '2020',
      title: 'Estrategia Pandemia',
      description: 'Estrategia sólida ante la pandemia. Consolidación del negocio core.'
    },
    {
      date: '2019',
      title: 'Centralización Operativa',
      description: 'Centralización operativa para elevar la eficiencia.'
    },
    {
      date: '2018',
      title: '25 Años de Servicio',
      description: '25 años de servicio. Lanzamiento del modelo empresarial unificado.'
    },
    {
      date: '2017',
      title: 'Migración a la Nube',
      description: 'Migración tecnológica a la nube y refinanciación estratégica.'
    },
    {
      date: '2016',
      title: 'Calidad de Cartera',
      description: 'Logro de cartera de mayor calidad y reducción histórica de mora.'
    },
    {
      date: '2015',
      title: 'Reestructuración Eficiente',
      description: 'Reestructuración eficiente para enfocarse en el negocio principal.'
    },
    {
      date: '2014',
      title: 'Innovación Financiera',
      description: 'Innovación en fuentes de financiamiento y expansión de servicios.'
    },
    {
      date: '2013',
      title: '20 Años de Historia',
      description: '20 años de historia. Consolidación de operaciones.'
    },
    {
      date: '2012',
      title: 'Cambio Estratégico',
      description: 'Cambio estratégico clave: priorizar la calidad y solidez.'
    }
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
    introSection: {
      backgroundColor: theme.colors.white,
      width: '100%'
    },
    timelineSection: {
      // backgroundColor: theme.colors.background,
      width: '100%',
      padding: '60px 0'
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
          image="./photo-1486325212027-8081e485255e.jpeg"
          title="Nuestra Historia"
          description="Trayectoria y Compromiso Financiero"
        />
        
        {/* 公司简介 */}
        <div style={styles.introSection}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Perfil Corporativo" 
              subtitle="SOBRE NOSOTROS"
              align="center"
            />
            <WideCard align="center">
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                Desde 2012,{' '}
                <strong style={{ color: theme.colors.accentOchre }}>Aliado Patrimonial</strong>{' '}
                ha evolucionado con estrategia clara,{' '}
                <strong style={{ color: theme.colors.accentOchre }}>priorizando calidad, solidez y transformación digital</strong>.
              </p>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                Hemos logrado{' '}
                <strong style={{ color: theme.colors.accentOchre }}>crecimiento sostenible, innovación tecnológica y expansión responsable</strong>{' '}
                en todo el país.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                Hoy somos una institución{' '}
                <strong style={{ color: theme.colors.accentOchre }}>sólida, confiable y referente en préstamos personales</strong>{' '}
                con más de una década de trayectoria profesional.
              </p>
            </WideCard>
          </div>
        </div>

        {/* 时间线 */}
        <div style={styles.timelineSection}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Nuestra Trayectoria" 
              subtitle="LÍNEA DE TIEMPO"
              align="center"
            />
            <TimeLine items={timelineItems} />
          </div>
        </div>

      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default History;