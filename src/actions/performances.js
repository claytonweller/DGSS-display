export const performanceActionHash = {
  'performance-created': performanceCreatedAction,
  'performance-ended': performanceEndedAction,
  'performance-joined': performanceJoinedAction,
};

async function performanceJoinedAction(params, component) {
  console.log('Performance Joined\n', params);
  if (params.source === 'display') {
    component.setState({ ...params });
  } else {
    console.log(params.attendee.name, ' has joined');
  }
}

// This doesn't currently DO anything, but eventually we might want to
// be able to alert someone when a performance has been created? Maybe?
async function performanceCreatedAction(params, component) {
  console.log('Performance Created \n', params);
  // component.setState({ performance: params })
}

// This doesn't currently do enough.
async function performanceEndedAction(parms, component) {
  console.log('Performance Ended');
  component.setState({ performance: {} });
}
