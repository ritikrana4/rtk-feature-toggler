import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import App from "./app";
import React from "react";
import { FeatureTogglerProvider } from "./lib/FeatureToggler";

const root = document.getElementById('root') as HTMLElement;
const reactElement = createRoot(root);
let paiduser : boolean =true;
reactElement.render(
<StrictMode>
<FeatureTogglerProvider  features={{"navbar":true,"menu":true,"dashboard":false,"prodashboard":paiduser}}>
    <App/>
</FeatureTogglerProvider>
</StrictMode>
)