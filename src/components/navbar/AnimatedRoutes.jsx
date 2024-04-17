import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from '../loading-screen/LoadingScreen'
const Home = lazy(() => import("../../pages/home/Home"));
const About = lazy(() => import("../../pages/about/About"));
const Experience = lazy(() => import("../../pages/experience/Experience"));
const Connect = lazy(() => import("../../pages/connect/Connect"));

const AnimatedRoutes = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </Suspense>
    )
}

export default AnimatedRoutes