import { City, Country, ICity, ICountry } from "country-state-city";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveCity, saveCountry } from "../../../entities/country/countrySlice";
import { saveWeather } from "../../../entities/weathers/weatherSlice";
import { getWeatherUseCase } from "../../../weather/useCases/getWeather";
import { DrawerActions, useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useCountry = () => {
    const [country, setCountry] = useState<{ label: string; value: ICountry; } | null>(null);
    const [countryList, setCountryList] = useState<{ label: string; value: ICountry; isoCode: string }[]>([]);
    const [city, setCity] = useState<{ label: string; value: ICity; } | null>(null);
    const [cityList, setCityList] = useState<{ label: string; value: ICity; }[] | []>([]);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    useEffect(() => {
        const countries = Country.getAllCountries().map(item => ({ label: item.name, value: item, isoCode: item.isoCode }))
        setCountryList(countries);
        getData()
    }, []);

    useEffect(() => {
        const cityes = City.getCitiesOfCountry(country?.value.isoCode || 'UA')?.map(item => ({ label: item.name, value: item }))
        if (cityes?.length) {
            setCityList(cityes)
        }
    }, [country]);

    const saveCities = async (city: ICity | undefined) => {
        try {
          const jsonValue = JSON.stringify(city);
          await AsyncStorage.setItem("city", jsonValue);
        } catch (e) {
          console.log(e);
        }
      };
   
    
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("city");
          const city = JSON.parse(value as string);
          if (city !== null) {
            saveCity(city)
           const response =  await getWeatherUseCase(city.latitude , city.longitude)
           dispatch(saveWeather(response?.data))
          }
        } catch (e) {
          console.log(e);
        }
      };

    const saveLocation = async () => {
        dispatch(saveCountry(country))
        dispatch(saveCity(city))
        const response = await getWeatherUseCase(city?.value.latitude as string, city?.value.longitude as string);
        saveCities(city?.value)


        dispatch(saveWeather(response?.data));
        if (country || city !== null) {
            navigation.dispatch(DrawerActions.closeDrawer())
        } else {
            alert('YOU HAVE NOT SELECTED A COUNTRY OR CITY!!!')
        }
    }
    return {
        countryList, country, setCountry, cityList, city, setCity, saveLocation,
    }
}