import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveWeather, selectWeather } from "../../entities/weathers/weatherSlice";
import { getWeatherUseCase } from "../useCases/getWeather";

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(false);

  const weather = useSelector(selectWeather)
  const weatherDay = useSelector(selectWeather)
  const dispatch = useDispatch();

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    setIsLoading(true)
    const response = await getWeatherUseCase('48.45930000', '35.03865000');
    if (response?.status === 200) {
      dispatch(saveWeather(response?.data));
    };
    setIsLoading(false);
  }
  return { isLoading, weather, saveWeather, weatherDay }



}




