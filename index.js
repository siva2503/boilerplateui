import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('boilerplateui', () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication('boilerplateui', { rootTag: document.getElementById('react-root') });
  }
