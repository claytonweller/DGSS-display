import React from 'react';
import { TttGrid } from './TttGrid';

export function TttGame({ moduleState }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
      <div style={{ fontSize: '20vh' }}>
        <div>X</div>
        <div>{moduleState.teamX.state.score}</div>
      </div>
      <TttGrid moduleState={moduleState} />
      <div style={{ fontSize: '20vh' }}>
        <div>O</div>
        <div>{moduleState.teamO.state.score}</div>
      </div>
    </div>
  );
}
