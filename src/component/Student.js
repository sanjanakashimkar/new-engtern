import React from 'react';

const StudentPage = () => {
  return (
    <div className="student-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Student</h1>
          <p className="breadcrumb">
            <span>
              <a href="/" className="hover-underline">
                Home
              </a>
            </span>
            <span className="separator">›</span>
            <span>
              <a href="/join/student" className="hover-underline">
                Student
              </a>
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .student-page {
          width: 100%;
        }
        .hero-section {
          background-color: #706fe5;
          padding: 4rem 1rem;
          text-align: center;
        }
        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
        }
        .hero-content h1 {
          font-size: 3.75rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }
        .breadcrumb {
          font-size: 0.875rem;
          color: white;
        }
        .hover-underline:hover {
          text-decoration: underline;
        }
        .separator {
          margin: 0 0.25rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentPage;

