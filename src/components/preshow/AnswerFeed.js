import React from 'react';

export const AnswerFeed = (props) => {
  const answers = props.answers ? (
    props.answers.map((a, i) => {
      const { attendee_name } = a.interaction;
      const { response, question } = a.data;
      const text = question.display.replace('_NAME_', attendee_name).replace('_RESPONSE_', response);
      return <div key={`answer-${i}`}>{text}</div>;
    })
  ) : (
    <div>Nothing</div>
  );

  return (
    <div>
      <h4>AnswerFeed</h4>
      {answers}
    </div>
  );
};
