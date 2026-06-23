import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FadeIn = ({ children, delay = 0.1, y = 30, className = '' }) => {
  const ref = useRef(null);

  useGSAP(() => {
    const els = ref.current.children;
    if (!els.length) return;
    gsap.fromTo(els,
      { opacity: 0, y },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        stagger: delay,
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      }
    );
  }, [children]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default FadeIn;