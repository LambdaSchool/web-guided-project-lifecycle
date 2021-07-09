import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import AppFunc from './AppFunc';
import AppClass from './AppClass';

const rootElement = document.getElementById('root');
ReactDOM.render(<AppClass />, rootElement);