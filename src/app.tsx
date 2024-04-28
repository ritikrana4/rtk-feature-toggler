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