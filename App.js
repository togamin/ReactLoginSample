import { createAppContainer,createStackNavigator } from 'react-navigation';
import InitialScreen from './src/screen/initialScreen';
import LoginScreen from './src/screen/LoginScreen';
import NewRegisterScreen from './src/screen/NewRegisterScreen';

const App = createStackNavigator({
  Home:{screen: InitialScreen},
  LoginScreen:{screen: LoginScreen},
  NewRegisterScreen:{screen: NewRegisterScreen},
},{
  defaultNavigationOptions:{
    //ヘッダーの文字
    headerTitle:'Navigation',
    headerTintColor:'#fff',
    //ヘッダーのスタイル
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'#333366',
    },
    //ヘッダータイトルのスタイル
    headerTitleStyle:{
      color:'#fff',
    },
  },
});

export default createAppContainer(App);
