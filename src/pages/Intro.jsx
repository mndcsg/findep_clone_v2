// Intro.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import ImageInfoCard from '../components_v2/ImageInfoCard';
import ArticleCard from '../components_v2/ArticleCard';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const Intro = () => {
  // 公司价值观数据
  const companyValues = [
    { 
      title: 'Servicio al Cliente Primero', 
      description: 'Ponemos a las personas en el centro de todo lo que hacemos. Acompañamos a nuestros usuarios en la realización de sus objetivos de vida y carrera, escuchando activamente sus necesidades y superando sus expectativas en cada interacción.' 
    },
    { 
      title: 'Tecnología Innovadora', 
      description: 'Impulsamos la transformación digital del sector financiero mediante soluciones tecnológicas de vanguardia. Implementamos sistemas avanzados de encriptación y autenticación para garantizar la máxima seguridad.' 
    },
    { 
      title: 'Eficiencia y Conveniencia', 
      description: 'Transformamos procesos complejos en experiencias simples y ágiles. Optimizamos continuamente nuestros flujos operativos para que los usuarios puedan acceder a nuestros servicios en cualquier momento y lugar.' 
    },
    { 
      title: 'Cumplimiento Normativo', 
      description: 'La transparencia y la legalidad son pilares fundamentales de nuestra operación. Operamos bajo estricto cumplimiento de los requisitos regulatorios en todos los mercados donde tenemos presencia.' 
    }
  ];

  // 竞争力特点 - 图片信息卡片
  const competitiveFeatures = [
    {
      title: 'Proceso Optimizado',
      description: 'Proceso completamente en línea con procedimientos estandarizados y productos cumpliendo todas las normativas vigentes. Optimización continua de la experiencia del usuario.',
      image: './photo-1454165804606-c3d57bc86b40.jpeg'
    },
    {
      title: 'Seguridad Inteligente',
      description: 'Sistema inteligente de control de riesgos con IA y tecnología anti-fraude avanzada. Políticas estrictas de seguridad de información.',
      image: './photo-1555949963-ff9fe0c870eb.jpeg'
    },
    {
      title: 'Servicio Eficiente',
      description: 'Servicio al cliente rápido y eficiente disponible en múltiples canales. Equipo profesional con soporte 24/7.',
      image: './photo-1521791136064-7986c2920216.jpeg'
    }
  ];

  // 使命与愿景数据
  const missionVision = [
    { 
      title: 'Liderazgo Regional', 
      description: 'Ser la institución financiera líder en la región fronteriza de México y Estados Unidos, reconocida por nuestra excelencia y confiabilidad.' 
    },
    { 
      title: 'Referente en Inclusión Financiera', 
      description: 'Establecer el estándar de oro en servicios financieros inclusivos, brindando acceso a comunidades tradicionalmente desatendidas.' 
    },
    { 
      title: 'Modelo de Finanzas Digitales', 
      description: 'Ser el ejemplo paradigmático de servicios financieros digitales, impulsando la innovación y transformación del sector financiero.' 
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
    section: {
      width: '100%',
      marginBottom: '60px'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      width: '100%'
    },
    featuresSection: {
      backgroundColor: theme.colors.background,
      width: '100%',
      padding: '60px 0'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
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
          image="./photo-1486325212027-8081e485255e.jpeg"
          title="Conócenos"
          description="Sobre Nuestra Empresa"
        />
        
        {/* 公司简介 */}
        <div style={styles.centeredContainer}>
          <SectionTitle 
            title="Perfil Corporativo" 
            subtitle="SOBRE NOSOTROS"
            align="center"
          />
          <WideCard align="center">
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Nuestra institución,{' '}
              <strong style={styles.highlight}>Aliado Patrimonial</strong>, es{' '}
              <strong style={styles.highlight}>pionera en la industria de préstamos digitales</strong>,
              consolidándose como líder en el ecosistema Fintech.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Estamos{' '}
              <strong style={styles.highlight}>profundamente arraigados en el ecosistema de tecnología financiera</strong>,
              ofreciendo soluciones innovadoras que transforman la vida de nuestros clientes.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              Nuestro negocio principal son los{' '}
              <strong style={styles.highlight}>servicios innovadores de préstamos digitales</strong>,
              diseñados para ser accesibles, seguros y adaptados a las necesidades de cada usuario.
            </p>
          </WideCard>
        </div>

        {/* 公司价值观 */}
        <div style={{ ...styles.section, backgroundColor: theme.colors.white }}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Nuestros Valores Corporativos" 
              subtitle="VALORES"
              align="center"
            />
            <div style={styles.valuesGrid}>
              {companyValues.map((value, index) => (
                <ArticleCard 
                  key={index}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 竞争力特点 */}
        <div style={styles.featuresSection}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Ventajas Competitivas" 
              subtitle="POR QUÉ ELEGIRNOS"
              align="center"
            />
            <div style={styles.featuresGrid}>
              {competitiveFeatures.map((feature, index) => (
                <ImageInfoCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 使命与愿景 */}
        <div style={styles.section}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Misión y Visión" 
              subtitle="NUESTRO FUTURO"
              align="center"
            />
            <div style={styles.valuesGrid}>
              {missionVision.map((item, index) => (
                <ArticleCard 
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Intro;