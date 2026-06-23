import SplitText from './SplitText';
import FadeIn from './FadeIn';

const rules = [
  'Запрещён гриф и разрушение чужих построек',
  'Запрещён Deathmatch (DM)',
  'Запрещено использовать баги и читы',
  'Уважай других игроков — никаких оскорблений(исключение: рп-ситуации)',
  'РП-ситуации должны быть правдоподобными',
  'Запрещён метагейминг (MG) (использование информации из дискорда в RP)',
  'Реклама других серверов запрещена',
  'Запрещён уход от RP (нельзя выходить из игры, во время RP-процесса.)',
  'Запрещён Powergaming (PG) (нельзя превышать физические возможности персонажа)',
  'Незнание правил проекта не освобождает вас от ответственности',
];

const Rules = () => {
  return (
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
        textAlign="left"
      />
      <p className="section-sub">Незнание законов не освобождает от ответственности. Ознакомься с основными положениями.</p>
      <FadeIn>
        <ul className="rules-list">
          {rules.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
};

export default Rules;
