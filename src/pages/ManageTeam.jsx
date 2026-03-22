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
      name: "Eduardo Messmacher Henríquez",
      title: "Director General",
      description: "Eduardo Messmacher es un reconocido ejecutivo con más de 21 años de experiencia en el sector financiero en México, Argentina y Brasil, en importantes instituciones como HSBC y McKinsey and Co. Tiene una Ingeniería en Mecánica Eléctrica por el ITESM y una Maestría en Ciencias en Investigación de Operaciones por el MIT."
    },
    {
      name: "José María Cid Michavila",
      title: "Director Corporativo de Finanzas",
      description: "José María tiene más de 33 años de experiencia. Durante los últimos 3 años ha liderado todas las estrategias y planes de negocios de AFI, revisándolos con el Consejo de Administración para establecer metas, planes y políticas."
    },
    {
      name: "Rogelio Flores Estrada",
      title: "Director de Servicios Estratégicos",
      description: "Rogelio Flores Estrada cuenta con una experiencia de más de 27 años en el sector de microfinanzas. Siendo responsable de la Expansión e Infraestructura de las empresas teniendo a su cargo más de 330 sucursales."
    },
    {
      name: "María Teresa Garza Guerra",
      title: "Directora de Recursos Humanos",
      description: "Tere Garza cuenta con más de 20 años de experiencia profesional. Ha desempeñado distintos cargos en empresas como Gamesa/Pepsico y Grupo Salinas. Cuenta con una Licenciatura en Sistemas Computacionales Administrativos por el ITESM y Maestría en Administración de Empresas por la UDEM."
    },
    {
      name: "Juan Román Escamilla",
      title: "Director Corporativo Fintech",
      description: "Juan Román Escamilla tiene más de 20 años de experiencia en el diseño y desarrollo de sistemas. Su más reciente responsabilidad fue la Dirección Técnica en IUSA. Es Ingeniero en Sistemas por el ITESM y cuenta con más de 50 certificaciones en Ciencia de Datos, Fintech e IA."
    },
    {
      name: "Carlos Enríquez Ramírez",
      title: "Dir. Negocio Individual",
      description: "Carlos Ramírez tiene una experiencia profesional de más de 25 años en el sector financiero, tanto en empresas nacionales como internacionales tales como HSBC y Banco Azteca."
    },
    {
      name: "Francisco Vázquez Vázquez",
      title: "Director Corporativo Jurídico",
      description: "Francisco Vázquez cuenta con una experiencia de 16 años en el sector financiero y de cumplimiento. Tiene una Licenciatura en Derecho por la Universidad Iberoamericana."
    },
    {
      name: "Juan García Madrigal",
      title: "Director Corporativo de Auditoría",
      description: "Juan García cuenta con más de 28 años de experiencia en el sector microfinanzas, de los cuales los últimos 12 los ha pasado en Campany Name."
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