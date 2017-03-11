import * as React from 'react';

export interface IHelloWorldProps {
    content: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>{this.props.content}</div>
    }
}