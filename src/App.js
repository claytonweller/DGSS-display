import React from 'react';
import './App.css';
import { manageMessage } from './actions';
import { client } from './index';
import { Module } from './components/modules';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleState: {},
      currentModule: {
        module: {},
        instance: {},
      },
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

  componentDidMount() {
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
    return (
      <div className="App">
        <h1>DISPLAY</h1>
        <Module
          currentModule={this.state.currentModule}
          moduleState={this.state.moduleState}
          setPerformance={(p) => this.setPerformance(p)}
          currentConn={this.state.currentConn}
          activePerformances={this.state.activePerformances}
        />
      </div>
    );
  }
}

export default App;
