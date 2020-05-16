export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
};

function showTitleAction(params, component) {
  component.setState({
    moduleState: {
      step: 'title',
    },
  });
}

function readyToBoardAction(params, component) {
  console.warn(params);
  component.setState({
    moduleState: {
      step: 'boarding',
      boats: params.boats,
    },
  });
}
