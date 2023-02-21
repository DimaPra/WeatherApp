import { DrawerActions, useNavigation } from "@react-navigation/native"
import React, { FC } from "react"
import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { BorgerSvg } from "../../../../assests/icon/borgerSvg"
import { styles } from "./style"

export const HeaderBar: FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <BorgerSvg />
            </TouchableOpacity>
        </View>

    )
}