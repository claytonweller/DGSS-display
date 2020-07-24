import { updateModuleState } from './';

export const tttActionHash = {
  'ttt-show-grid': showGridAction,
  'ttt-show-title': showTitleAction,
  'ttt-teams-created': teamsCreatedAction,
};

function showGridAction(params, component) {
  console.log('Template', params);
  updateModuleState(component, { showGrid: true });
}

function showTitleAction(params, component) {
  console.log('Template', params);
  updateModuleState(component, { showTitle: true });
}

function teamsCreatedAction(params, component) {
  updateModuleState(component, { step: 'lobby', params });
}
