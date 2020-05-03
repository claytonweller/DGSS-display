import React from 'react';
import './App.css';
import { manageMessage } from './actions';
import { client } from './index';
import { Preshow } from './components/preshow';
import { PerformanceConnector } from './components/PerformanceConnector';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleState: {},
      currentModule: {},
      activePerformances: {},
      performance: {},
      currentConn: {
        id: '',
        performance_id: 0,
        attendee_id: 0,
        aws_connection_id: '',
        created_at: '',
        source: 'display',
      },
    };
  }

  componentWillMount() {
    client.onopen = (message) => {
      const params = { source: 'display' };
      console.log('WebSocket Client Connected\n', message);
      // On AWS it works to send to the client in the onOpen, but for the local service this
      // doesn't work. So we manage that case inside of the manageMessage function
      client.send(JSON.stringify({ action: 'connect-source', params }));
    };
    client.onmessage = (message) => {
      const raw = JSON.parse(message.data);
      // We pass through the message, and the component. That way we can manage state based upon the
      // information the client gives us
      manageMessage(raw, this);
    };
  }

  setPerformance(performance) {
    this.setState({ performance });
  }

  render() {
    const moduleHash = {
      preshow: <Preshow moduleState={this.state.moduleState} />,
      default: (
        <PerformanceConnector
          connection={this.state.currentConn}
          activePerformances={this.state.activePerformances}
          setPerformance={(p) => this.setPerformance(p)}
          performance={this.state.performance}
        />
      ),
    };

    const currentModuleTitle = this.state.currentModule.title;
    const moduleInterface = currentModuleTitle ? moduleHash[currentModuleTitle] : moduleHash.default;

    return (
      <div className="App">
        <h1>DISPLAY</h1>
        {moduleInterface}
      </div>
    );
  }
}

export default App;
