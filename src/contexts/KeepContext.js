import { createContext, useContext } from "react";

export const KeepContext = createContext({
    // notes:[
    //     // sample note
    //     {
    //         id:Date.now(),
    //         Note:{title:'title',desc:'desc'},
    //     }
    // ],
    addNote: (note) => { },
    updateNote: (id, note) => { },
    deleteNote: (id) => { },
    // toggleComplete: (id) => { },
})

export const useKeep = () => {
    return useContext(KeepContext)
}

export const KeepProvider = KeepContext.Provider