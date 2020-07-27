import React from 'react';
import { TttTitle } from './TttTitle';
import { TttGame } from './TttGame';

export function Ttt({ moduleState }) {
  let display = <TttTitle moduleState={moduleState} />;
  if (moduleState.step === 'in-progress') display = <TttGame moduleState={moduleState} />;
  return <div>{display}</div>;
}
