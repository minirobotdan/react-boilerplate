import * as React from 'react'
import { Component } from "react";
import styled from 'styled-components';

// Always declare props interfaces. Export them so other components have visibility of their API.
export interface ExampleComponentProps {
    foo: string
}

// Always declare component state. Doesn't need exporting as this is encapsulated.
interface ExampleComponentState {
    counter: number
    somethingElse: string
}

/*  
    The styled-components library is a great way to apply styles to components, it basically creates 
    thin high order components around your templates. 

    POTENTIAL GOTCHA: When writing tests for non trivial components, you may need to use "dive()" to drill through these wrapper components to test DOM changes.
*/
const ExampleWrapper = styled.div`
    h1 {
        font-weight: normal;
    }

    button {
        width: 100%;
        padding: 10px;
        font-size: 1.25em;
        color: rgba(255,255,255,0.5);
        border: 1px solid color: rgba(255,255,255,0.5);
        background: none;
        cursor: pointer;
        outline: none;
    }
`;

export class ExampleComponent extends Component<ExampleComponentProps, ExampleComponentState> {
    
    constructor(props: any) {
        super(props);
        // This is the only time it's safe to directly set the state! Otherwise use this.setState().
        this.state = {
            counter: 0,
            somethingElse: 'bar'
        };
    }

    /**
     * Updates the counter property of state when triggered from a mouse click.
     * @param event 
     */
    private doSomethingStateful(event: React.MouseEvent): void {

        const couldBeObjectOrNull: any = null;
        // Destructuring state this way is essentially a safe, shorthand way of executing "Object.clone({}, this.state)". Always clone your state!
        const newState = {
            ...this.state,
            counter: (this.state.counter + 1),
             // BONUS: It also safely ignores null properties!
             ...couldBeObjectOrNull
        }

        this.setState(newState);
    }

    public render() {

        // Object destructuring is great for referencing props and state in templates too.
        const { foo } = this.props;
        const { counter } = this.state;

        return (
            <ExampleWrapper>
                <h1>{`Hello, ${foo}!`}</h1>
                <button onClick={this.doSomethingStateful.bind(this)}>Count: {counter}</button>
            </ExampleWrapper>
        )
    }
}