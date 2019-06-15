import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import SummaryView from './views/SummaryView';
import { GetAllItems } from './redux/actions/itemActions';

export default class App extends Component {


    store = configureStore();

    componentDidMount() {
        this.store.dispatch(GetAllItems())
    }

    render() {
        return (
            <Fragment>
                <Provider store={this.store}>
                    <SummaryView />
                </Provider>
            </Fragment>
        )
    }

}