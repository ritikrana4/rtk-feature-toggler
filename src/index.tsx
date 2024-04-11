import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import App from "./app";
import React from "react";

const root = document.getElementById('root') as HTMLElement;
const reactElement = createRoot(root);

reactElement.render(
<StrictMode>
    <App/>
</StrictMode>
)