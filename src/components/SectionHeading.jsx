import Reveal from './Reveal.jsx';

function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
      <p className="mx-auto mb-4 w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-mono tracking-[0.2em] uppercase text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-6 text-lg leading-relaxed text-slate-400">{text}</p>}
    </Reveal>
  );
}

export default SectionHeading;
