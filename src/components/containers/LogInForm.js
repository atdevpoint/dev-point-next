/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import createSession from '../../sandbox/createSession';
import { saveAuthStatus } from '../../redux/actions/user';

const LogInForm = ({ authStatus, saveAuthStatus }) => {
  const userInfoInit = {
    email: '', password: '',
  };

  const [userInfo, setUserInfo] = useState(userInfoInit);
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
  const [isInvalidCreds, setIsInvalidCreds] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createSession(userInfo)
      .then(response => {
        if (response.status === 201) {
          setIsLoggedIn(true);
          saveAuthStatus({ status: true });
          history.push('/');
        } else if (response.status !== 201) {
          setIsInvalidCreds(true);
          setIsLoggedIn(true);
          saveAuthStatus({ status: false });
        } else {
          console.log(response);
        }
      });
    setUserInfo(userInfoInit);
  };

  const form = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                name="email"
                onChange={handleChange}
                value={userInfo.email}
                placeholder="the one you signed up with"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Password
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="password"
                name="password"
                onChange={handleChange}
                value={userInfo.password}
                placeholder="your password"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </label>
        </div>
        <div className="control">
          <button type="submit" className="button is-link">Log in</button>
        </div>
      </form>
    </div>
  );

  const content = isLoggedIn ? <Redirect to="/" /> : form;
  return content;
};

LogInForm.propTypes = {
  authStatus: PropTypes.bool,
}.isRequired;

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { saveAuthStatus })(LogInForm);
