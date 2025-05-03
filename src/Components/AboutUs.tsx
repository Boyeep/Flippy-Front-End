import { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Gambar dianggap terlihat jika 50% masuk viewport
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about-us" className="about-us">
      <div className="about-us-container">
        <div
          className={`about-us-image ${isVisible ? "animate" : ""}`}
          ref={imageRef}
        >
          <img src="/Images/Aboutus.jpg" alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>
            <span className="about-highlight">About</span>{" "}
            <span className="about-us-text">Us</span>
          </h2>
          <h3>Belajar nggak harus membosankan. Di sinilah semuanya dimulai.</h3>
          <p>
            Kami percaya bahwa belajar bisa jadi menyenangkan, ringkas, dan
            efektif—dan itulah alasan kami menciptakan platform ini.
          </p>
          <p>
            Dengan fitur flashcard interaktif, kami ingin membantu kamu
            memahami materi pelajaran dengan cara yang lebih cepat, praktis,
            dan seru. Tak perlu lagi duduk berjam-jam dengan buku tebal—cukup
            flip, klik, dan serap ilmunya!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;