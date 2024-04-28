# Simple Approach for showing features based on Flag
> ### Feature flags for React with hooks and Context Provider

## How to Use It

Import the `FeatureTogglerProvider` in your code and wrap your application around it.

```tsx
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
```

Use the `useFeatureToggler` and `useFeaturesToggler` to switch feature across app

```tsx
import React from "react";
import { useFeatureToggler, useFeaturesToggler } from "./lib/FeatureToggler";

const App = () : React.ReactElement => {
    const allFeatures = useFeaturesToggler()
    const isShowDashboard = useFeatureToggler('dashboard'); 
    return(
        <div>
            {allFeatures?.navbar && <div>
                This is Navbar
            </div>}
            {allFeatures?.menu &&<div>
                This is menu
            </div>}

           {isShowDashboard &&  <div>
                This is your dashboard
            </div>}
        </div>
    )
}

export default App;
```
