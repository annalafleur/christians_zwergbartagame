import { Route, Routes } from "react-router-dom"

import Home from "./Home"
//import PageNotFound from "../components/blocks/PageNotFound"

const Pages = () => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    )
}

export default Pages
