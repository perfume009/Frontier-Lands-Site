import SplitText from './SplitText';
import FadeIn from './FadeIn';

const rules = [
  'Запрещён гриф и разрушение чужих построек',
  'No-RP убийства без причины — бан',
  'Запрещено использовать баги и читы',
  'Уважай других игроков — никаких оскорблений',
  'РП-ситуации должны быть правдоподобными',
  'Запрещён метагейминг (использование информации из дискорда в RP)',
  'Реклама других серверов запрещена',
  'Нарушение конституции карается законом сервера',
  'Двойное гражданство — под суд',
  'Администратор всегда прав (но можно обжаловать)',
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
