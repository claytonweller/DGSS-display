export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
  'boatrace-boat-boarded': boatBoardedAction,
  'boatrace-coxswains-selected': coxswainsSelectedAction,
  'boatrace-boat-named': boatNamedAction,
  'boatrace-naming-closed': closeNamingAction,
  'boatrace-display-boat-name': displayBoatNameAction,
  'boatrace-display-next-instruction': displayNextInstructionAction,
  'boatrace-race-started': raceStartedAction,
};

function showTitleAction(params, component) {
  component.setState({
    moduleState: {
      step: 'title',
    },
  });
}

function readyToBoardAction(params, component) {
  component.setState({
    moduleState: {
      step: 'boarding',
      boats: params.boats,
      lastBoarded: [],
    },
  });
}

function boatBoardedAction(params, component) {
  component.setState({
    moduleState: {
      step: 'boarding',
      boats: params.allBoats,
      lastBoarded: params.boat,
    },
  });
}

function coxswainsSelectedAction(params, component) {
  component.setState({
    moduleState: {
      step: 'boarding',
      ...params,
    },
  });
}

function boatNamedAction(params, component) {
  const boats = component.state.moduleState.boats.map((b) => {
    if (b.id === params.boat.id) {
      return params.boat;
    }
    return b;
  });

  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'boarding',
      boats,
    },
  });
}

function closeNamingAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      boats: params.boats,
      step: 'boarding',
    },
  });
}

function displayBoatNameAction(params, component) {
  const boats = component.state.moduleState.boats.map((b) => {
    if (b.id === params.boat.id) {
      return params.boat;
    }
    return b;
  });

  component.setState({
    moduleState: {
      ...component.state.moduleState,
      boats,
    },
  });
}

function displayNextInstructionAction(params, component) {
  const { moduleState } = component.state;
  const instructionStep =
    moduleState.instructionStep || moduleState.instructionStep === 0 ? moduleState.instructionStep + 1 : 0;
  console.log(instructionStep, moduleState.instructionStep);
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'instructions',
      instructionStep,
    },
  });
}

function raceStartedAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      step: 'racing',
      boats: params.boats,
    },
  });
}
