import { h, render } from "preact";
import { HelloWorld, IHelloWorldProps } from "../../src/component/HelloWorld";

describe("HelloWorld", () => {
    let temp: any;

    let handleSelectionChangeSpy: jasmine.Spy;
    beforeEach(() => {
        handleSelectionChangeSpy = jasmine.createSpy("handleSelectionChange");

        let props: IHelloWorldProps = { content: "Hello, my first test!" };
        this.component = render(<HelloWorld {...props} />, temp);
        this.renderedDOM = () => this.component.getDOMNode();
    });

    it("given a content passed to HelloWorld", () => {
        expect(this.renderedDOM().children.length).toEqual(0);
        expect(this.renderedDOM().textContent).toEqual("Hello, my first test!");
    });
});
