export const boatraceActionHash = {
  'boatrace-show-title': showTitleAction,
  'boatrace-ready-to-board': readyToBoardAction,
  'boatrace-boat-boarded': boatBoardedAction,
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
