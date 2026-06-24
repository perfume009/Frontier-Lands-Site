import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const months = [
  {
    date: 'Июнь',
    items: ['Сайт', 'Карта мира', 'Discord-сервер'],
    done: [true, true, true],
  },
  {
    date: 'Июль',
    items: ['Рекламная кампания', 'Кастомные моды', 'Фикс багов'],
    done: [false, false, false],
  },
  {
    date: 'Август',
    items: ['Закрытый бета-тест', 'Финалльный фикс багов', 'Открытие сервера'],
    done: [false, false, false],
  },
];

const Roadmap = () => {
  const ref = useRef(null);

  useGSAP(() => {
    const cards = ref.current.querySelectorAll('.roadmap-card');
    gsap.fromTo(cards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
    });
  }, []);

  return (
    <section id="roadmap">
      <div className="section-label">Развитие</div>
      <h2 className="section-title">План развития</h2>
      <p className="section-sub">Что нас ждёт в ближайшее время.</p>
      <div className="roadmap" ref={ref}>
        {months.map((m, i) => (
          <div className="roadmap-card" key={i}>
            <div className="roadmap-date">{m.date}</div>
            <ul className="roadmap-list">
              {m.items.map((item, j) => (
                <li key={j} className={m.done[j] ? 'roadmap-done' : ''}>
                  <span className="roadmap-check">{m.done[j] ? '✓' : '○'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;