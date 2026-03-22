// BoardMember.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import PersonCard from '../components_v2/PersonCard';
import SectionTitle from '../components_v2/SectionTitle';
import { theme } from '../components_v2/theme';

const BoardMember = () => {
  // 团队成员数据
  const teamData = [
    {
      name: "Eduardo Messmacher Henríquez",
      title: "Director General de Campany Name, Apoyo Económico Familiar",
      description: "Eduardo Messmacher es un reconocido ejecutivo con más de 21 años de experiencia en el sector financiero en México, Argentina y Brasil, en importantes instituciones como HSBC y McKinsey and Co. Tiene una Ingeniería en Mecánica Eléctrica por el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM-CEM) y una Maestría en Ciencias en Investigación de Operaciones por el Massachusetts Institute of Technology (MIT)."
    },
    {
      name: "José María Cid Michavila",
      title: "Director Corporativo de Finanzas | Director General de Apoyo Financiero Inc.",
      description: "José María tiene más de 33 años de experiencia. Durante los últimos 3 años ha liderado todas las estrategias y planes de negocios de AFI, revisándolos con el Consejo de Administración para establecer metas, planes y políticas. El Sr. Cid, junto con el equipo de directores, impulsan a la empresa hacia sus principales metas y objetivos."
    },
    {
      name: "Rogelio Flores Estrada",
      title: "Director Corporativo de Servicios Estratégicos",
      description: "Rogelio Flores Estrada cuenta con una experiencia de más de 27 años de experiencia en el sector de microfinanzas, (los últimos 11 años los ha pasado en Campany Name); siendo responsable de la Expansión e Infraestructura de las empresas teniendo a su cargo más de 330 sucursales. Cuenta con una licenciatura en Finanzas y Postgrado en Administración Financiera por la Universidad Tecnológica de México."
    },
    {
      name: "Adrián Orocio Barreto",
      title: "Director Corporativo de Contraloría",
      description: "El Sr. Orocio cuenta con 21 años de experiencia en la Compañía, en las áreas de contraloría y finanzas. Es Licenciado en Contaduría y cuenta con una Maestría en Economía y Negocios en la Anáhuac México Norte."
    },
    {
      name: "María Teresa Garza Guerra",
      title: "Director Corporativo de Recursos Humanos",
      description: "Tere Garza cuenta con más de 20 años de experiencia profesional. Durante su carrera ha desempeñado distintos cargos en empresas como Gamesa/Pepsico y Grupo Salinas, donde fungió como Directora de Recursos Humanos durante los últimos años. Cuenta con una Licenciatura en Sistemas Computacionales Administrativos por el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), así como con una Maestría en Administración de Empresas con especialidad en Finanzas por la Universidad de Monterrey (UDEM)."
    },
    {
      name: "Carlos Enríquez Ramírez Macías",
      title: "Dirección Corporativa de Negocio Individual sin garantía",
      description: "Carlos Ramírez tiene una experiencia profesional de más de 25 años en el sector financiero, tanto en empresas nacionales como internacionales tales como HSBC y Banco Azteca, en las cuales, se ha distinguido por su enfoque en la rentabilidad de la organización, al incrementar las ventas y cobranza optimizando las operaciones; así mismo, desarrollando equipos de alto desempeño con una fuerte orientación a resultados. Actualmente Carlos es responsable de las Direcciones de la red de Sucursales de Campany Name y Apoyo Económico Familiar, y del área de Cobranza y las de soporte a la operación. Su principal compromiso es la calidad de la originación de créditos, el volumen y la cobranza con enfoque en la rentabilidad del negocio. Carlos es Licenciado en Administración de Empresas por el Instituto Tecnológico de Estudios Superiores de Monterrey (ITESM), cuenta con una Maestría en Administración de Negocios por el Instituto Panamericano de Alta Dirección de Empresas (IPADE), así como Diplomados en Negocios Internacionales y en Valores Socio-Culturales en Madrid, España."
    },
    {
      name: "Francisco Vázquez Vázquez",
      title: "Director Corporativo Jurídico",
      description: "Francisco Vázquez cuenta con una experiencia de 16 años en el sector financiero y de cumplimiento. Tiene una Licenciatura en Derecho por la Universidad Iberoamericana, una Maestría en Derecho Corporativo por la Universidad Anáhuac y cuenta con una Certificación en materia de Prevención de Operaciones con Recursos de Procedencia Ilícita y Financiamiento al Terrorismo emitida por la Comisión Nacional Bancaria y de Valores."
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
          image="./photo-1556761175-b413da4baf72.jpeg"
          title="Consejo de Administración"
          description="Gobierno corporativo con transparencia y compromiso"
        />
        
        {/* 公司简介 */}
        <div style={styles.centeredContainer}>
          <SectionTitle 
            title="Información del Consejo" 
            subtitle="GOBIERNO CORPORATIVO"
            align="center"
          />
          <WideCard align="left">
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Nuestro{' '}
              <strong>Consejo de Administración</strong>{' '}
              cuenta actualmente con{' '}
              <strong style={styles.highlight}>13 miembros</strong>{' '}
              en su composición.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              Sus miembros son designados por un periodo de{' '}
              <strong style={styles.highlight}>1 año</strong>{' '}
              mediante acuerdo en la Asamblea General Ordinaria de Accionistas.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
              El Consejo celebra reuniones{' '}
              <strong style={styles.highlight}>al menos 4 veces al año</strong>{' '}
              de forma regular.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              En cumplimiento de la Ley del Mercado de Valores,{' '}
              <strong style={styles.highlight}>al menos el 25% de sus miembros son Independientes</strong>.
            </p>
          </WideCard>
        </div>

        {/* 团队成员列表 */}
        <div style={{ ...styles.section, backgroundColor: theme.colors.background }}>
          <div style={styles.centeredContainer}>
            <SectionTitle 
              title="Nuestros Miembros" 
              subtitle="EQUIPO DIRECTIVO"
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

export default BoardMember;