import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  
  const stats = [
    { label: "Years of Excellence", end: 5, suffix: "+" },
    { label: "Clients Served", end: 300, suffix: "+" },
    { label: "Client Satisfaction", end: 98, suffix: "%" },
  ];

  return (
    <section ref={ref} className="py-10 bg-orange-200 overflow-x-scroll no-scrollbar">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 md:gap-12">
        {stats.map((stat, idx) => (
          <Counter key={idx} {...stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function Counter({ end, label, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-5xl font-black text-slate-700 mb-2">
        {count}{suffix}
      </h3>
      <p className="text-slate-800 uppercase tracking-widest text-[10px] md:text-sm font-bold">
        {label}
      </p>
    </div>
  );
}