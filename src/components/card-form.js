import React, { Component } from 'react';

class CardForm extends Component {

  state = {
    curr: '',
    type: '',
    expDate: '',
    filled: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <h2>Add new card</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="curr"
            name="curr"
            value={this.state.curr}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="type"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="expDate"
            name="expDate"
            value={this.state.expDate}
            onChange={this.handleChange}
          />
        </div>
        { !!this.state.curr && !!this.state.type && !!this.state.expDate &&
        <div className="form-group">
          <p className="text-success">Now form is filled</p>
        </div>}
        <div className="form-group">
          <button disabled={!(!!this.state.curr && !!this.state.type && !!this.state.expDate)} className="btn btn-primary btn-sm" type="submit">Submit</button>
        </div>
      </form>
    );
  }

}

export default CardForm;
