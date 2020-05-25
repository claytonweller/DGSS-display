import React from 'react';
import { client } from '../../../';

const BoatraceInstructions = ({ instructionStep, currentModule }) => {
  let display = [
    <div>First we show Coxswain on the left and Crew on the right and a boat on the bottom left</div>,
    // <div>Under Coxswain we show a sample list</div>,
    // <div>Highlight the first name</div>,
    // <div>Show the name on the right and button that says ‘STROKE!’ depressed</div>,
    // <div>Highlight second name</div>,
    // <div>Show name on the right button pressed.</div>,
    // <div>Third Name</div>,
    // <div>Third Button</div>,
    // <div>Boat Moves</div>,
  ];

  let step = instructionStep;
  if (instructionStep >= display.length - 1) {
    client.send(JSON.stringify({ action: 'boatrace-instructions-complete', params: { currentModule } }));
    step = display.length - 1;
  }

  return (
    <div>
      <h2>Instructions</h2>
      {display[step]}
    </div>
  );
};

export default BoatraceInstructions;
