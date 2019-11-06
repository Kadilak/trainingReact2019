import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons'


class LogInSite extends Component {

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

    render() {
        return (
            <section className="mt-5 d-flex justify-content-center">
            <form>
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
        
              <div class="form-group">
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
                <button className="btn btn-primary">
                  <i className="fa fa-sign-in-alt" /> Zaloguj
                </button>
              </div>
              <div className="text-right">
                <button type="button" onClick={this.resetForm} className="btn btn-success">
                  <i className="fa fa-sign-in-alt" /> Reset
                </button>
              </div>
            </form>
          </section>
        )
    }
}

export default LogInSite
