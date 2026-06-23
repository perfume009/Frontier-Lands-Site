import SplitText from './SplitText';
import useSound from './useSound';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const { playClick, playHover } = useSound();

  return (
    <section className="hero" id="home">
      <div className="hero-logo-bg" />
      <div className="hero-content">
        <div className="hero-badge">Minecraft 1.21 • Political RP</div>
        <h1>
          <SplitText
            text="Политический"
            tag="span"
            className="hero-line"
            delay={60}
            duration={1.0}
            splitType="chars"
            from={{ opacity: 0, y: 60, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.3}
            rootMargin="0px"
          />
          <br />
          <SplitText
            text="Minecraft RP сервер"
            tag="span"
            className="hero-line"
            delay={60}
            duration={1.0}
            splitType="chars"
            from={{ opacity: 0, y: 60, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.3}
            rootMargin="0px"
          />
          <br />
          <span style={{ color: '#c9a84c' }}>
            <SplitText
              text="Frontier Lands"
              tag="span"
              className="hero-line"
              delay={60}
              duration={1.0}
              splitType="chars"
              from={{ opacity: 0, y: 60, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.3}
              rootMargin="0px"
            />
          </span>
        </h1>
        <SplitText
          text="Погрузись в мир политических интриг, дипломатии и экономики. Создай своё государство, веди народ и измени историю."
          delay={30}
          duration={1.0}
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.3}
          rootMargin="0px"
        />
        <div className="hero-buttons">
          <a href="#server" className="btn btn-primary" onClick={playClick} onMouseEnter={playHover}>🎮 Играть</a>
          <a href="#about" className="btn btn-outline" onClick={playClick} onMouseEnter={playHover}>Узнать больше</a>
        </div>
        <SocialLinks />
      </div>
      <div className="scroll-indicator">
        листай
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
