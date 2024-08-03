import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './page/HomePage';
import About from './page/About';
import Service from './page/Service';
import TeamPage from './page/TeamPage';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/link" element={<TeamPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default AppRouter
