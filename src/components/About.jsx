import { useState, useCallback } from 'react';
import SplitText from './SplitText';

const features = [
  {
    icon: '🏛️', title: 'Государственная система',
    desc: 'Президент, парламент, суды, министерства — займи своё место в иерархии власти.',
    detail: 'Полноценная трёхветвевая система власти: исполнительная (президент и кабинет министров), законодательная (парламент) и судебная (суды). Игроки занимают должности через выборы или назначения.',
  },
  {
    icon: '🗳️', title: 'Выборы и референдумы',
    desc: 'Честные выборы (или не очень). Агитируй, веди дебаты и побеждай.',
    detail: 'Регулярные выборы президента и парламента. Возможны досрочные выборы, импичмент и референдумы по ключевым вопросам. Каждый голос имеет значение.',
  },
  {
    icon: '💰', title: 'Экономика',
    desc: 'Налоги, бюджет, предпринимательство. Управляй экономикой или разоряй оппонентов.',
    detail: 'Государственный бюджет, налоги для граждан и бизнеса, зарплаты госслужащим. Игроки могут открывать компании, нанимать сотрудников и влиять на экономику.',
  },
  {
    icon: '⚔️', title: 'Конфликты и альянсы',
    desc: 'Дипломатия, санкции, перевороты и коалиции — всё в твоих руках.',
    detail: 'Заключай союзы, вводи санкции, организуй перевороты. Каждое действие имеет последствия. Дипломатия — ключ к выживанию.',
  },
  {
    icon: '📜', title: 'Конституция и законы',
    desc: 'Живое законодательство, которое меняется игроками через голосования.',
    detail: 'Конституция определяет устройство государства. Законы принимаются парламентом и могут быть изменены. Суды следят за их исполнением.',
  },
  {
    icon: '🎭', title: 'Роли и классы',
    desc: 'Чиновник, журналист, олигарх, военный — выбери свой путь.',
    detail: 'Каждый игрок выбирает роль: политик, бизнесмен, судья, военный, журналист. От роли зависят возможности и влияние в мире сервера.',
  },
];

const About = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = useCallback((i) => {
    setExpanded((prev) => (prev === i ? null : i));
  }, []);

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
          <div
            className={`feature-card${expanded === i ? ' feature-expanded' : ''}`}
            key={i}
            onClick={() => toggle(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(i) }}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="feature-detail-wrap">
              <div className="feature-detail">{f.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;