import { View, Text } from "react-native";
import React from "react";
import Splash from "../screens/onboarding/Splash";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import JobPostingNavigator from "./JobPostingNavigator";
import JobSearchingNavigator from "./JobSearchingNavigator";
import DashBoardForCompany from "../screens/jobposting/DashboardForCompany";
import SelectUser from "../screens/onboarding/SelectUser";
import AddJob from "../screens/jobposting/tabs/AddJob";
import SearchCandidates from "../screens/jobposting/tabs/SearchCandidates";
import EditJob from "../screens/jobposting/tabs/EditJob";
import SuggestedJobs from "../screens/jobposting/tabs/SuggestedJobs";
import SuggestedAll from "../screens/jobposting/tabs/SuggestedAll";
import JobDetail from "../screens/jobposting/tabs/JobDetail";
import JobDetails from "../screens/jobposting/tabs/JobDetails";
import Welcome from "../screens/jobposting/tabs/Welcome";
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DashBoardForCompany"
          component={DashBoardForCompany}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchCandidates"
          component={SearchCandidates}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddJob"
          component={AddJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditJob"
          component={EditJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectUser"
          component={SelectUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobPostingNavigator"
          component={JobPostingNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobSearchingNavigator"
          component={JobSearchingNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuggestedJobs"
          component={SuggestedJobs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuggestedAll"
          component={SuggestedAll}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
