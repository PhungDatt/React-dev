import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen  from './src/Screens/SearchScreen';
import MapScreen from './src/Screens/MapScreen';
import NewsScreen from './src/Screens/NewsScreen';
import VideoScreen from './src/Screens/VideoScreen';
import FoodScreen from './src/Screens/FoodScreen';
import HotelScreen from './src/Screens/HotelScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import {  BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

 function App() {


  return (
    <NavigationContainer>

<Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color: '#003664', size: 20 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
        <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map-search" size={size} color={color} />;
          },
        }}
      />
          <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="youtube" size={size} color={color} />;
          },
        }}
        />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="newspaper" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="food" size={size} color={color} />;
          },
        }}
      />
         <Tab.Screen
        name="Hotel"
        component={Hotel}
        options={{
          tabBarLabel: 'Hotel',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="bed" size={size} color={color} />
            ;
          },
        }}
      />



    </Tab.Navigator>
      
   </NavigationContainer>

  );
}
export default App;

// cretate Home 
function Home() {
  return (
    <View style={styles.container}>
  

 <Text style={styles.title}>HOME</Text>
 <HomeScreen />
  
   
    </View>
  );
}

// Create Map
function Map() {
  return(
    <MapScreen />
  )
}

// Create Search
function Search() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>SEARCH</Text>
    <SearchScreen />
    </View>
  );
}
function Video(){
  return(

    <View style={styles.container}>
  <Text style={styles.title}>VIDEO</Text>

    <VideoScreen />
    </View>
  )
}
function News(){
  return(
    <View style={styles.container}>

    <Text style={styles.title}>NEW</Text>
    <NewsScreen />
    
    </View>

  )
}
function Food (){
  return(
    <View style={styles.container}>

    <Text style={styles.title}>FOOD</Text>
    <FoodScreen />
    </View>

  )
}
function Hotel (){
  return(
    <View style={styles.container}>

    <Text style={styles.title}>HOTEL</Text>
    <HotelScreen />

    </View>

  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  image:{
    flex:1,

  },

  title:{
    width: '90%',
    height: 35,
    marginLeft: '5%',
    marginTop:35,
    marginBottom:5,
    paddingLeft: 25,
    padding: 5,
    fontSize:18, 
    color: '#003664',
    backgroundColor: '#fff'
    

  }


});
