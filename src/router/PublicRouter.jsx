import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Category, ConditionalRendering, Events, Home, Item, NotFound, Memo } from '../pages'
import { NavBar } from '../components'

export const PublicRouter = () => {

    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/item/:id" element={<Item />}/>
                <Route exact path="/category/:id" element={<Category />}/>
                <Route exact path="/events" element={<Events />}/>
                <Route exact path="/memo" element={<Memo />}/>
                <Route exact path="/conditional/rendering" element={<ConditionalRendering componentType=""/>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    )

}