import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { DropDown } from '../../modules/weather/ui/components/dropDown';
import { WeatherScreean } from '../../modules/weather/ui/WheatherScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Wether" drawerContent={() => <DropDown />}>
      <Drawer.Screen name="Weather" component={WeatherScreean} options={{ headerShown: false }} />
    </Drawer.Navigator>);
};

