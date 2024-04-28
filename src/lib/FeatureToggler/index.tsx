import * as React from "react"

type features = {
    [feature : string] : boolean | features
}

let FeatureTogglerContext = React.createContext<features>({});

export const  FeatureTogglerProvider = ({features, children}:{features : features , children:React.ReactNode}) => {
    return (
        <FeatureTogglerContext.Provider value={features}>
            {children}
        </FeatureTogglerContext.Provider>
    )
}

//return all fetures list
export const useFeaturesToggler = () => {
    return React.useContext(FeatureTogglerContext);
}

//get single feature list
export const useFeatureToggler = (name:string) =>{
    let features = useFeaturesToggler();
    //check if feature true at first level
    if(typeof features[name] === 'boolean') return features[name];

    return false
}