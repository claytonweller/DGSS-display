import React from 'react';
import { AnswerFeed } from './AnswerFeed';

export function Preshow(props) {
  return (
    <div>
      <h3>Preshow</h3>
      <div>
        <h4>Instructrions</h4>
        <div>Eventually this will be it's own component</div>
      </div>
      <AnswerFeed answers={props.moduleState.answers} />
    </div>
  );
}
