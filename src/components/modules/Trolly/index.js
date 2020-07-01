import React from 'react';
import TQuestion from './Question';
import { TGrid } from './Grid';

export function Trolly({ moduleState }) {
  const { currentQuestion, step } = moduleState;
  let display = null;
  if (step === 'title') display = <h3>The Trolly Problem</h3>;
  if (step === 'show-question') display = <TQuestion moduleState={moduleState} />;
  if (step === 'show-grid') display = <TGrid moduleState={moduleState} />;
  if (step === 'show-question' && Object.keys(currentQuestion).length === 0)
    display = <TGrid moduleState={moduleState} />;
  return <div>{display}</div>;
}
