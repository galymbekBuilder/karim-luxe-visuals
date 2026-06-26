const stats = [
  { value: '07', label: 'Ateliers across Europe' },
  { value: '40h', label: 'Hand-finishing per coat' },
  { value: '1952', label: 'House founding archive' },
  { value: '∞', label: 'Seasons our pieces outlive' },
];

const AtelierStats = () => {
  return (
    <section className="py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16">
          — The House in numbers
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`space-y-4 ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <p className="text-6xl md:text-8xl font-light leading-none">{s.value}</p>
              <p className="text-sm tracking-wider uppercase text-muted-foreground max-w-[14ch]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtelierStats;
