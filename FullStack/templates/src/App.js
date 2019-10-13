import React from 'react';
import './App.css';
import { Col, Steps, Row, Typography } from 'antd';
import axios from 'axios';

const { Step } = Steps;

class App extends React.Component {
  state = {
    current: 0,
    initialResponse: {},
    filteredResonse: {}
  };

  onChange = current => {
    this.setState({ current });
  };

  sendGoogleAPICall() {
    // send call to google API
    axios.get()
      .then(jsonResponse => {
        this.setState({ initialResponse: jsonResponse });
        // processing and filtering
        const temp = {
          location: 'test',
          time: 'test',
          types: 'test',
          link: 'test',
          start: 'test',
          end: 'test',
          username: 'test',
          contact: 'test'
        }
        this.setState({ filteredResponse: temp });
      })
      .catch(error => {
        console.log(error);
      });
  }

  sendBackendAPICall() {
    axios.get('api/incident', { body: this.state.filteredResponse });
  }

  render() {
    const { current } = this.state;

    if (this.state.current === 1) {
      this.sendGoogleAPICall();
    } else if (this.state.current === 2) {
      this.sendBackendAPICall();
    } 

    return (
      <Row type="flex" justify="space-around" align="middle">
        <video className="video-container video-container-overlay" preload="auto" controls width="700" loop="" muted="" data-reactid=".0.1.0.0">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://storage.cloud.google.com/dubhacks-input-videos/robberyvideo.mp4" />
        </video>
        <Col>
          <Typography title={2}>
            <Typography.Title>RAPID SECURITY</Typography.Title>
          </Typography>
          <Steps current={current} onChange={this.onChange} direction="vertical">
            <Step title="Monitor" description="IoT video footage device uses Rapid Security API" />
            <Step title="Detect" description="Detection of firearms using Google Video Intelligence" />
            <Step title="Inform" description="Rapid Security informs nearby enforcements about potential violence" />
          </Steps>
        </Col>
      </Row>
    );
  }
}

export default App;
