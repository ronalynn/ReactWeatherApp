import styled from 'styled-components'

const KELVIN = 273;
export const WeatherDetailIcons = {
    sunrise: "/icons/sunrise.png",
    sunset: "/icons/sunset.png",
    humidity: "/icons/humidity.png",
    wind: "/icons/wind.png",
};

const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 10px auto;
`;

const Temperature = styled.div`
    color:black;
    font-size: 28px;
    margin: 0px 20px 0px 50px;
`;

const WeatherImg = styled.img`
    width: 128px;
    height: 128px;  
    margin: 0px 50px 0px 50px;  
`;

const WeatherDescription = styled.div`
    color:black;
    font-size: 20px;
    margin: 0px 0px 10px 0px ;
`;

const Location = styled.span`
    font-size: 28px;
    font-weight: bold;
`;

const WeatherDetailsLabel = styled.span`
    font-size: 15px;
    font-weight: bold;
    margin: 20px 20px 10px 70px;
    text-align: start;
    width: 100%;
`;

const WeatherDetailsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const WeatherDetailsComponent = (props) => {
    const{name, value} = props;
    return (
        <DetailContainer>
            <DetailIcon src={WeatherDetailIcons[name]}/>
            <DetailLabel>
                {value}
                <span>{name}</span>
            </DetailLabel>
        </DetailContainer>
    )
}

const DetailContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const DetailIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const DetailLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const WeatherIcons = {
    "01d": "icons/sunny.png",
    "01n": "icons/night.png",
    "02d": "icons/cloud-sun.png",
    "02n": "icons/cloudy-night.png",
    "03d": "icons/cloudy.png",
    "03n": "icons/cloudy-night.png",
    "04d": "icons/cloud-sun.png",
    "04n": "icons/cloudy-night.png",
    "09d": "icons/sun-rain.png",
    "09n": "icons/cloud-rain.png",
    "10d": "icons/rain.png",
    "10n": "icons/cloud-rain.png",
    "11d": "icons/thunderstorm.png",
    "11n": "icons/storm.png",
    "13d": "icons/snow.png",
    "13n": "icons/snow.png"
  };


const WeatherInfoComponent = (props) => {
    const {weather} = props;
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : 
                ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
        <>
        <WeatherCondition>
            <Temperature><span>{`${Math.floor(weather?.main?.temp - KELVIN)}`}°C</span></Temperature>
            <WeatherImg src={WeatherIcons[weather?.weather[0].icon]}/>
        </WeatherCondition>

        <WeatherDescription>
            {`${weather?.weather[0].description}`}
        </WeatherDescription>

        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        
        <WeatherDetailsLabel>Details</WeatherDetailsLabel>

        <WeatherDetailsContainer>
            <WeatherDetailsComponent name ="sunrise" value={getTime(weather?.sys?.sunrise)}/>
            <WeatherDetailsComponent name ="sunset" value={getTime(weather?.sys?.sunset)}/>
            <WeatherDetailsComponent name ="humidity" value={weather?.main?.humidity}/>
            <WeatherDetailsComponent name ="wind" value={weather?.wind?.speed}/>
        </WeatherDetailsContainer>
        </>
    );
        
        
};
export default WeatherInfoComponent;