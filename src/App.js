import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import DataTable from './components/table'


class App extends Component {
  state = {
    items: []
  }

  getItems() {
    fetch('http://localhost:8080/tweets')
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }


  componentDidMount() {
    this.getItems()
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col className="twitter-color">
            <h1  style={{ margin: "20px 0" }}>Turner Test <img className="twitter-image" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter"></img></h1>
          </Col>
          
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} />
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App