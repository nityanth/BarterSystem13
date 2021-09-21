
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions : {
      drawerIcon: <Icon name="home" type="fontawesome5"/>,
      drawerLabel: "home"
    }
    },
  MyBarters:{
      screen : MyBartersScreen,
      navigationOptions : {
        drawerIcon: <Icon name="gift" type="fontawesome5"/>,
        drawerLabel: "my donations"
      }
    },
  Notifications :{
    screen : NotificationScreen,
    navigationOptions : {
      drawerIcon: <Icon name="bell" type="fontawesome5"/>,
      drawerLabel: "notifications"
    }
  },
    Setting : {
      screen : SettingScreen,
      navigationOptions : {
        drawerIcon: <Icon name="settings" type="fontawesome5"/>,
        drawerLabel: "settings"
      }
    }
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })
