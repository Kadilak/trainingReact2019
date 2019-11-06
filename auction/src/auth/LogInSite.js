import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faKey, faSignInAlt, faToiletPaper } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { logInUser,logOutUser } from '../store/userActions'
import PropTypes from 'prop-types'; 

class LogInSite extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        isUserAuth: PropTypes.bool
    }

    state = {
        email: '',
        password: ''
    }

    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]: value});
    }

    resetForm = () => {
        this.setState({
            email: '',
            password: ''
        });
    }

    
    userLogout = () => {
        //this.props.logOutUser(this.state);
    }

    handleFormSubmit = (ev) => {
        ev.preventDefault();
        this.props.logInUser(this.state)
    }

    componentDidUpdate(prevProps,prevState,snapShot) {
        if(this.props.user.isAuth === true){
            this.props.history.push('/')
        }
    }

    render() {
        if(this.props.isUserAuth){
            return (
                <div>
                    <button>Logout
                    </button>
                </div>
            )
        }

        return (
            <section className="mt-5 d-flex justify-content-center">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Adres e-mail</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope}/>
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <input 
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  id="email" 
                  type="text" 
                  name="email" 
                  className="form-control" 
                  />
                </div>
              </div>
        
              <div className="form-group">
                <label htmlFor="password">Hasło dostępu</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey}/>

                      <i className="fa fa-key" />
                    </span>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.password}

                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSignInAlt}/> Zaloguj
                </button>
                <button type="button" onClick={this.resetForm} className="btn btn-success">
                <FontAwesomeIcon icon={faToiletPaper}/> Reset
                </button>
              </div>
            </form>
          </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isUserAuth: state.user.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser: (credentials) => dispatch(logInUser(credentials)
        ),
        //userLogout: () => dispatch(userLogout)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogInSite)
