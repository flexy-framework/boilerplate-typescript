import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorld } from './component/HelloWorld';
import './jquery_hello'

ReactDOM.render((
    <HelloWorld content="Hello World" />
), document.getElementById('app'));