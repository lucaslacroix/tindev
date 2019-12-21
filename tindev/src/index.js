/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

import Routes from './routes';

function App() {
    return (
        <Routes />
    );
}

export default App;
