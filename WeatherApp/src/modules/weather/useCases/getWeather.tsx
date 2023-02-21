import Axios from "axios"

export const getWeatherUseCase = async (latitude:string, longitude:string) => {
    
    const API_KEY = 'c1521ad3a169bd68f417c3b770f9b5d7'
    try {
        const config = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        };
        const response = await Axios(config);
        return { data: response.data, status: response.status}
    } catch (error) {
        console.log(error);
    };
    
};
