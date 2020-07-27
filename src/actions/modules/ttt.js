import { updateModuleState } from './';

export const tttActionHash = {
  'ttt-show-grid': showGridAction,
  'ttt-show-title': showTitleAction,
  'ttt-teams-created': teamsCreatedAction,
  'ttt-game-updated': gameUpdatedAction,
};

function showGridAction(params, component) {
  updateModuleState(component, { showGrid: true });
}

function showTitleAction(params, component) {
  updateModuleState(component, { showTitle: true });
}

function teamsCreatedAction(params, component) {
  updateModuleState(component, { step: 'lobby' });
}

function gameUpdatedAction(params, component) {
  updateModuleState(component, { step: 'in-progress', ...params });
}
