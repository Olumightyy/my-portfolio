export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm px-6 py-8 text-center border-t border-green-500/20">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-green-500 transition font-mono text-sm uppercase tracking-wide hover:scale-110 transform"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      {/* Credit with gradient */}
      <p className="gradient-text font-mono text-sm font-bold uppercase tracking-wider">
        Designed & Built by Your Name
      </p>
      <p className="text-slate-600 text-xs mt-2">
        © 2024 All rights reserved.
      </p>
    </footer>
  );
}