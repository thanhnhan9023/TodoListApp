/* eslint-disable no-inline-comments */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

// eslint-disable-next-line no-inline-comments
Reactotron.configure({ name: 'todoList' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // add redux plugin
  .connect(); // let's connect!

export default Reactotron;
