import React from 'react';

export function TGrid({ moduleState }) {
  const { pastQuestions } = moduleState;
  console.log(pastQuestions);
  const choiceDisplay = (choice) => {
    const truncatedText = choice.text.slice(0, 10);
    return (
      <div>
        <div>{truncatedText}</div>
        <div>Count: {choice.count}</div>
      </div>
    );
  };

  const questionElements = pastQuestions.map((q, i) => {
    const def = choiceDisplay(q.default);
    const alt = choiceDisplay(q.alternative);

    return (
      <div style={{ display: 'flex', padding: '2px', margin: '2px', border: 'black solid 1px' }} key={'question' + i}>
        {def}
        <div> / </div>
        {alt}
      </div>
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', width: '100vw' }}>{questionElements}</div>
    </div>
  );
}

export default TGrid;
