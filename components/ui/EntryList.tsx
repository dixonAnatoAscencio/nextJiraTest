import { Paper, List } from "@mui/material"
import { DragEvent, FC, useContext, useMemo } from "react"

import { EntriesContext } from "../../context/entries"
import { UIContext } from "../../context/ui/UIContext"

import { EntryStatus } from "../../interfaces"
import { EntryCard } from "./"

import styles from './EntryList.module.css'


interface Props {
    status: EntryStatus
}


export const EntryList: FC<Props> = ({status}) => {
  
   const { entries, updateEntry } = useContext( EntriesContext)
   const { isDragging, endDragging } = useContext( UIContext )


   const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status), [ entries] )


   const allowDrop = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()
   }

   const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
   const id = event.dataTransfer.getData('text')

   const entry = entries.find( e => e._id === id)!
   entry.status = status
   updateEntry( entry )
   endDragging()
  }    


  return (
    <div
      //todo: aqui haremos drop
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
      className={ isDragging ? styles.dragging : ''}
    >
        <Paper sx={{ height: 'calc(100vh - 200px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>

            {/* cambiara si hacemos drag o no */}
            <List sx={{ opacity: isDragging  ? 0.3 : 1, transition: 'all .3s'}}>
              {
                entriesByStatus.map( entry => (
                  <EntryCard key={entry._id} entry={ entry }/>
                  
                  ))
                }
              

            </List>
  
        </Paper>
    </div>
  )
}
