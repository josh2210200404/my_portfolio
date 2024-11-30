import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const SocialButtons = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'http://www.linkedin.com/in/josh-swaroop-3787252b2',
      bgColor: 'bg-[#0077B5]',
      hoverBg: 'hover:bg-[#005885]'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/josh2210200404',
      bgColor: 'bg-[#333333]',
      hoverBg: 'hover:bg-[#242424]'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/vegi_josh_swaroop?igsh=MTdveXI0dW0ycDU1eQ==',
      bgColor: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      hoverBg: 'hover:opacity-90'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:joshswaroop04@gmail.com',
      bgColor: 'bg-[#EA4335]',
      hoverBg: 'hover:bg-[#D33828]'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full
            ${social.bgColor} ${social.hoverBg}
            text-white transform hover:scale-105
            transition-all duration-300 shadow-lg
          `}
        >
          {social.icon}
          <span className="font-medium">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;