// ManageTeam.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import PersonCard from '../components_v2/PersonCard';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const ManageTeam = () => {
  // 团队成员数据
  const teamData = [
    {
      "name": "José Arnulfo Reyes Muñoz",
      "title": "Presidente y Representante Legal",
      "description": "José Arnulfo Reyes Muñoz es un experimentado líder en el sector financiero y de crédito. Como Presidente y Representante Legal, combina la visión estratégica con la responsabilidad jurídica, supervisando la dirección general de la compañía, la toma de decisiones clave y la representación oficial ante autoridades y clientes. Su liderazgo ha sido fundamental para consolidar el crecimiento y la solidez institucional de la organización."
    },
    {
      "name": "Gabriela Valenzuela Contreras",
      "title": "Secretaria",
      "description": "Gabriela Valenzuela Contreras cuenta con una sólida trayectoria en gobernanza corporativa y cumplimiento normativo dentro del sector financiero. Como Secretaria, es responsable de la gestión documental, el registro de acuerdos del consejo y la coordinación entre los órganos de dirección, garantizando que las operaciones de la compañía se realicen con transparencia, legalidad y eficiencia administrativa."
    },
    {
      "name": "Germán Cortés Reyes",
      "title": "Tesorero",
      "description": "Germán Cortés Reyes es un profesional con amplia experiencia en la gestión financiera y de tesorería. En su rol como Tesorero, supervisa la administración de los recursos líquidos, el flujo de efectivo y las estrategias de fondeo de la compañía. Su enfoque en la eficiencia financiera y la gestión de riesgos contribuye a mantener la estabilidad y solvencia necesarias para el crecimiento sostenido del negocio crediticio."
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
      // marginBottom: '60px'
    },
    // 团队成员网格布局
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px',
      width: '100%',
      justifyContent: 'center'
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
          image="./photo-1522071820081-009f0129c71c.jpeg"
          title="Equipo Directivo"
          description="Liderazgo con experiencia y solidez financiera"
        />
        
        {/* 公司简介 */}
        <div style={styles.centeredContainer}>
          <SectionTitle 
            title="Nuestro Liderazgo" 
            subtitle="EQUIPO DIRECTIVO"
            align="center"
          />
          <WideCard align="left">
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              A continuación se presentan las{' '}
              <strong>biografías</strong>{' '}
              de nuestros principales funcionarios.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Sus{' '}
              <strong style={styles.highlight}>cargos son de período indefinido</strong>,
              conforme a la estructura organizacional.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              En promedio, cuentan con{' '}
              <strong style={styles.highlight}>16 años de experiencia</strong>{' '}
              en el sector de servicios financieros en México.
            </p>
          </WideCard>
        </div>

        {/* 团队成员列表 */}
        <div style={{ ...styles.section, backgroundColor: theme.colors.background }}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Conoce al Equipo" 
              subtitle="PERFILES PROFESIONALES"
              align="center"
            />
            <div style={styles.teamGrid}>
              {teamData.map((member, index) => (
                <PersonCard 
                  key={index}
                  name={member.name}
                  title={member.title}
                  description={member.description}
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

export default ManageTeam;