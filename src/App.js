import React, {Component} from 'react';
import NumberScreen from './NumberScreen'
import {Provider} from 'react-redux'
import ConfigureStore from './ConfigureStore'

type Props = {};
export default class App extends Component<Props> {
    render() {
        const store = ConfigureStore()
        return (
            <Provider store={store}>
                <NumberScreen/>
            </Provider>
        );
    }
}
