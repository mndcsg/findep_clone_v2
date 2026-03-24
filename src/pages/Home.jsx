// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import HeroSlider from '../components_v2/HeroSlider';
import WideCard from '../components_v2/WideCard';
import ValueCard from '../components_v2/ValueCard';
import ArticleCard from '../components_v2/ArticleCard';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const Home = () => {
  // Hero Slider 数据
  const heroSlides = [
    {
      image: "./photo-1486406146926-c627a92ad1ab.jpeg",
      subtitle: "Aliado Patrimonial",
      path: "#/corporativa/perfil",
      title: "Líderes en Préstamos Digitales",
      ctaText: "Conoce Más"
    },
    {
      image: "./photo-1497366216548-37526070297c.jpeg",
      subtitle: "MÁS DE 15 AÑOS",
      title: "Experiencia y Confianza",
      path: "#/corporativa/historia",
      ctaText: "Nuestra Historia"
    },
    {
      image: "./photo-1497215728101-856f4ea42174.jpeg",
      subtitle: "COMPROMISO",
      title: "Servicios Accesibles y Seguros",
      ctaText: "Explorar Servicios",
      path:"#/gobierno/equipo-directivo"
    }
  ];

  // 关键统计数据
  const statsData = [
    { number: '32', suffix: '+', label: 'Años de Experiencia', description: 'Trayectoria consolidada en el mercado' },
    { number: '2', suffix: '', label: 'Países', description: 'Presencia en México y Estados Unidos' },
    { number: '100%', suffix: '', label: 'Compromiso', description: 'Servicio al cliente como prioridad' },
    { number: '1985', suffix: '', label: 'Fundación', description: 'Inicio de operaciones' }
  ];

  // 快速导航数据
  const quickLinks = [
    {
      title: 'Conoce la Empresa',
      description: 'Historia, perfil institucional y trayectoria',
      date: '',
      author: ''
    },
    {
      title: 'Gobierno Corporativo',
      description: 'Consejo, comités y estructura directiva',
      date: '',
      author: ''
    },
    {
      title: 'Mercado de Capitales',
      description: 'Acción, dividendos y análisis de analistas',
      date: '',
      author: ''
    },
    {
      title: 'Responsabilidad Social',
      description: 'Compromiso con México y su comunidad',
      date: '',
      author: ''
    }
  ];

  const styles = {
    main: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Roboto', sans-serif"
    },
    content: {
      flex: 1,
      width: '100%'
    },
    centeredContainer: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '60px 24px',
      boxSizing: 'border-box'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginTop: '40px'
    },
    quickLinksSection: {
      padding: '80px 24px'
    },
    quickLinksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '80px 24px',
      backgroundColor: theme.colors.white
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: theme.colors.accentGold,
      color: theme.colors.primary,
      padding: '16px 40px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: theme.transitions.standard,
      marginTop: '24px'
    }
  };

  return (
    <div style={styles.main}>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main style={styles.content}>
        
        {/* Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* 公司简介 */}
        <div style={styles.centeredContainer}>
          <SectionTitle 
            title="Finanzas Confiables" 
            subtitle="SOBRE NOSOTROS"
          />
          <WideCard align="center">
            <p style={{ marginBottom: '24px' }}>
              <strong>Aliado Patrimonial es </strong>
              <span style={{ color: theme.colors.accentOchre }}>pionera en la industria de préstamos digitales</span>
              , consolidándose como líder en el ecosistema Fintech en México y Estados Unidos.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Con <span style={{ color: theme.colors.accentOchre }}>más de 32 años de experiencia</span>
              , ofrecemos soluciones financieras innovadoras que transforman la vida de nuestros clientes.
            </p>
            <p>
              Nuestro compromiso es brindar <span style={{ color: theme.colors.accentOchre }}>servicios accesibles, seguros y adaptados</span>
              a las necesidades de cada usuario.
            </p>
          </WideCard>
        </div>

        {/* 关键统计数据 */}
        <div style={{ padding: '60px 24px' }}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Nuestros Números" 
              subtitle="ESTADÍSTICAS CLAVE"
              align="center"
            />
            <div style={styles.statsGrid}>
              {statsData.map((stat, index) => (
                <ValueCard 
                  key={index}
                  number={stat.number}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 快速导航 */}
        <div style={styles.quickLinksSection}>
          <SectionTitle 
            title="Explora Nuestra Información" 
            subtitle="NAVEGACIÓN RÁPIDA"
            align="center"
          />
          <div style={styles.quickLinksGrid}>
            {quickLinks.map((item, index) => (
              <Link 
                key={index}
                to={item.link || '#'}
                style={{ textDecoration: 'none' }}
              >
                <ArticleCard 
                  title={item.title}
                  description={item.description}
                  author={item.author}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA 区域 */}
        <div style={styles.ctaSection}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: theme.colors.primary,
              margin: '0 0 16px 0',
              fontFamily: "'Roboto', sans-serif"
            }}>
              ¿Quieres saber más?
            </h2>
            <p style={{
              fontSize: '18px',
              color: theme.colors.textMuted,
              margin: '0 0 32px 0',
              lineHeight: '1.6'
            }}>
              Conoce más sobre nuestra historia, gobierno corporativo 
              y compromiso con el desarrollo sostenible de México.
            </p>
            <Link to="#/corporativa/perfil" style={styles.ctaButton}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.white;
                e.currentTarget.style.color = theme.colors.primary;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accentGold;
                e.currentTarget.style.color = theme.colors.primary;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Conoce la Empresa
            </Link>
          </div>
        </div>

      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;