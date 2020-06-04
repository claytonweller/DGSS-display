import React from 'react';
import BoatraceInstructions from './Instructions';

export function Boatrace({ moduleState, currentModule }) {
  let display = (
    <div>
      <i>It's empty</i>
    </div>
  );

  const title = () => {
    return (
      <div>
        <h3>Boatrace</h3>
      </div>
    );
  };

  const boatDispaly = ({ lastBoardedId = 0, isBoarding, isRacing }) => {
    const boats = moduleState.boats.map((boat, i) => {
      const arrow = boat.id === lastBoardedId ? '<---' : null;
      const name = isNaN(parseInt(boat.name)) && boat.state.nameIsVisible ? boat.name : null;
      const crew = isBoarding ? `- crew: ${boat.attendee_aws_ids.length}` : null;
      const progress = isRacing ? `- Progress ${boat.progress}` : null;
      return (
        <div key={boat.name + i}>
          #{i + 1}\_____/ {crew} {arrow} {name} {progress}
        </div>
      );
    });
    return <div>{boats}</div>;
  };

  const boarding = () => {
    const lastBoardedId = moduleState.lastBoarded ? moduleState.lastBoarded.id : null;
    return boatDispaly({ lastBoardedId, isBoarding: true });
  };

  const racing = () => {
    return boatDispaly({ isRacing: true });
  };

  const raceEnded = () => {
    const podium = JSON.stringify(moduleState.podium);
    return (
      <div>
        {boatDispaly({})}
        {podium}
      </div>
    );
  };

  if (moduleState.step === 'title') display = title();
  if (moduleState.step === 'boarding') display = boarding();
  if (moduleState.step === 'instructions')
    display = <BoatraceInstructions currentModule={currentModule} instructionStep={moduleState.instructionStep} />;
  if (moduleState.step === 'racing') display = racing();
  if (moduleState.step === 'race-ended') display = raceEnded();

  return <div>{display}</div>;
}
