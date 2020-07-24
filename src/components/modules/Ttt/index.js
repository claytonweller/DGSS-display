import React from 'react';
import { TttTitle } from './TttTitle';

export function Ttt({ moduleState }) {
  const display = <TttTitle moduleState={moduleState}></TttTitle>;
  return <div>{display}</div>;
}
