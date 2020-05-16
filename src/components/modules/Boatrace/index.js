import React from 'react';

export function Boatrace({ moduleState }) {
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

  const boarding = () => {
    const boats = moduleState.boats.map((boat, i) => {
      return (
        <div>
          #{i + 1}\_____/- crew: {boat.attendee_aws_ids.length}
        </div>
      );
    });
    return <div>{boats}</div>;
  };

  if (moduleState.step === 'title') display = title();
  if (moduleState.step === 'boarding') display = boarding();

  return <div>{display}</div>;
}
