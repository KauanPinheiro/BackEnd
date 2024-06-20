/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import CadastroScreen from './src/screens/CadastroScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CadastroScreen);
