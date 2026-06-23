import SplitText from './SplitText';
import useSound from './useSound';

const LAUNCHER_URL = 'https://github.com/perfume009/Frontier-Lands-RP-Minecraft-RP/releases/download/frontier-lands/FrontierLands_Launcher.zip';

const steps = [
  'Скачай zip-архив лаунчера',
  'Распакуй в удобное для тебя место',
  'Запусти FrontierLands.exe',
  'Вводи никнейм и играй!',
];

const ServerStatus = () => {
  const { playClick, playHover } = useSound();

  return (
    <section id="server">
      <div className="section-label">Подключение</div>
      <SplitText
        tag="h2"
        text="Установка лаунчера"
        className="section-title"
        delay={40}
        duration={1.2}
        splitType="chars"
        threshold={0.2}
        rootMargin="-50px"
      />
      <p className="section-sub">Несколько простых шагов, чтобы попасть в мир политики и интриг.</p>
      <div className="install-box">
        <div className="install-steps">
          {steps.map((text, i) => (
            <div className="install-step" key={i}>
              <div className="install-step-num">{i + 1}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <a href={LAUNCHER_URL} className="btn btn-primary btn-download" onClick={playClick} onMouseEnter={playHover}>📥 Скачать лаунчер</a>
      </div>
    </section>
  );
}

export default ServerStatus;
