import styled from 'styled-components'
import React from "react";

const WeatherAppLogo = styled.img`
    width: 140px;
    height: 140px;  
    margin: 40px auto;  
`;

const CitySearchBarLabel = styled.span`
    color:black;
    font-size: 18px;
    font-weight: bold;
`;

const CitySearchBar = styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    borer-radius: 2px;
    color:black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
    
    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }
    & button{
        padding: 10px;
        font-size: 14px;
        color: white;
        background-color: black;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`;

const SearchCityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
            <WeatherAppLogo src ="/icons/default.png"/>
            <CitySearchBarLabel>Search for a city:</CitySearchBarLabel>
            <CitySearchBar onSubmit={fetchWeather}>
                <input onChange={(e)=>updateCity(e.target.value)} placeholder="City" />
                <button type={"submit"}>Search</button>
            </CitySearchBar>
        </>
    );
};
export default SearchCityComponent;