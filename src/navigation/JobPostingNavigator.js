import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import SignUpForCompany from '../screens/jobposting/SignUpForCompany';
import DashBoardForCompany from '../screens/jobposting/DashboardForCompany';

const Stack = createStackNavigator();
const JobPostingNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen
          name="LoginForCompany"
          component={LoginForCompany}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpForCompany"
          component={SignUpForCompany}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashBoardForCompany"
          component={DashBoardForCompany}
          options={{headerShown: false}}
        />
        
        </Stack.Navigator>
    )
}
export default JobPostingNavigator