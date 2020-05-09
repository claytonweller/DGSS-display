import React from 'react';

export function BootcampMetric({ metricData }) {
  const nubmerDisplay = () => {
    return (
      <div>
        <h4>{metricData.propt}</h4>
        <div>
          Highest: {metricData.highest.attendee} with {metricData.highest.value}
        </div>
        <div>
          Lowest: {metricData.lowest.attendee} with {metricData.lowest.value}
        </div>
        <div>Total: {metricData.total}</div>
        <div>Values (Maybe a historgram?): {metricData.values.join(', ')} </div>
      </div>
    );
  };

  const multipleChoice = () => {
    return (
      <div>
        <h4>{metricData.prompt}</h4>
        <div>A histogram showing: {JSON.stringify(metricData.answers)}</div>
      </div>
    );
  };

  let display = <div>Not a metric</div>;
  if (metricData.type === 'number') display = nubmerDisplay();
  if (metricData.type === 'multiple-choice') display = multipleChoice();
  return (
    <div>
      <h4>Metric</h4>
      {display}
    </div>
  );
}
