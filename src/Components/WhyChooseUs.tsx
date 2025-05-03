import { useState, useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Card dianggap terlihat jika 30% masuk viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "Memahami",
      description: "Memahami konsep penting hanya dalam hitungan menit.",
    },
    {
      icon: "🎓",
      title: "Materi Terbaik",
      description: "Materi kami dikurasi oleh pendidik dan profesional di bidangnya.",
    },
    {
      icon: "⏰",
      title: "Belajar Fleksibel",
      description: "Belajar kapan aja, di mana aja. Tanpa batas waktu, tanpa tekanan.",
    },
    {
      icon: "🎮",
      title: "Menyenangkan",
      description: "Belajar lebih menyenangkan seperti bermain kartu.",
    },
  ];

  return (
    <section
      className={`why-choose-us ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <h2>
        Why Choose <span className="highlight-us">Us</span>
      </h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;