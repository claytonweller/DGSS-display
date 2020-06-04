import { updateModuleState } from './';

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
  'boatrace-stroke-progress': strokeProgressAction,
  'boatrace-stroke-finish': strokeFinishAction,
  'boatrace-race-ended': raceEndedAction,
};

function showTitleAction(params, component) {
  updateModuleState(component, { step: 'title' });
}

function readyToBoardAction(params, component) {
  updateModuleState(component, {
    step: 'boarding',
    boats: params.boats,
    lastBoarded: [],
  });
}

function boatBoardedAction(params, component) {
  updateModuleState(component, {
    boats: params.allBoats,
    lastBoarded: params.boat,
  });
}

function coxswainsSelectedAction(params, component) {
  updateModuleState(component, { ...params });
}

function boatNamedAction(params, component) {
  updateModuleState(component, { boats: updateSpecificBoat(params, component) });
}

function closeNamingAction(params, component) {
  updateModuleState(component, { boats: params.boats });
}

function displayBoatNameAction(params, component) {
  updateModuleState(component, { boats: updateSpecificBoat(params, component) });
}

function displayNextInstructionAction(params, component) {
  const { moduleState } = component.state;
  const instructionStep =
    moduleState.instructionStep || moduleState.instructionStep === 0 ? moduleState.instructionStep + 1 : 0;
  console.log(instructionStep, moduleState.instructionStep);
  updateModuleState(component, {
    step: 'instructions',
    instructionStep,
  });
}

function raceStartedAction(params, component) {
  updateModuleState(component, {
    step: 'racing',
    boats: params.boats,
  });
}

function strokeProgressAction(params, component) {
  updateModuleState(component, { boats: params.boats });
}

function strokeFinishAction(params, component) {
  updateModuleState(component, { ...params });
}

function raceEndedAction(params, component) {
  updateModuleState(component, { step: 'race-ended', podium: params.podium });
}

///
function updateSpecificBoat(params, component) {
  return component.state.moduleState.boats.map((b) => (b.id === params.boat.id ? params.boat : b));
}
