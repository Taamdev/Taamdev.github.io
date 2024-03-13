import * as React from 'react';

import { useImage, useInfo } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Skills() {
    return (
        <section id="section-03" className="section animation">
            <div className="section-body">
                <h2 className="animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.skill')}</>
                        }
                    </Translation>
                </h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-md-6 pb-2">
                        <div className="lead animation-translate animation-item-3">Earning skills</div>
                        <div className="d-flex align-items-center flex-wrap ">
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg" />
                                <a href="https://www.php.net/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    PHP
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/laravel.svg" />
                                <a href="https://laravel.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Laravel
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" />
                                <a href="https://www.w3schools.com/html/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Html
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" />
                                <a href="https://www.w3schools.com/css/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    CSS
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" />
                                <a href="https://javascript.info/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    JavaScript
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jquery.svg" />
                                <a href="https://jquery.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    JQuery
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg" />
                                <a href="https://getbootstrap.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Bootstrap
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" />
                                <a href="https://www.w3schools.com/mysql/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    MySQl
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <div className="lead animation-translate animation-item-3">Learn new skills</div>
                        <div className="d-flex align-items-center flex-wrap ">
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg" />
                                <a href="https://www.typescriptlang.org/docs/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Typescript
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg" />
                                <a href="https://dev.java/learn/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Java
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" />
                                <a href="https://react.dev/learn" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    React
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" />
                                <a href="https://tailwindcss.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    TailWindCss
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graphql.svg" />
                                <a href="https://graphql.org/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    GraphQL
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" />
                                <a href="https://www.w3schools.com/mongodb/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    MongoDB
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-2 pb-2">
                        <div className="lead animation-translate animation-item-3">Tools I use</div>
                        <div className="d-flex align-items-center flex-wrap ">
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg" />
                                <a href="https://code.visualstudio.com/docs" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    VsCode
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" />
                                <a href="https://www.w3schools.com/git/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Git
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitbucket.svg" />
                                <a href="" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Bitbucket
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linux.svg" />
                                <a href="https://www.linux.org/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Linux
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg" />
                                <a href="https://www.postman.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Postman
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg" />
                                <a href="https://www.docker.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    Docker
                                </a>
                            </div>
                            <div className="d-flex align-items-center mr-6 mt-4">
                                <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/npm.svg" />
                                <a href="https://www.npmjs.com/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                    NPM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}