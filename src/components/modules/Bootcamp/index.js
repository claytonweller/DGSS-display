import React from 'react';
import { BootcampFact } from './fact';
import { BootcampMetric } from './metric';
import { BootcampTest } from './test';

export function Bootcamp({ moduleState }) {
  console.log(moduleState);

  let display = <div>LOGO</div>;
  if (moduleState.display === 'fact') display = <BootcampFact factData={moduleState.data} />;
  if (moduleState.display === 'metric') display = <BootcampMetric metricData={moduleState.data} />;
  if (moduleState.display === 'test') display = <BootcampTest moduleState={moduleState} />;

  return (
    <div>
      <h3>Bootcamp</h3>
      <p></p>
      {display}
    </div>
  );
}
