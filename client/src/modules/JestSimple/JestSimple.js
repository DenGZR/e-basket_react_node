import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import callApi from '../../utils/apiCaller';
import Link from '../../components/Link/Link';
import CheckboxWithLabel from '../../components/CheckboxWithLabel/CheckboxWithLabel';
import UserList from '../../components/UserList/UserList';

class JestSimple extends Component {

  state = {
    users : []
  };

  componentDidMount() {
    callApi(`users`)
      .then(response => {
        this.setState({ users : response });
      })
      .catch((err) => {
        console.log('req user error!!!', err);
      });
  };

  render() {
    const { users } = this.state;

    return (
      <Container>
        <Row>
          <Col xs={{ size: 10, offset: 1 }}>
            <h1>Jest & Enzyme</h1>
            <hr/>
            <p>Snapshot test example</p>
            <Link>Home</Link>
            <hr/>
            <div>
              <a href="http://airbnb.io/enzyme/docs/api/index.html">Enzyme api example</a>
            </div>
            <div>
              <a href="http://airbnb.io/enzyme/docs/api/shallow.html">Enzyme api --> shallow:   </a>
              <CheckboxWithLabel labelOn="ON" labelOff="OFF"/>
            </div>
            <div>
              <a href="http://airbnb.io/enzyme/docs/api/mount.html">Enzyme api --> mount:   </a>
              <UserList data={users}/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JestSimple;
