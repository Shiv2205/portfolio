import { createContext, useState } from 'react';

const AppContext = createContext({
    project: null,
    loadProject: function(projectData) {}
});

export function ProviderWrapper(props){
    const [projects, setProjects] = useState();

    function updateProjects(projectData){
        setProjects(projectData);
    }

    const context = {
        project: projects,
        loadProject: updateProjects,
    };

    return (
    <AppContext.Provider value={context}>
        { props.children }
    </AppContext.Provider>
    );
    
}

export default AppContext