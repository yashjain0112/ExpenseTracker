import React from "react";
import ReactDOM from "react-dom";
import {SpeechProvider} from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css"

ReactDOM.render(
    <SpeechProvider appId="e8402eea-6ae7-4897-9eb9-e7b91c805b36" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
document.getElementById("root")
);