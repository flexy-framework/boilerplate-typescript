import { h, Component } from 'preact';

export interface IHelloWorldProps {
    content: string;
}

export class HelloWorld extends Component<IHelloWorldProps, {}> {
    render() {
        return <div>{this.props.content}</div>
    }
}