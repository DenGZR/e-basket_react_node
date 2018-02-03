import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import { Row, Col } from 'reactstrap';
import { fetchUserAuth } from './actions';

class Login extends Component {

    render() {
        const { isLogin } = this.props;
        if (isLogin) {
            return <Redirect to={{ pathname: '/admin' }}/>
        }
        
        return (
            <Row>
                <Col xs={{ size: 4, offset: 4 }}>
                    <LoginForm
                        onHandleSubmit={this.processForm()}
                        errors={''}
                    />
                </Col>
            </Row>
        );
    };

    processForm = () => (ev) => {
        ev.preventDefault();
        const { values } = this.props.loginForm;
        this.props.fetchUserAuth(values);
    };

};
const mapStateToProps = (state) => ({
    loginForm: state.form.loginForm,
    isLogin: state.auth.isLogin,
});

const mapDispatchToProps = {
    fetchUserAuth: (data) => fetchUserAuth(data),
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
