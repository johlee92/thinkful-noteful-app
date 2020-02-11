import React from 'react'

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  deleteNote: () => {},
  setFolder: () => {},
  setNote: () => {},
  dataFetch: () => {},
  pushLinkRefresh: () => {},
})

export default NotefulContext