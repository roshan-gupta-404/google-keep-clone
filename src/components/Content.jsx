import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import Note from './Notes'
import { KeepProvider } from '../contexts/KeepContext'

function Content() {
  const [notes, setNotes] = useState([]) // notes is an array of objects of note having id,note.

  // In the following line of code note = {title:'title',desc:'desc'} 
  // DEFINING FUNCTIONALITY OF KEEP
  const addNote = (note) => {
    setNotes((prev) => [...prev, { id: Date.now(), note }]) 
  }
  const updateNote = (id, note) => {
    setNotes((prev) => prev.map((eachNote) => eachNote.id === id ? note : eachNote))
  }
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((eachNote) => eachNote.id !== id))
  }

  // GETTING NOTES INTO LOCALSTORAGE.
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) // getItem will return a strings so we will convert it into object.
    if (notes && notes.length > 0) setNotes(notes)
  }, [])

  // SETTING NOTES FROM LOCALSTORAGE.
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes)) // Converting object into string for storing into localstorage.
  }, [notes])

  return (
    <KeepProvider value={{addNote,updateNote,deleteNote,notes}}>
      <div className='m-8 py-4 basis-2/3'>
        <CreateNote />
        <Note />
      </div>
    </KeepProvider>
  )
}

export default Content