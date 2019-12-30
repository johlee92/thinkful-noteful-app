import React from 'react'

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  deleteNote: () => {},
  setFolder: () => {},
  setNote: () => {},
})

export default NotefulContext