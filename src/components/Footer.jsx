function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-void px-6 py-10 text-center md:px-12">
      <p className="font-display text-sm text-slate-500 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Karthik R <span className="mx-2 text-primary">|</span> Full Stack Developer <span className="mx-2 text-primary">|</span> AI & Systems
      </p>
    </footer>
  );
}

export default Footer;
