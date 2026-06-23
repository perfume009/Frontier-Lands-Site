import SplitText from './SplitText';

const factions = [
  { icon: '🏴', title: 'Революционеры', desc: 'Свергай режимы и строй новый порядок. Хаос — это возможность.', bg: 'rgba(200,50,50,0.15)', color: '#e84848' },
  { icon: '👑', title: 'Консерваторы', desc: 'Стабильность и традиции. Сохрани власть любой ценой.', bg: 'rgba(50,100,200,0.15)', color: '#4a80e8' },
  { icon: '💰', title: 'Олигархи', desc: 'Капитал решает всё. Финансируй партии и скупай голоса.', bg: 'rgba(50,200,100,0.15)', color: '#48c878' },
  { icon: '📰', title: 'Медиа', desc: 'Информация — оружие. Управляй общественным мнением.', bg: 'rgba(180,100,200,0.15)', color: '#b060c8' },
  { icon: '⚖️', title: 'Судьи', desc: 'Закон превыше всего. Толкуй конституцию и верши правосудие.', bg: 'rgba(200,180,50,0.15)', color: '#c8b040' },
  { icon: '🛡️', title: 'Военные', desc: 'Сила — аргумент. Контролируй армию и защищай (или захватывай) власть.', bg: 'rgba(200,80,50,0.15)', color: '#c85030' },
];

const Factions = () => {
  return (
    <section id="factions">
      <div className="section-label">Фракции</div>
      <SplitText
        tag="h2"
        text="Выбери свою сторону"
        className="section-title"
        delay={40}
        duration={1.2}
        splitType="chars"
        threshold={0.2}
        rootMargin="-50px"
        textAlign="left"
      />
      <p className="section-sub">Каждая фракция имеет уникальные возможности и цели. Какую роль ты сыграешь в истории?</p>
      <div className="factions-grid">
        {factions.map((f, i) => (
          <div className="faction-card" key={i}>
            <div className="emblem" style={{ background: f.bg, color: f.color }}>{f.icon}</div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Factions;
