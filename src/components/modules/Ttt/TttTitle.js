import React from 'react';

export function TttTitle({ moduleState }) {
  const { showGrid, showTitle } = moduleState;

  const grid = showGrid ? <div>Grid</div> : null;
  const title = showTitle ? <div>Title</div> : null;

  return (
    <div>
      {title}
      {grid}
    </div>
  );
}
