import React from "react";
import { findDOMNode } from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { HelloWorld, IHelloWorldProps } from "../../src/component/HelloWorld";

describe("HelloWorld", () => {
    let handleSelectionChangeSpy: jasmine.Spy;
    beforeEach(() => {
        handleSelectionChangeSpy = jasmine.createSpy("handleSelectionChange");

        let props: IHelloWorldProps = { content: "Hello, my first test!" };
        this.component = TestUtils.renderIntoDocument(<HelloWorld {...props} />);
        this.renderedDOM = () => findDOMNode(this.component);
    });

    it("given a content passed to HelloWorld", () => {
        expect(this.renderedDOM().children.length).toEqual(0);
        expect(this.renderedDOM().textContent).toEqual("Hello, my first test!");
    });
});
