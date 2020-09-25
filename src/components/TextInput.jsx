import React from 'react';

class TextInput extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  onChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { handler } = this.props;

    return (
      <form className="form-row" onSubmit={handler(value)}>
        <div className="col">
          <input
            className="form-control form-control-lg w-100"
            onChange={this.onChangeHandler}
            type="text"
            name="city"
            value={value}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-primary px-sm-5" type="submit">
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default TextInput;
