import SplitText from './SplitText';

const features = [
  { icon: '🏛️', title: 'Государственная система', desc: 'Президент, парламент, суды, министерства — займи своё место в иерархии власти.' },
  { icon: '🗳️', title: 'Выборы и референдумы', desc: 'Честные выборы (или не очень). Агитируй, веди дебаты и побеждай.' },
  { icon: '💰', title: 'Экономика', desc: 'Налоги, бюджет, предпринимательство. Управляй экономикой или разоряй оппонентов.' },
  { icon: '⚔️', title: 'Конфликты и альянсы', desc: 'Дипломатия, санкции, перевороты и коалиции — всё в твоих руках.' },
  { icon: '📜', title: 'Конституция и законы', desc: 'Живое законодательство, которое меняется игроками через голосования.' },
  { icon: '🎭', title: 'Роли и классы', desc: 'Чиновник, журналист, олигарх, военный — выбери свой путь.' },
];

const About = () => {
  return (
    <section id="about">
      <div className="section-label">О сервере</div>
      <SplitText
        tag="h2"
        text="Политический RP нового поколения"
        className="section-title"
        delay={40}
        duration={1.2}
        splitType="chars"
        threshold={0.2}
        rootMargin="-50px"
        textAlign="left"
      />
      <p className="section-sub">Frontier Lands — это уникальный Minecraft-сервер, где каждый игрок становится частью живого политического организма.</p>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
