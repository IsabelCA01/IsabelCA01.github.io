import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Front_Page from "../../pages/front_page";

const Routespe = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Front_Page />} />
            </Routes>
        </Router>
    );
};

export default Routespe;
