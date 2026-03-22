// HeroSlider.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ 添加 useNavigate
import { theme } from './theme';

const HeroSlider = ({ slides }) => {
  const navigate = useNavigate();  // ✅ 初始化 navigate
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  // ✅ 新增：跳转到对应路由
  const goToRoute = useCallback((path) => {
    if (path) {
      navigate(path);
    }
  }, [navigate]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, nextSlide]);

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden', fontFamily: "'Roboto', sans-serif" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              opacity: index === currentIndex ? 1 : 0,
              transform: index === currentIndex ? 'translateX(0)' : (index < currentIndex ? 'translateX(-100%)' : 'translateX(100%)'),
              transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
              zIndex: index === currentIndex ? 2 : 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <img 
              src={slide.image} alt={slide.title} 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, filter: 'brightness(0.6)' }} 
            />
            <div style={{
              position: 'relative', zIndex: 2, textAlign: 'center', color: theme.colors.textLight,
              maxWidth: '800px', padding: '20px',
              transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.8s ease-out 0.2s', opacity: index === currentIndex ? 1 : 0,
            }}>
              <h2 style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '2px', color: theme.colors.accentGold, marginBottom: '16px', textTransform: 'uppercase' }}>
                {slide.subtitle}
              </h2>
              <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                {slide.title}
              </h1>
              {/* ✅ 修改 CTA 按钮也支持跳转 */}
              <button 
                style={{
                  padding: '16px 40px', backgroundColor: theme.colors.accentGold, color: theme.colors.white,
                  border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                  letterSpacing: '0.5px', transition: theme.transitions.standard, boxShadow: '0 4px 15px rgba(191, 165, 134, 0.4)',
                }}
                onClick={() => goToRoute(slide.path)}  // ✅ 添加点击跳转
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = theme.colors.white; e.currentTarget.style.color = theme.colors.primary; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = theme.colors.accentGold; e.currentTarget.style.color = theme.colors.white; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {slide.ctaText || "Learn More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', color: theme.colors.white, padding: '12px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, transition: theme.transitions.standard }} onMouseOver={(e) => e.currentTarget.style.background = theme.colors.accentGold} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>❮</button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', color: theme.colors.white, padding: '12px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, transition: theme.transitions.standard }} onMouseOver={(e) => e.currentTarget.style.background = theme.colors.accentGold} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>❯</button>

      {/* ✅ 修改底部指示器按钮，点击跳转到对应路由 */}
      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '12px', zIndex: 10 }}>
        {slides.map((slide, idx) => (
          <button 
            key={idx} 
            onClick={() => goToRoute(slide.path)}  // ✅ 修改为跳转路由
            style={{ 
              width: idx === currentIndex ? '30px' : '12px', 
              height: '12px', 
              borderRadius: '6px', 
              border: 'none', 
              backgroundColor: idx === currentIndex ? theme.colors.accentGold : 'rgba(255,255,255,0.4)', 
              cursor: 'pointer', 
              transition: theme.transitions.standard 
            }} 
            aria-label={`Go to slide ${idx + 1}`}
            title={slide.title}  // ✅ 添加 tooltip
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;