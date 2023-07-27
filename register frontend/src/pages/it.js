import React from 'react';
import { Link } from 'react-router-dom';
import './it.css';

function ITdep() {
  const years = [
    { id: 1, name: '1st yr' },
    { id: 2, name: '2nd yr' },
    { id: 3, name: '3rd yr' },
    { id: 4, name: '4th yr' },
  ];

  const sections = ['Section A', 'Section B'];

  return (
    <div className="it-department">
      {years.map((year) => (
        <div key={year.id} className="year-container">
          <div className="year-link">{year.name}</div>
          <div className="sections-container">
            {sections.map((section) => (
              <Link key={section} to="/managestudent" className="section-card">
                {section}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ITdep;
