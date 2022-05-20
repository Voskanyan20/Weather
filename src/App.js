import React, {Component} from 'react';
import axios from 'axios'
import _ from 'lodash'

import Weather from './components/Weather'
import './App.css'
const KEY = 'c565d19299e288bc8359d22aec911089'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        temp:'',
        feels_like:'',
        city:'',
        country:'',
        weather:'',
        wind:'',
        icon:'',
    }
  }
    getDataWithName = async(e,value) => {
        e.preventDefault()
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`,{
            params:{
                q:value,
                units:'metric',
                appid:KEY
            }
        })
        this.setState({
            temp:_.floor(data.main.temp),
            feels_like:_.floor(data.main.feels_like),
            city:data.name,
            country:data.sys.country,
            weather:data.weather[0].description,
            wind:_.floor(data.wind.speed),
            icon:data.weather[0].icon
        })
    }

    getWeather = async () => {
        navigator.geolocation.getCurrentPosition((position) => (
            this.getData(position.coords.latitude, position.coords.longitude)
        ));
    }

    getData = async (lat,lon) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`,{
            params:{
                lat:lat,
                lon:lon,
                units:'metric',
                appid:KEY
            }
        })
        this.setState({
            temp:_.floor(data.main.temp),
            feels_like:_.floor(data.main.feels_like),
            city:data.name,
            country:data.sys.country,
            weather:data.weather[0].description,
            wind:_.floor(data.wind.speed),
            icon:data.weather[0].icon,
        })
    }

    render() {
      const{temp,feels_like,city,country,weather,wind,icon,lon,lat} = this.state
        return (
            <div>
                <h1 className={'title'}>The Weather</h1>
                <div className={'mother_div'}>
                    <Weather
                        onName = {this.getDataWithName}
                        onCurrent = {this.getWeather}
                        temp = {temp}
                        feels_like = {feels_like}
                        city={city}
                        country={country}
                        weather={weather}
                        wind={wind}
                        icon={icon}
                    />
                </div>
            </div>
        );
    }
}

export default App;