// Social.js
import React from 'react';
import Header from '../components_v2/Header';
import Footer from '../components_v2/Footer';
import Banner from '../components_v2/Banner';
import WideCard from '../components_v2/WideCard';
import { theme } from '../components_v2/theme';

const Social = () => {
  // 高亮文本样式
  const highlight = {
    color: theme.colors.accentOchre,
    fontWeight: '600'
  };

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
    // 居中内容容器
    centeredContainer: {
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      padding: '0px 0px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    sectionWrapper: {
      width: '100%',
      marginBottom: '60px'
    },
    // 段落样式
    paragraph: {
      marginBottom: '24px',
      lineHeight: '1.8',
      fontSize: '18px',
      color: theme.colors.textDark
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
          image="./photo-1531482615713-2afd69097998.jpeg"
          title="Responsabilidad Social"
          description="Compromiso con México y su Comunidad"
        />
        
        {/* 居中内容容器 */}
        <div style={styles.centeredContainer}>
          
          {/* 文章内容 */}
          <div style={styles.sectionWrapper}>
            <WideCard title="Responsabilidad Social de Aliado Patrimonial" align="left">
              
              {/* 段落 1 */}
              <p style={styles.paragraph}>
                La{' '}
                <strong style={highlight}>Responsabilidad Social (RS)</strong>{' '}
                es el eje fundamental de los valores corporativos de Aliado Patrimonial, orientando todo nuestro trabajo hacia el{' '}
                <strong style={highlight}>impacto positivo</strong>{' '}
                en la vida de nuestros colaboradores, las comunidades donde operamos y la sociedad mexicana en su conjunto. Nuestro compromiso se materializa en acciones concretas, basadas en{' '}
                <strong style={highlight}>honestidad, compromiso y respeto</strong>{' '}
                , con el objetivo de construir un México mejor.
              </p>

              {/* 段落 2 */}
              <p style={styles.paragraph}>
                Para nosotros,{' '}
                <strong style={highlight}>nuestros colaboradores son el pilar</strong>{' '}
                de nuestra labor social. Por ello, nos dedicamos a mejorar su calidad de vida mediante{' '}
                <strong style={highlight}>campañas de salud</strong>{' '}
                , la creación de un{' '}
                <strong style={highlight}>ambiente laboral sano y cordial</strong>{' '}
                , programas de capacitación continua y actividades que involucren a sus familias, fomentando un vínculo basado en el bienestar mutuo.
              </p>

              {/* 段落 3 */}
              <p style={styles.paragraph}>
                Comprometidos con la{' '}
                <strong style={highlight}>sostenibilidad y el bienestar comunitario</strong>{' '}
                , aprovechamos nuestra presencia en{' '}
                <strong style={highlight}>más de 140 ciudades mexicanas</strong>{' '}
                para llevar a cabo acciones voluntarias en pro del medio ambiente, beneficiando a las comunidades locales y promoviendo cambios positivos a nivel territorial.
              </p>

              {/* 段落 4 */}
              <p style={styles.paragraph}>
                Un eje prioritario de nuestra RS es el{' '}
                <strong style={highlight}>apoyo a la niñez mexicana más vulnerable</strong>{' '}
                . Desde 1998, a través de campañas como{' '}
                <strong style={highlight}>Tucán, Dame un futuro y Corazón Imparable</strong>{' '}
                (desde 2019), hemos beneficiado a{' '}
                <strong style={highlight}>más de 60,000 niños y niñas</strong>{' '}
                , gracias a las aportaciones de nuestros colaboradores y Grupo Aliado Patrimonial, demostrando nuestro compromiso con la generación de un futuro más justo para la juventud.
              </p>

              {/* 段落 5 */}
              <p style={styles.paragraph}>
                Este trabajo ha sido{' '}
                <strong style={highlight}>reconocido consistentemente</strong>{' '}
                : desde 2003, somos una{' '}
                <strong style={highlight}>Empresa Socialmente Responsable (ESR)</strong>{' '}
                por el Centro Mexicano para la Filantropía (CEMEFI), un distintivo que renovamos año con año. Además, hemos recibido{' '}
                <strong style={highlight}>múltiples premios</strong>{' '}
                por nuestras prácticas excepcionales en RS, incluyendo reconocimientos por nuestra vinculación comunitaria, calidad de vida laboral, protección ambiental y compromiso familiar, así como menciones en rankings de responsabilidad social de revista Mundo Ejecutivo.
              </p>

              {/* 段落 6 */}
             

            </WideCard>
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Social;