import React, {Component} from 'react';
import cloud from './cloud.jpg'
import celsius from './celsius.gif'
import Form from "./Form";
class Weather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const{onCurrent,onName,temp,feels_like,city,country,weather,wind,icon,lon,lat} = this.props
        return (
            <div>
                <div className={'weather'}>
                    <Form onName={onName}/>
                    <button className={'current_location_btn'} onClick={onCurrent} type={'button'} >Get your location</button>
                    <div className={'info_div'}>
                        <div className={'icon_div'}>
                            {
                                icon ?
                                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className={'icon'} alt={'---'} />
                                    :<img className={'celsius'} src={celsius} alt={'Description part'}/>
                            }
                        </div>
                        <div className={'temp_div'}>
                            {
                                temp? <h1 className={'temp_h'}>
                                    {temp} °C
                                </h1>: null
                            }
                        </div>

                        <div className={'extra_info'}>
                            <p className={'extra'}>
                                <span>Feel Like</span> /
                                <span> {feels_like + '°C'}</span>
                            </p>
                            <p className={'extra'}>
                                <span>City</span> /
                                <span> {city}</span>
                            </p>
                            <p className={'extra'}>
                                <span>Country</span> /
                                <span> {country}</span>
                            </p>
                            <p className={'extra'}>
                                <span>Wind Speed</span> /
                                <span> {wind}</span>
                            </p>
                            <p className={'extra'}>
                                <span>Weather</span> /
                                <span> {weather}</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/*<div className={'cloud_image_div'}>*/}
                {/*    /!*<img className={'cloud_image'} src={cloud} alt={'Cloud image'}/>*!/*/}
                {/*    <div className={'temp_div'}>*/}
                {/*        {*/}
                {/*            temp? <h1>*/}
                {/*                {temp} °C*/}
                {/*            </h1>: null*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={'info_div'}>*/}
                {/*
                {/*</div>*/}
            </div>
        );
    }
}

export default Weather;