import React from 'react';
import TextInput from './TextInput';
import WeatherInfo from './WeatherInfo';
import weather from '../weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '', t: '' };
  }

  onSubmitHandler = (value) => (e) => {
    e.preventDefault();
    weather(value).then((data) => {
      const { name , temp} = data;
      this.setState({ city: name, t: temp });
    });
  };

  render() {
    const { city, t } = this.state;

    return (
      <>
        <TextInput handler={this.onSubmitHandler} />
        <WeatherInfo city={city} weather={t} />
      </>
    );
  }
}

export default App;
