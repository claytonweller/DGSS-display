import React from 'react'
import { client } from '..';

export class PerformanceConnector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataIndex: 0
    };
  }

  render() {
    console.log('selected', this.state.selectedDataIndex)
    const { activePerformances, connection } = this.props
    let display = this.noPerformances()
    console.log('PERFORMANCEID', connection.performance_id)
    if (activePerformances && activePerformances.length) {
      display = this.performancesAvailable()
    }
    if (Object.keys(this.props.performance).length) {
      display = this.joinedPerfomance()
    }

    return (
      <div>
        <h3>PerformanceConnector</h3>
        {display}
      </div>
    )
  }

  handleSubmit(event) {
    console.log(this.state.selectedDataIndex)
    event.preventDefault()
    const { selectedDataIndex } = this.state
    const selectedPerformance = this.props.activePerformances[selectedDataIndex]
    const { id: performance_id } = selectedPerformance
    this.props.setPerformance(selectedPerformance)
    const payload = { action: 'join-performance', params: { performance_id, source: 'display' } }
    client.send(JSON.stringify(payload))
  }

  noPerformances() {
    return <div>No shows to connect to</div>
  }

  performancesAvailable() {
    const performanceOptions = this.props.activePerformances.map((p, i) => {
      return (<option value={i} key={p.id}>{p.created_at}</option>)
    })

    const joinButton = (<input type="submit" value="Join" />)

    return (
      <div >
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="activePerformances">Choose a performance:</label>
          <select
            onChange={event => this.setState({ selectedDataIndex: event.target.value })}
            value={this.state.selectedDataIndex}
            id="activePerformances"
          >
            {performanceOptions}
          </select>
          {joinButton}
        </form>

        <p />
        <div style={{ width: '95vw', wordWrap: 'break-word' }}>{JSON.stringify(this.props.activePerformances)}</div>
      </div>
    )
  }

  joinedPerfomance() {
    return (
      <div>
        <h4>Joined Peformance!</h4>
        <div>{JSON.stringify(this.props.performance)}</div>
      </div>
    )
  }
}