import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'О сервере' },
    { href: '#factions', label: 'Фракции' },
    { href: '#server', label: 'Лаунчер' },
    { href: '#rules', label: 'Правила' },
    { href: '#news', label: 'Новости' },
  ];

  const handleClick = () => setOpen(false);

  return (
    <nav>
      <div className="logo"><img src="/logo.png" alt="Frontier Lands" /> Frontier Lands</div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}><a href={l.href} onClick={handleClick}>{l.label}</a></li>
        ))}
      </ul>
      <div className="burger" onClick={() => setOpen(p => !p)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
