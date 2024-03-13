import * as React from 'react';

import Navbar from './layouts/navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './layouts/header';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Project from './pages/Pr';
import HobbiesAndInterests from './pages/HI';

export default function Base() {
    return (
        <React.Suspense fallback="loading">
            <div className="container-fluid-limited">
                <Header />
                <Navbar />
                <main className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-xl-9">
                                <Home />
                                <Skills />
                                <Experiences />
                                <Project />
                                <HobbiesAndInterests />
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-3 px-2 border-top">
                    <div className="container-fluid-limited d-flex align-items-center justify-content-center">
                        <div>
                            Build with ❤️ by @trngtam10d
                        </div>
                    </div>
                </footer>
            </div>
        </React.Suspense>
    );
}