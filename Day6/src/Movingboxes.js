import React, { useState, useEffect } from 'react';

const MovingBoxes = () => {
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition1(prevPosition => ({
        x: prevPosition.x + 1,
        y: prevPosition.y + 1
      }));
      setPosition2(prevPosition => ({
        x: prevPosition.x - 1,
        y: prevPosition.y - 1
      }));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: position1.y,
          left: position1.x,
          width: '100px',
          height: '100px',
          backgroundColor: 'red'
        }}
      >
        <p>Box 1</p>
      </div>
      <div
        style={{
          position: 'absolute',
          top: position2.y,
          left: position2.x,
          width: '100px',
          height: '100px',
          backgroundColor: 'blue'
        }}
      >
        <p>Box 2</p>
      </div>
    </div>
  );
};

export default MovingBoxes;
