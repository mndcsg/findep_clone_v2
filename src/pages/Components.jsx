import React from 'react';

// Business Ink Gold Components
import Footer from '../components_v2/Footer';
import Header from '../components_v2/Header';
import Banner from '../components_v2/Banner';
import ArticleCard from '../components_v2/ArticleCard';
import HeroSlider from '../components_v2/HeroSlider';
import ImageInfoCard from '../components_v2/ImageInfoCard';
import SectionTitle from '../components_v2/SectionTitle';
import ValueCard from '../components_v2/ValueCard';
import Table from '../components_v2/Table';
import TimeLine from '../components_v2/TimeLine';
import WideCard from '../components_v2/WideCard';
import PersonCard from '../components_v2/PersonCard';
import ToggleSection    from '../components_v2/ToggleSection';
import PlotSection from '../components_v2/PlotSection';
const Components = () => {
  const teamMembers = [
    {
      name: "Eduardo Messmacher Henríquez",
      title: "Director General de Campany Name, Apoyo Económico Familiar",
      description: "Eduardo Messmacher es un reconocido ejecutivo con más de 21 años de experiencia en el sector financiero en México, Argentina y Brasil, en importantes instituciones como HSBC y McKinsey and Co. Tiene una Ingeniería en Mecánica Eléctrica por el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM-CEM) y una Maestría en Ciencias en Investigación de Operaciones por el Massachusetts Institute of Technology (MIT)."
    }]
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    section: {
      marginBottom: '80px',
    },
    themeHeader: {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#1A2332',
      color: '#FFFFFF',
    },
    themeTitle: {
      fontSize: '32px',
      fontWeight: '700',
      margin: '0 0 10px 0',
    },
    themeSubtitle: {
      fontSize: '16px',
      opacity: '0.8',
      margin: 0,
    },
    componentBlock: {
      marginBottom: '40px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    componentLabel: {
      padding: '12px 20px',
      backgroundColor: '#F7F8FA',
      borderBottom: '1px solid #E0E0E0',
      fontSize: '14px',
      fontWeight: '600',
      color: '#5A697F',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    componentPreview: {
      padding: '40px',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    },
    divider: {
      height: '60px',
      backgroundColor: '#E0E0E0',
      margin: '40px 0',
    },
    themeDivider: {
      height: '100px',
      backgroundColor: '#2D343A',
      margin: '80px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      fontSize: '24px',
      fontWeight: '700'
    }
  };

  const ComponentBlock = ({ label, children }) => (
    <div style={styles.componentBlock}>
      <div style={styles.componentLabel}>{label}</div>
      <div style={styles.componentPreview}>{children}</div>
    </div>
  );

  // 示例数据
  const sliderSlides = [
    { image: "./photo-1486406146926-c627a92ad1ab.jpeg", title: "Excelencia Empresarial", subtitle: "Innovación", ctaText: "Descubrir Más" },
    { image: "https://images.unsplash.com./photo-1497366216548-37526070297c", title: "Desarrollo Sostenible", subtitle: "Compromiso", ctaText: "Conocer Más" }
  ];

  const valueCardsData = [
    { number: "35", suffix: "+", label: "Años de Experiencia", description: "Trayectoria consolidada en el mercado" },
    { number: "120", suffix: "", label: "Profesionales", description: "Equipo multidisciplinario" },
    { number: "98", suffix: "%", label: "Satisfacción", description: "De nuestros clientes" }
  ];

  // Table 示例数据
  const tableHeaders = ["Indicador", "2024", "2025", "Variación"];
  const tableData = [
    ["Ingresos (M€)", "245.8", "268.4", "+9.2%"],
    ["Beneficio Neto (M€)", "42.3", "48.7", "+15.1%"],
    ["Empleados", "1,850", "2,100", "+13.5%"],
    ["Satisfacción Cliente", "94%", "96%", "+2.1%"]
  ];

  // TimeLine 示例数据
  const timelineItems = [
    { date: "1985", title: "Fundación", description: "La empresa se establece con una visión clara de excelencia y servicio." },
    { date: "1998", title: "Expansión Nacional", description: "Apertura de oficinas en las principales ciudades del país." },
    { date: "2010", title: "Internacionalización", description: "Inicio de operaciones en mercados europeos y latinoamericanos." },
    { date: "2020", title: "Transformación Digital", description: "Implementación de tecnologías innovadoras para mejorar la experiencia del cliente." },
    { date: "2026", title: "Liderazgo Sostenible", description: "Compromiso renovado con la sostenibilidad y responsabilidad social." }
  ];
  const menuItems = [
    { label: "Gráfica Histórica", path: "#/accion/grafica-historica" },
    { label: "Información de Dividendos", path: "#/accion/precios-historicos" },
    { label: "Cobertura de Analistas", path: "#/accion/analistas" }
  ];
  return (
    <div style={styles.container}>
      <div style={styles.themeHeader}>
        <h1 style={styles.themeTitle}>Component Library</h1>
        <p style={styles.themeSubtitle}>Business Ink Gold Design System</p>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Header */}
        <ComponentBlock label="Header">
          <Header />
        </ComponentBlock>
      <ComponentBlock label="ToggleSection">
      <ToggleSection items={menuItems} initialPath="/accion/grafica-historica" />
        </ComponentBlock>
        <ComponentBlock label="PlotSection">
          <PlotSection />
        </ComponentBlock>
        {/* HeroSlider */}
        <ComponentBlock label="HeroSlider">
          <HeroSlider slides={sliderSlides} />
        </ComponentBlock>

        {/* Banner */}
        <ComponentBlock label="Banner">
          <Banner 
            image="https://placehold.co/1920x400/1A2332/FFFFFF/png?text=Corporate+Banner" 
            title="Consejo de Administración" 
            description="Liderazgo estratégico para el crecimiento sostenible"
          />
        </ComponentBlock>

        {/* SectionTitle */}
        <ComponentBlock label="SectionTitle">
          <SectionTitle title="Nuestros Valores" subtitle="Fundamentos" align="center" />
          <SectionTitle title="Servicios" subtitle="Qué Ofrecemos" align="left" />
        </ComponentBlock>

        {/* ValueCard Grid */}
        <ComponentBlock label="ValueCard">
          <div style={styles.gridContainer}>
            {valueCardsData.map((card, idx) => (
              <ValueCard key={idx} {...card} />
            ))}
          </div>
        </ComponentBlock>

        {/* ImageInfoCard Grid */}
        <ComponentBlock label="ImageInfoCard">
          <div style={styles.gridContainer}>
            <ImageInfoCard 
              image="https://images.unsplash.com./photo-1454165804606-c3d57bc86b40" 
              title="Consultoría Estratégica" 
              description="Asesoramiento personalizado para impulsar tu negocio" 
            />
            <ImageInfoCard 
              image="https://images.unsplash.com./photo-1556761175-5973dc0f32e7" 
              title="Gestión de Activos" 
              description="Optimización de recursos para máximo rendimiento" 
            />
            <ImageInfoCard 
              image="https://images.unsplash.com./photo-1552664730-d307ca884978" 
              title="Análisis de Mercado" 
              description="Estudios detallados para decisiones informadas" 
            />
          </div>
        </ComponentBlock>

        {/* ArticleCard Grid */}
        <ComponentBlock label="ArticleCard">
          <div style={styles.gridContainer}>
            <ArticleCard 
              title="Innovación Tecnológica 2026" 
              description="Exploramos las tendencias que definirán el futuro empresarial" 
              date="15 Ene 2026" 
              author="María González" 
            />
            <ArticleCard 
              title="Sostenibilidad Corporativa" 
              description="Nuestras iniciativas para un impacto positivo en la comunidad" 
              date="10 Ene 2026" 
              author="Carlos Ruiz" 
            />
            <ArticleCard 
              title="Resultados Trimestrales" 
              description="Análisis detallado del desempeño financiero del último trimestre" 
              date="05 Ene 2026" 
              author="Ana Martínez" 
            />
          </div>
        </ComponentBlock>
       {/* Table - 新增 */}
       <ComponentBlock label="Table">
          <Table headers={tableHeaders} data={tableData} />
        </ComponentBlock>

        {/* TimeLine - 新增 */}
        <ComponentBlock label="TimeLine">
          <TimeLine items={timelineItems} />
        </ComponentBlock>

        {/* WideCard - 新增 */}
        <ComponentBlock label="WideCard">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <WideCard title="Nuestra Misión" align="left">
              <p>Ser el referente en soluciones empresariales integrales, impulsando el crecimiento sostenible de nuestros clientes a través de la innovación, la excelencia operativa y el compromiso con los más altos estándares de calidad y ética profesional.</p>
            </WideCard>
            <WideCard title="Nuestra Visión" align="center">
              <p>Construir un futuro donde la tecnología y el talento humano se unan para crear valor duradero, contribuyendo al desarrollo económico y social de las comunidades en las que operamos.</p>
            </WideCard>
            <WideCard title="Compromiso" align="right">
              <p>Garantizamos transparencia, integridad y responsabilidad en cada una de nuestras acciones, manteniendo relaciones de confianza a largo plazo con todos nuestros grupos de interés.</p>
            </WideCard>
          </div>
        </ComponentBlock>
        <ComponentBlock label="teamMembers">
        {teamMembers.map((member, index) => (
        <PersonCard 
          key={index}
          name={member.name}
          title={member.title}
          description={member.description}
        />
      ))}
</ComponentBlock>
        {/* Footer */}
        <ComponentBlock label="Footer">
          <Footer />
          </ComponentBlock>
      </div>
    </div>
  );
}

export default Components;