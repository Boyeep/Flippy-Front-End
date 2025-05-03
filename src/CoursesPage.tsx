import React from "react";
import "./CoursesPage.css";

const CoursesPage: React.FC = () => {
  const courses = [
    { title: "Math", description: "26 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Science", description: "18 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "History", description: "12 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Programming", description: "30 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
    { title: "Art", description: "15 courses+", image: "/Images/PopularCourses-MathSymbol.jpg" },
  ];

  return (
    <div className="courses-page-container">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="courses-hero-content">
          <h1>Course</h1>
          <h2>Tingkatkan kemampuan dan pemahaman mu, dari sini!</h2>
          <p>Pilih kartu, pikirkan, dan berikan jawaban!</p>
        </div>
      </section>

      {/* Courses List */}
      <h1>All Courses</h1>
      <div className="courses-page-grid">
        {courses.map((course, index) => (
          <div className="courses-page-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="courses-page-button">Lihat Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;