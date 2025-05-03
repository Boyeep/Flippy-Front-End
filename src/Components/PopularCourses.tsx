const PopularCourses = () => {
  const courses = [
    { title: "Math", description: "26 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Science", description: "18 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "History", description: "12 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Programming", description: "30 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Art", description: "15 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Music", description: "10 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
  ];

  const scrollLeft = () => {
    const container = document.querySelector(".courses-scroll-container");
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    const container = document.querySelector(".courses-scroll-container");
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="popular-courses">
      <h2>
        <span className="highlight-text">Our</span> Best Popular{" "}
        <span className="highlight-text">Course</span>
      </h2>
      <p className="popular-courses-subtitle">
        Belajar makin seru dengan materi yang padat, jelas, dan gampang dipahami.
      </p>
      <div className="courses-scroll-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          <img src="/Images/AllCourses-ScrollSideButton2.jpg" alt="Scroll Left" />
        </button>
        <div className="courses-scroll-container">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-icon" />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <img
                src="/Images/PopularCourses-SideScroll.jpg"
                alt="Side Scroll Icon"
                className="side-scroll-icon"
              />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          <img src="/Images/AllCourses-ScrollSideButton.jpg" alt="Scroll Right" />
        </button>
      </div>
    </section>
  );
};

export default PopularCourses;