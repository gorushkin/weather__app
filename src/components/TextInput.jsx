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
      <form onSubmit={handler(value)}>
        <input
          className="form-control"
          onChange={this.onChangeHandler}
          type="text"
          name="city"
          value={value}
        />
      </form>
    );
  }
}

export default TextInput;
