import React from 'react';

export function BootcampTest({ moduleState }) {
  const calculatePercent = () => {
    const numerator = moduleState.attendeeConnections.reduce((p, con) => {
      if (con.successTime) return p + 1;
      return p;
    }, 0);
    return (numerator / moduleState.attendeeConnections.length) * 100;
  };

  const percentcomplete = calculatePercent();

  const progressDisplay = () => {
    return <div>Percent in:{percentcomplete}</div>;
  };

  const calculateResponseTime = (successTime) => {
    return Math.floor((successTime - moduleState.startTime) / 100) / 10;
  };

  const winnerDisplay = () => {
    const showWinner = () => {
      const name = moduleState.winner.attendee_name;
      return (
        <div>
          Winner: {name} in {calculateResponseTime(moduleState.winner.successTime)} seconds
        </div>
      );
    };

    return moduleState.winner ? showWinner() : <div>No winner yet</div>;
  };

  const runnerUps = moduleState.runnerUps.map((c, i) => {
    return (
      <div key={'runner-up-' + i}>
        {c.attendee_name}-{calculateResponseTime(c.successTime)}
      </div>
    );
  });

  const celebration = () => {
    if (!moduleState.testing && percentcomplete !== 100) {
      return <div>We did it... more or less!</div>;
    } else if (!moduleState.testing) {
      return <div>We did it!</div>;
    }
  };

  return (
    <div>
      <h4>TEST</h4>
      {progressDisplay()}
      {winnerDisplay()}
      {runnerUps}
      {celebration()}
    </div>
  );
}
