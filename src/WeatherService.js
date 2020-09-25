const apiUrl = (cityName) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=be2fe38af5a1cf26ba0148e91402dfb6`;

class WeatherService {
  constructor(server) {
    this.server = server;
  }

  async getData(cityName) {
    const path = apiUrl(cityName);
    const response = await this.server(path);
    return response.data;
  }
}
export default WeatherService;
