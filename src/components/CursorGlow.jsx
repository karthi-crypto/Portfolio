import { useEffect, useState } from 'react';

function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return undefined;
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[80] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}

export default CursorGlow;
