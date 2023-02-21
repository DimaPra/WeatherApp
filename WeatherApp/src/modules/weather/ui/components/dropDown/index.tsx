import React, { FC, } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "./style";
import { View, Text } from "react-native";
import { LogoSvg } from "../../../../../../assests/icon/logoSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCountry } from "../../../../UIKit/countrys/presentters/useCountry";

export const DropDown: FC = () => {
    const { countryList, country, setCountry, cityList, city, setCity, saveLocation } = useCountry()
    return (
        <View style={styles.containerDrow}>
            <View style={styles.container}>
                <LogoSvg />
                <Text style={styles.textLogo}>Weather</Text>
                <Text style={styles.Version}>Version 1.0.0</Text>
            </View>
            <View>
                <Text style={styles.textWere}>Where are you ?</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={countryList}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Choose the country"
                    searchPlaceholder="Search..."
                    value={country}
                    onChange={item => {
                    setCountry(item);
                    }}
                />
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={cityList}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Choose the city"
                    searchPlaceholder="Search..."
                    value={city}
                    onChange={item => {
                    setCity(item);
                    }}
                />
            </View>
            <TouchableOpacity onPress={() => saveLocation()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Find</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
