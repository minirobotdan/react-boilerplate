import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from 'styled-components';
import { ExampleComponent } from "./example/example.component";

/**
 * Example global styles
 */
const GlobalStyle = createGlobalStyle`
    html { 
        font-family: dm, monospace;
        background: rgb(29, 31, 39);
    }
    body {
        color: rgba(255,255,255,0.5);
        padding: 0;
        margin: 0;
        display: grid;
        align-items: center;
        justify-items: center;
    }
`

ReactDOM.render(
        <div>
            <GlobalStyle />
            <ExampleComponent foo="SPACE Team"></ExampleComponent>
        </div>,
    document.getElementById("app-root")
);
