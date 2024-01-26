
import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
function App() {

  const [notes,setNotes]= useState([]);



  function addNote(newNote){
    console.log(newNote);
    setNotes(prevNotes=>{
      return [...prevNotes,newNote];
    })
  }

  function deleteNote(id){
      setNotes(prevNotes=>{
        return prevNotes.filter((note,index)=>{
            return index !== id;
        })
      })
  }
  return (
    <div className="App">
      <CreateArea onAdd={addNote}/>
    {
    notes.map((note,index) => {
       return  <Note 
              key={index}
              id={index}
       title={note.title} content = {note.content} onDelete={deleteNote} />
     })
    }
    </div>
  );
}

export default App;
