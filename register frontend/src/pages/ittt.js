import React from 'react';
import './ittt.css'
const SectionTimetable = () => {
  // Function to generate a random timetable for a section with 7 periods a day
  const generateTimetable = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const periods = 7;
    const subjects = [
      'Mathematics',
      'English',
      'Science',
      'History',
      'Geography',
      'Physical Education',
      'Art',
    ];

    const timetable = [];

    for (let day of days) {
      const dayTimetable = {};
      dayTimetable['day'] = day;
      dayTimetable['periods'] = [];
      for (let i = 1; i <= periods; i++) {
        const randomSubject =
          subjects[Math.floor(Math.random() * subjects.length)];
        dayTimetable['periods'].push({
          periodNumber: i,
          subject: randomSubject,
        });
      }
      timetable.push(dayTimetable);
    }

    return timetable;
  };

  const sectionA = generateTimetable();
  const sectionB = generateTimetable();

  return (
    <div>
    <h2 >Section A Timetable</h2>
    <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Period 1</th>
            <th>Period 2</th>
            <th>Period 3</th>
            <th>Period 4</th>
            <th>Period 5</th>
            <th>Period 6</th>
            <th>Period 7</th>
          </tr>
        </thead>
        <tbody>
          {sectionA.map((dayTimetable) => (
            <tr key={dayTimetable.day}>
              <td>{dayTimetable.day}</td>
              {dayTimetable.periods.map((period) => (
                <td key={period.periodNumber}>{period.subject}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Section B Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Period 1</th>
            <th>Period 2</th>
            <th>Period 3</th>
            <th>Period 4</th>
            <th>Period 5</th>
            <th>Period 6</th>
            <th>Period 7</th>
          </tr>
        </thead>
        <tbody>
          {sectionB.map((dayTimetable) => (
            <tr key={dayTimetable.day}>
              <td>{dayTimetable.day}</td>
              {dayTimetable.periods.map((period) => (
                <td key={period.periodNumber}>{period.subject}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionTimetable;
