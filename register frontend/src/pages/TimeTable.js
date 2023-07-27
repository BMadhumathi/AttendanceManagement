import React from 'react';
import './TimeTable.css';

const subjects = ['React', 'Java', 'Cloud', 'PHP', 'TCS', 'MC'];

const TimetablePage = () => {
  const renderTimetable = () => {
    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];

    return days.map((day, index) => (
      <tr key={index}>
        <td>{day}</td>
        <td>{getRandomSubject()}</td>
        <td>{getRandomSubject()}</td>
        <td>{getRandomSubject()}</td>
        <td>{getRandomSubject()}</td>
        <td>{getRandomSubject()}</td>
        <td>{getRandomSubject()}</td>
        <td>{getRandomSubject()}</td>
      </tr>
    ));
  };

  const getRandomSubject = () => {
    const randomIndex = Math.floor(Math.random() * subjects.length);
    return subjects[randomIndex];
  };

  return (
    <div className="timetable-container">
      <h1 style={{fontSize:'1cm'}}>Timetable</h1>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Days</th>
            <th>Period 1</th>
            <th>Period 2</th>
            <th>Period 3</th>
            <th>Period 4</th>
            <th>Period 5</th>
            <th>Period 6</th>
            <th>Period 7</th>
          </tr>
        </thead>
        <tbody>{renderTimetable()}</tbody>
      </table>
    </div>
  );
};

export default TimetablePage;
