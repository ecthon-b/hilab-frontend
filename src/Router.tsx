import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ShowList } from './pages/ShowList'

export function Router() {
    return (
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/showlist'  element={<ShowList />}/>
            </Routes>
    )
}