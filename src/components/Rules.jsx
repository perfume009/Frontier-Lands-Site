import SplitText from './SplitText';
import FadeIn from './FadeIn';

const rules = [
  'Запрещён гриф чужих построек',
  'Запрещён DM без RP-причины',
  'Запрещены баги и читы',
  'Уважайте других игроков',
  'RP-ситуации должны быть реалистичными',
  'Запрещён MG в RP',
  'Реклама серверов запрещена',
  'Запрещён уход от RP',
  'Запрещён PG',
  'Незнание правил не освобождает от ответственности',
];

const Rules = () => (
  <section id="rules">
    <div className="section-label">Правила</div>
    <SplitText
      tag="h2"
      text="Правила сервера"
      className="section-title"
      delay={40}
      duration={1.2}
      splitType="chars"
      threshold={0.2}
      rootMargin="-50px"
    />
    <p className="section-sub">Незнание законов не освобождает от ответственности. Ознакомься с основными положениями.</p>
    <FadeIn>
      <div className="rules-grid">
        <ul className="rules-list">
          {rules.slice(0, Math.ceil(rules.length / 2)).map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <ul className="rules-list">
          {rules.slice(Math.ceil(rules.length / 2)).map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </FadeIn>
    <p className="rules-more">
      Полный список правил — в нашем <a href="https://discord.gg/Tyr3QDEUaU" target="_blank" rel="noopener noreferrer">Discord</a>
      {'. '}В будущем правила также появятся на форуме.
    </p>
  </section>
);

export default Rules;