const items = [
  'Florence',
  '✦',
  'Milano',
  '✦',
  'Paris',
  '✦',
  'Como',
  '✦',
  'Napoli',
  '✦',
  'Biella',
  '✦',
];

const MarqueeStrip = () => {
  return (
    <div className="border-y border-foreground/15 bg-background overflow-hidden py-6">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-light tracking-[0.3em] uppercase mx-8 text-foreground/70"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeStrip;
