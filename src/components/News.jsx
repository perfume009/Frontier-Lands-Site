import SplitText from './SplitText';
import FadeIn from './FadeIn';

const items = [
  { date: '22.06', title: 'Президентские выборы 2026', desc: 'Стартовала предвыборная кампания. Зарегистрировано 5 кандидатов. Дебаты в эту субботу.' },
  { date: '20.06', title: 'Налоговая реформа принята', desc: 'Парламент одобрил снижение налога на бизнес с 30% до 18%. Олигархи ликуют.' },
  { date: '18.06', title: 'Граница открыта', desc: 'После долгих переговоров подписан договор о свободной торговле с соседним государством.' },
  { date: '15.06', title: 'Релиз Frontier Lands 2.0', desc: 'Обновление карты, новая экономическая система и переработанная политическая механика.' },
];

const News = () => {
  return (
    <section id="news">
      <div className="section-label">Новости</div>
      <SplitText
        tag="h2"
        text="Последние события"
        className="section-title"
        delay={40}
        duration={1.2}
        splitType="chars"
        threshold={0.2}
        rootMargin="-50px"
        textAlign="left"
      />
      <p className="section-sub">Будь в курсе политической жизни Frontier Lands.</p>
      <FadeIn>
        <div className="news-list">
          {items.map((item, i) => (
            <div className="news-item" key={i}>
              <div className="news-date">{item.date}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default News;
