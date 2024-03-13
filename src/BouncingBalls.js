import React, { useState, useEffect } from 'react';
// import './BouncingBalls.css'; // Import CSS for styling

const BouncingBalls = ({ numBalls }) => {
  const [balls, setBalls] = useState([]);
        const deviceWidth = window.innerWidth;

  // Generate random position and velocity for each ball
  useEffect(() => {
    const newBalls = [];
    for (let i = 0; i < numBalls; i++) {
      newBalls.push({
        x: Math.random() * deviceWidth - 80, // Adjust as needed
        y: Math.random() * 200, // Adjust as needed
        dx: Math.random() * 2 - 1, // Random velocity between -1 and 1
        dy: Math.random() * 2 - 1,
        radius: Math.random() * 20 + 10, // Random radius between 10 and 30
        color: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})` // Random color
      });
    }
    setBalls(newBalls);
  }, [numBalls]);

  // Update ball positions on each animation frame
  useEffect(() => {
    const animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [balls]);

  // Update ball positions and bounce logic
    const update = () => {
        // const deviceWidth = window.innerWidth;

    setBalls(prevBalls =>
      prevBalls.map(ball => ({
        ...ball,
        x: ball.x + ball.dx,
        y: ball.y + ball.dy,
        dx: ball.x + ball.dx < 0 || ball.x + ball.dx > deviceWidth-60 - ball.radius ? -ball.dx : ball.dx,
        dy: ball.y + ball.dy < 0 || ball.y + ball.dy > 510 - ball.radius ? -ball.dy : ball.dy
      }))
    );
  };

  return (
    <div className="bouncing-balls-container">
      {balls.map((ball, index) => (
        <div
          key={index}
          className="ball"
          style={{
            left: ball.x,
            top: ball.y,
            width: ball.radius * 2,
            height: ball.radius * 2,
            borderRadius: ball.radius,
            backgroundColor: ball.color
          }}
        ></div>
      ))}
    </div>
  );
};

export default BouncingBalls;
