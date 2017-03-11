import { h, render } from 'preact';
import { HelloWorld } from './component/HelloWorld';
import './jquery_hello'

render((
    <HelloWorld content="Hello World" />
), document.getElementById('app'));