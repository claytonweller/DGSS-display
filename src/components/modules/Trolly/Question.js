import React from 'react';
import Timer from '../../utilities/Timer';

export function TQuestion({ moduleState }) {
  const { currentQuestion: q, timer } = moduleState;
  // Shows countdown if timer is present
  // does not show countdown if timer is huge

  const timerDisplay =
    timer && timer < 10000 ? <Timer key={q.default.text + q.alternative.text} initialTime={timer} /> : null;

  const displayChoice = (choice) => {
    const totalParticipants = q.default.count + q.alternative.count;

    return (
      <div>
        <h3>{choice.text}</h3>
        <div>{(choice.count / totalParticipants) * 100}%</div>
      </div>
    );
  };

  const choices = (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {displayChoice(q.default)}
      {displayChoice(q.alternative)}
    </div>
  );

  return (
    <div>
      {timerDisplay}
      {choices}
    </div>
  );
}

export default TQuestion;
