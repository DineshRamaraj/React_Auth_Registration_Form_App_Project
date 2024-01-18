// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegisterForm: true,
    isFirstNameError: false,
    isLastNameError: false,
    firstName: '',
    lastName: '',
  }

  submitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isRegisterForm: false})
    } else {
      this.setState({
        isFirstNameError: firstName === '',
        isLastNameError: lastName === '',
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameError: true})
    } else {
      this.setState({isFirstNameError: false})
    }
  }

  renderFirstName = () => {
    const {isFirstNameError, firstName} = this.state
    const firstNameStyle = isFirstNameError ? 'border-color' : ''
    return (
      <>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          className={`first-name-input ${firstNameStyle}`}
          value={firstName}
        />

        {isFirstNameError ? <p className="error-message">Required</p> : ''}
      </>
    )
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastNameError: true})
    } else {
      this.setState({isLastNameError: false})
    }
  }

  renderLastName = () => {
    const {isLastNameError, lastName} = this.state
    const lastNameStyle = isLastNameError ? 'border-color' : ''

    return (
      <>
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          className={`last-name-input ${lastNameStyle}`}
          value={lastName}
        />
        {isLastNameError ? <p className="error-message">Required</p> : ''}
      </>
    )
  }

  renderRegisterForm = () => (
    <form className="form-container" onSubmit={this.submitForm}>
      <div className="input-card">{this.renderFirstName()}</div>
      <div className="input-card">{this.renderLastName()}</div>
      <div className="form-button-container">
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </div>
    </form>
  )

  submitAnotherForm = () => {
    this.setState({
      isRegisterForm: true,
      isFirstNameError: false,
      isLastNameError: false,
      firstName: '',
      lastName: '',
    })
  }

  renderSubmitForm = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="result-heading">Submitted Successfully</p>
      <button
        type="button"
        onClick={this.submitAnotherForm}
        className="another-form-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isRegisterForm} = this.state
    return (
      <div className="app-container">
        <h1 className="app-heading">Registration</h1>
        {isRegisterForm ? this.renderRegisterForm() : this.renderSubmitForm()}
      </div>
    )
  }
}

export default RegistrationForm
