import React, { FC } from "react"
import { View, Text, Image, } from "react-native"
import FastImage from "react-native-fast-image"
import { SafeAreaView } from "react-native-safe-area-context"
import { HeaderBar } from "../../../UIKit/headerBar"
import { useWeather } from "../../presenters/useWeather"
import { styles } from "./style"

export const WeatherScreean: FC = () => {
    const { weather } = useWeather()
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar />
            <View style={styles.containerStats}>
                <Text style={styles.cityName}>{weather?.name}</Text>
                <Text style={styles.main}>{weather?.weather?.[0].main}</Text>
            </View>
            <View style={styles.containerWeather}>
                <FastImage
                    style={styles.weatherIcon}
                    source={{ uri: `http://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@4x.png` }}
                />
                <View style={styles.containerTemp}>
                    <Text style={styles.temp}>{Math.round(weather?.main?.temp)}°</Text>
                </View>
            </View>
            <View style={styles.tempInfo}>
                <View style={styles.tempInfor}>
                    <Image
                        source={require('../../../../../assests/image/temperature.png')}
                        style={styles.infoImg} />
                    <Text style={styles.temp_min}>Min : {Math.round(weather?.main?.temp_min)}°</Text>
                    <Text style={styles.temp_max}>Max : {Math.round(weather?.main?.temp_max)}°</Text>
                </View>
                <View style={styles.tempInfor}>
                    <Image
                        source={require('../../../../../assests/image/wind.png')}
                        style={styles.infoImg} />
                    <Text style={styles.temp_min}>deg: {weather?.wind?.deg}°</Text>
                    <Text style={styles.temp_max}>speed: {weather?.wind?.speed}m\s</Text>
                </View>
                <View style={styles.tempInfor}>
                    <Image
                        source={require('../../../../../assests/image/visibility.png')}
                        style={styles.infoImg} />
                    <Text style={styles.temp_min}>Visibility: {weather?.visibility}m</Text>

                </View>
                <View style={styles.tempInfor}>
                    <Image
                        source={require('../../../../../assests/image/humidity.png')}
                        style={styles.infoImg} />
                    <Text style={styles.temp_min}>Humidity:  {weather?.main?.humidity}%</Text>
                </View>

            </View>
        </SafeAreaView>



    )
}