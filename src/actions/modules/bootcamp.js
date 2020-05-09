import { client } from '../../';

export const bootcampActionHash = {
  'bootcamp-fact': factAction,
  'bootcamp-metric': metricAction,
  'bootcamp-logo': logoAction,
  'bootcamp-test-started': testStartedAction,
  'bootcamp-test-success': testSuccessAction,
  'bootcamp-test-ended': testEndedAction,
};

const setModuleState = (component, display, params) => {
  component.setState({
    moduleState: {
      display: display,
      data: params,
    },
  });
};

function factAction(params, component) {
  setModuleState(component, 'fact', params);
}

function metricAction(params, component) {
  setModuleState(component, 'metric', params);
}

function logoAction(params, component) {
  setModuleState(component, 'logo', {});
}

function testStartedAction(params, component) {
  const { attendeeConnections } = params;

  component.setState({
    moduleState: {
      display: 'test',
      testing: true,
      attendeeConnections,
      startTime: Date.now(),
      runnerUps: [],
    },
  });
}

function testSuccessAction(params, component) {
  const { moduleState } = component.state;

  moduleState.attendeeConnections.forEach((ac) => {
    if (ac.attendee_id === params.attendee_id) {
      ac.successTime = Date.now();
      params.successTime = Date.now();
    }
  });

  if (!moduleState.winner) {
    moduleState.winner = params;
  } else {
    moduleState.runnerUps.push(params);
  }

  // At this point there will be no more people to send in their responses so we let all the clients know that
  // The test is over!
  if (moduleState.runnerUps.length + 1 === moduleState.attendeeConnections.length) {
    const { performance_id } = component.state.currentConn;
    const payload = JSON.stringify({
      action: 'bootcamp-end-test',
      params: { performance_id },
    });

    client.send(payload);
  }
  component.setState({ moduleState });
}

function testEndedAction(params, component) {
  component.setState({
    moduleState: {
      ...component.state.moduleState,
      testing: false,
      endTime: Date.now(),
    },
  });
}
