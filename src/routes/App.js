import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './home/HomePage'
import { NewPage } from '../routes/new/NewPage'
import { EditPage } from '../routes/edit/EditPage'


function App() {

return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/new" element={<NewPage />}/>
            <Route path="/edit/:id" element={<EditPage />}/>
            <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
    </HashRouter>
    )
}
export default App
