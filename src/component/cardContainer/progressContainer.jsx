import React from 'react';

const Progress = () => {
  const progress = 25; // percentage
  const currentAmount = 2300;
  const totalAmount = 9200;

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="progress-text">
        <span>{currentAmount} out of {totalAmount}</span>
        <span>({progress}%)</span>
      </div>
    </div>
  );
};

export default Progress;