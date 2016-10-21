import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { createStore } from 'redux';
import Counter from '../components/Counter'
import counter from '../reducers/index'

const store=createStore(counter);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }
  _changeState = () => {
    this.setState({value: store.getState()});
  };
  render() {
    store.subscribe(this._changeState);
    return(
      Counter(this.state.value, () => store.dispatch({type: 'INCREMENT'}), () => store.dispatch({type: 'DECREMENT'}))
    );
  }
}



export default App