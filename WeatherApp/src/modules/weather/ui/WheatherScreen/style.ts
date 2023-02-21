import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#4169E1',
        paddingHorizontal:10,
        paddingVertical:10,
    },
    containerStats: {
        alignItems: 'center',
    },
    containerWeather: {
        alignItems: 'center',
        alignContent: 'center',
    },
    cityName: {
        fontSize: 35,
        color: '#fff'
    },
    main: {
        marginTop: 15,
        fontSize: 20,
        color: '#fff'
    },
    weatherIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200,
        minHeight: 150,
        
    },
    containerTemp: {
        alignItems: 'center',
    },
    temp: {
        color: '#fff',
        fontSize: 50
    },
    temp_max: {
        fontSize: 15,
        color: '#fff'
    },
    temp_min: {
        fontSize: 15,
        color: '#fff'

    },
    infoImg: {
        width: 35,
        height: 35,
        tintColor: '#fff',
        marginBottom: 5,

    },
    tempInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,


    },
    tempInfor: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4682B4',
        width: Dimensions.get('screen').width / 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },

})





