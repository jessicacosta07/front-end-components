import React, { createContext, useState } from 'react';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {

    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = () =>{

    }

    const contextValue = {
        githubState,
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;