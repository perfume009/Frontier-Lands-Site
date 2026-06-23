import useSound from './useSound';

const SocialLinks = () => {
  const { playClick, playHover } = useSound();

  const links = [
    { href: 'https://discord.gg/Tyr3QDEUaU', icon: '/dc.png', label: 'Discord' },
    { href: 'https://vk.com/frontierlandsrp', icon: '/vk.png', label: 'VK' },
    { href: 'https://t.me/+_AM1tlO3hms2MmU6', icon: '/tg.png', label: 'Telegram' },
    { href: 'https://www.donationalerts.com/r/perfume009', icon: '/dn.png', label: 'Donate' },
  ];

  return (
    <div className="social-links">
      {links.map((l, i) => (
        <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="social-link" title={l.label} onClick={playClick} onMouseEnter={playHover}>
          <img src={l.icon} alt={l.label} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;