import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveCard } from '../actions/actions';

// import { Alert } from 'reactstrap';

import './card-form.css';
class CardForm extends Component {

  state = {
    curr: '',
    type: '',
    expDate: '',
    errors: {},
    loading: false,
    done: false
  }

  handleChange = (e) => {

    if(!!this.state.errors[e.target.name]) {
      // если есть ошибки валидации по текущему полю - удалить эти ошибки из стейта
      // только по текущему полю
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name]
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });

    } else {
      // иначе просто установить значение стейта
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // validation
    let errors = {};
    if (this.state.curr === '') errors.curr = "Can't be empty";
    if (this.state.type === '') errors.type = "Can't be empty";
    if (this.state.expDate === '') errors.expDate = "Can't be empty";
    // put errors in the state
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      // get values from the state
      const { _id, curr, type, expDate } = this.state;
      // turn on loader
      this.setState({ loading: true });

      // if there is ID in the state
      // this means we in edit mode
      if (_id) {
        // this.props.updateCard({ _id, curr, type, expDate })
        //   .then(() => { this.setState({ done: true }) },
        //     (err) => err.response.json()
        //       .then(({ errors }) => this.setState({ errors, loading: false })));
      // otherwise - we creating form
      } else {
        this.props.saveCard({ curr, type, expDate})
          .then(() => { this.setState({ done: true }) },
            (err) => err.response.json()
              .then(({ errors }) => this.setState({ errors, loading: false })));
      }

    }
  }

  render() {
    const form = (
      <form onSubmit={this.handleSubmit} className="form">
        <div className={classnames({ 'loading': this.state.loading})}>
          <h2>Add new card</h2>

          {!!this.state.errors.global && <div className="text-danger">
            {this.state.errors.global}
          </div>}

          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-sm", {"is-invalid": !!this.state.errors.curr})}
              placeholder="curr"
              name="curr"
              autoComplete="off"
              value={this.state.curr}
              onChange={this.handleChange}
            />
            <div className={classnames("invalid-feedback", {"d-none": !this.state.errors.curr})}>
              Please provide a valid curr.
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-sm", {"is-invalid": !!this.state.errors.type})}
              placeholder="type"
              name="type"
              autoComplete="off"
              value={this.state.type}
              onChange={this.handleChange}
            />
            <div className={classnames("invalid-feedback", {"d-none": !this.state.errors.type})}>
              Please provide a valid type.
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-sm", {"is-invalid": !!this.state.errors.expDate})}
              placeholder="expDate"
              name="expDate"
              autoComplete="off"
              value={this.state.expDate}
              onChange={this.handleChange}
            />
            <div className={classnames("invalid-feedback", {"d-none": !this.state.errors.expDate})}>
              Please provide a valid expiration date.
            </div>
          </div>
          { !!this.state.curr && !!this.state.type && !!this.state.expDate &&
          <div className="form-group">
            <p className="text-success">Now form is filled</p>
          </div>}
          <div className="form-group">
            <button className="btn btn-primary btn-sm" type="submit">Submit</button>
          </div>
          <div className="loader"></div>
        </div>
      </form>
    );
    return (
      <div>
        { this.state.done ? <Redirect to="/cards" /> : form }
      </div>
    );
  }

}

// first argument - data from state
// second argument is object of actions
export default connect(null, { saveCard })(CardForm);
