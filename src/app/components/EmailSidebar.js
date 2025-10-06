export default function EmailSidebar() {
  return (
    <div className="fixed right-6 lg:right-10 bottom-0 z-30 hidden lg:flex flex-col items-center animate-fade-in">
      <div className="flex flex-col items-center gap-6">
        <a
          href="mailto:adepojuolumide04@gmail.com"
          className="text-gray-400 hover:text-green-500 transition-all hover:-translate-y-1 font-mono text-sm tracking-widest transform"
          style={{ writingMode: 'vertical-rl' }}
        >
          adepojuolumide04@gmail.com
        </a>
        {/* Vertical Line */}
        <div className="w-px h-24 bg-gray-800"></div>
      </div>
    </div>
  );
}