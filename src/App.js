
import './App.scss';
import SearchBar from './components/search-bar';
import Currentweather from './components/current-weather';
import { getCurrentweather, getForecast } from './api keys/open-weather.api keys';
import React from 'react';
import Forecast from './components/forecast-weather';
class App extends React.Component {
 constructor(props){
    super(props);
 this.state = {
 location: "India",
 temp: "",
 feelslike: "",
 description: "",
 icon: "",
 hourlyForecast: []
 };
 }
 componentDidMount() {
   this.onFormSubmit();
 }

onInputChange(e) {
    this.setState({
    location: e.target.value
    });
}
 async onFormSubmit() {
 const weatherRes = await getCurrentweather(this.state.location);
  const Lat = weatherRes.data.coord.lat;
   const Lon = weatherRes.data.coord.lon;

  const forecastRes = await getForecast(Lat, Lon);
    this.setState({
     temp: weatherRes.data.main.temp,
     feelslike: weatherRes.data.main.feels_like,
     description: weatherRes.data.weather[0].main,
     icon: weatherRes.data.weather[0].icon,
     hourlyForecast: forecastRes.data.hourly
 });
 }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar location={this.state.location} inputChange={(e) => this.onInputChange(e)} 
        formSubmitted={() => this.onFormSubmit()}/>
        <Currentweather currentTemperature={this.state.temp} 
        feelslike={this.state.feelslike}
        description={this.state.description}
        icon={this.state.icon}/>
        <Forecast forecast={this.state.hourlyForecast} />
      </header>
    </div>
  );
  }
}

export default App;
