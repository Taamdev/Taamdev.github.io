import * as React from 'react';

import { useInfo, useImage } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Project() {
    return (
        <section id="section-05" className="section animation">
            <div className="section-body">
                <h2 className="animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.prj')}</>
                        }
                    </Translation>
                </h2>
                <div className="row animation-translate animation-item-2">
                    {/* <div className="col-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top mr-2" src={useImage.no_img} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top mb-2">
                                    Hello Activity
                                    <span className="ml-2">
                                        <a href="#" target="_blank" className="mr-2">
                                            <img src={useImage.more} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                        <a href="https://helloactivity.com/" target="_blank" >
                                            <img src={useImage.url} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text">
                                    Use PHP - HTML - CSS - JavaScript
                                    Docker - MySQL - RESTful Api
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top mr-2" src={useImage.no_img} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top mb-2">
                                    Cherish
                                    <span className="ml-2">
                                        <a href="#" target="_blank" className="mr-2">
                                            <img src={useImage.more} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                        <a href="#" target="_blank" >
                                            <img src={useImage.url} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text">
                                    Use PHP - HTML - CSS - JavaScript
                                    Docker - MySQL
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src={useImage.yotrip} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top mb-2">
                                    Yotrip Website
                                    <span>
                                        <a href="https://github.com/trngtam10d/php__booking__cars" target="_blank" >
                                            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg`} alt="card-img" width={30} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text"><b>Technologies Used:</b> PHP/Laravel, HTML/CSS, JavaScript, JQuery</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src={useImage.no_img} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top">
                                    Cake Website
                                    <span>
                                        <a href="https://github.com/trngtam10d/php__booking__cars" target="_blank" >
                                            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg`} alt="card-img" width={30} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text"><b>Technologies Used:</b> PHP, HTML/CSS, JavaScript, JQuery, PHPUnit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <img className="card-img-top" src={useImage.no_img} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top">
                                    Anime & Manga Website (Not yet complete)
                                    <span>
                                        <a href="https://github.com/trngtam10d/comic-site" target="_blank" >
                                            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg`} alt="card-img" width={30} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text"><b>Technologies Used:</b> ReactJS, TailWindCSS, Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}