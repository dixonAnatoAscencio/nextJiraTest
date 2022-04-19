import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description:'Pendiente: spol add astras asdd loasñd añpeodm kskae ññoppre ñlorem apsum ',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description:'En-Progreso: Lorem ipsum dolor sit, adipisicing elit. Non culpa beatae incidunt iusto. Odit accusantium fuga dolores nisi neque placea ',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },  {
            _id: uuidv4(),
            description:'Finalizadas:  lorem sada  dmasim  justig bonmren nsad noaekmr ndasond  maskdmla dnikoasndl ',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ],
}


export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

    const addNewEntry = (description: string) => {
       
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    const updateEntry = ( entry: Entry) => {

        dispatch( {type: '[Entry] Entry-Updated', payload: entry} )
    }


    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
           addNewEntry,
           updateEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};