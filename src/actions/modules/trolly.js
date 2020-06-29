import { updateModuleState } from '.';

export const trollyActionHash = {
  'trolly-show-title': showTitleAction,
  'trolly-show-question': showQuestionsAction,
  'trolly-choice-made': choiceMadeAction,
};

function showTitleAction(params, component) {
  updateModuleState(component, { step: 'title' });
}

function showQuestionsAction(params, component) {
  updateModuleState(component, { ...params, step: 'show-question' });
}

function choiceMadeAction(params, component) {
  const { currentQuestion } = params;
  updateModuleState(component, { currentQuestion });
}
