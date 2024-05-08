import * as React from "react";
import { useImage } from "../config/data/info";

export default function Main() {
    return (
        <React.Suspense fallback="loading">
            <div className="container-fluid-limited">
                <main className="content">
                    <div className="d-flex flex-sm-wrap">
                        <img
                            src={useImage.imgAvatar}
                            className="jumbotron-img"
                            alt="Avatar"
                        />
                        <div className="nav-01 ml-sm-2">
                            <h4>Tran Ngoc Tam</h4>
                            <b>Backend/FrontEnd</b>

                            <div className="social-menu my-2">
                                <li>
                                    <a href="https://www.facebook.com/tam.ngoc.5648/" target="_blank" className="mr-2">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/trngtam10d" target="_blank" className="mr-2">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/tam001/" target="_blank" className="mr-2">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ngoc.tam.2303/" target="_blank" className="mr-2">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:ngoctam2303001@gmail.com, tngoctam2303001@gmail.com" target="_blank" className="mr-2">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+84909762942" target="_blank" className="mr-2">
                                        <i className="fa fa-phone"></i>
                                    </a>
                                </li>
                            </div>
                            <a href="https://www.topcv.vn/xem-cv/UwcEDQJXB1NSBwAABlRXB1IJDFMFBg4HCFIAUQ7bf4" className="download" target="_blank">
                                <div className="left">
                                    <i className="fa fa-arrow-down fa-1x"></i>
                                    <i className="fa fa-cloud fa-2x"></i>
                                </div>
                                <div className="right">
                                    <h5>Download</h5>
                                </div>
                            </a>
                        </div>
                    </div>

                    <section className="summary py-2">
                        <div className="label text-uppercase" style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                            Summary
                        </div>
                        <p className="mt-1">
                            <li>
                                👋 Hi! I'm a PHP developer who is enthusiastic about exploring new technologies.
                            </li>
                            <li>
                                My skills include web application development, performance optimization, and security.
                            </li>
                            <li>
                                Ready to contribute solid PHP skills to your team.
                            </li>
                        </p>
                    </section>

                    <section className="skill py-2 border-top">
                        <div className="label text-uppercase" style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                            Technical Skills
                        </div>
                        <div className="d-flex flex-row justify-content-between justify-content-between flex-sm-wrap flex-md-wrap ">
                            <div className="card01 mr-6">
                                <div className="mt-1" style={{ fontSize: "1em", fontWeight: "bold" }}>Technologies</div>
                                <li>
                                    <a href="https://www.php.net/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        PHP
                                    </a>
                                </li>
                                <li>
                                    <a href="https://laravel.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Laravel
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/html/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        HTML
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/css/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        CSS
                                    </a>
                                </li>
                                <li>
                                    <a href="https://javascript.info/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        JavaScript
                                    </a>
                                </li>
                                <li>
                                    <a href="https://jquery.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        JQuery
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/mysql/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        MySQl
                                    </a>
                                </li>
                            </div>
                            <div className="card02 mr-6">
                                <div className="mt-1" style={{ fontSize: "1em", fontWeight: "bold" }}>Tools I use</div>
                                <li>
                                    <a href="https://code.visualstudio.com/docs" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        VsCode
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/git/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Git
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Bitbucket
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linux.org/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Linux
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.postman.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Postman
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.docker.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Docker
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.npmjs.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        NPM
                                    </a>
                                </li>
                            </div>
                            <div className="card03 mr-6">
                                <div className="mt-1" style={{ fontSize: "1em", fontWeight: "bold" }}>Learn new skills</div>
                                <li>
                                    <a href="https://www.typescriptlang.org/docs/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        Typescript
                                    </a>
                                </li>
                                <li>
                                    <a href="https://react.dev/learn" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        React
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        TailWind
                                    </a>
                                </li>
                                <li>
                                    <a href="https://graphql.org/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        GraphQL
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.w3schools.com/mongodb/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                        MongoDB
                                    </a>
                                </li>
                            </div>
                        </div>
                    </section>

                    <section className="project py-2 border-top">
                        <div className="label text-uppercase" style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                            Personal Project
                        </div>
                        <div className="project-list mt-2">
                            <li><a href="https://github.com/trngtam10d/php__booking__cars" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Booking Cars (Laravel with HTML/CSS/JS)</a></li>
                            <li><a href="https://github.com/trngtam10d/PHP-Web2-Ck-V1" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Sell Cakes (PHP, PHPUnit, HTML/CSS/JS)</a></li>
                            <li><a href="https://github.com/trngtam10d/comic-site" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Watch Anime & Manga (React with Web API, TailWindCss)</a></li>
                        </div>
                        {/* Small */}
                        <div className="text-uppercase" style={{ fontSize: "1em", fontWeight: "bold" }}>
                            Docker Laravel
                        </div>
                        <div className="project-list">
                            <li><a href="https://github.com/trngtam10d/laravel-voyager-docker" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Github - trngtam10d/laravel-voyager-docker</a></li>
                            <li><a href="https://github.com/trngtam10d/laravel_docker_compose" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Github - trngtam10d/laravel_docker_compose</a></li>
                        </div>
                    </section>

                    <section className="work py-2 border-top">
                        <div className="label text-uppercase pb-2" style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                            Work experience
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <span className="timeline-date">2022&nbsp;–&nbsp;
                                    Now
                                </span>
                                <div className="timeline-title">Wacontre Co.,Ltd</div>
                                <p className="timeline-text">Junior Developer</p>
                            </div>
                            <div className="timeline-item">
                                <span className="timeline-date">2021&nbsp;–&nbsp;2022</span>
                                <div className="timeline-title">ONICORN MEDIA.,JSC</div>
                                <p className="timeline-text">Intern Developer</p>
                                <p className="timeline-text">Team leader (2 - 5 member)</p>
                            </div>
                        </div>
                    </section>

                    <section className="note py-2 border-top">
                        <div className="label text-uppercase" style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                            Note Document
                        </div>
                        <div className="project-list mt-2">
                            <li><a href="https://designpatternsphp.readthedocs.io/en/latest/" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Design Patterns in PHP</a></li>
                            <li><a href="https://www.mindtwo.com/guidelines/coding/laravel#embracing-domain--driven-design" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">Laravel Coding Guidelines</a></li>
                            <li><a href="https://portswigger.net/web-security/all-topics" className="cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">All topics Security</a></li>
                        </div>
                    </section>
                </main>

                <footer className="py-3 border-top">
                    <div>Build with ❤️ by <a href="https://github.com/trngtam10d" target="_blank">trngtam10d</a></div>
                </footer>
            </div>
        </React.Suspense>
    );
}
