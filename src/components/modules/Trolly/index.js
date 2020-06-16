import React from 'react';
import Timer from '../../utilities/Timer';

export function Trolly({ moduleState }) {
  let display = null;
  if (moduleState.step === 'title') display = <h3>The Trolly Problem</h3>;
  if (moduleState.step === 'show-question') display = showQuestion();

  function showQuestion() {
    const { currentQuestion: q, timer } = moduleState;
    // Shows countdown if timer is present
    // does not show countdown if timer is huge

    const timerDisplay = timer ? <Timer initialTime={timer} /> : null;

    const totalParticipants = q.default.count + q.alternative.count;

    const defaultChoice = (
      <div>
        <h3>default</h3>
        <div>{(q.default.count / totalParticipants) * 100}%</div>
      </div>
    );

    const alternativeChoice = (
      <div>
        <h3>alt</h3>
        <div>{(q.alternative.count / totalParticipants) * 100}%</div>
      </div>
    );
    const choices = (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {defaultChoice}
        {alternativeChoice}
      </div>
    );

    return (
      <div>
        {timerDisplay}
        {choices}
      </div>
    );
  }

  return <div>{display}</div>;
}
