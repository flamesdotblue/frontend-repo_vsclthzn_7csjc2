export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} VibeAnime. All rights reserved.</p>
          <div className="text-white/60 text-sm">
            Built with love for anime fans — smooth, modern, and vibrant.
          </div>
        </div>
      </div>
    </footer>
  );
}
