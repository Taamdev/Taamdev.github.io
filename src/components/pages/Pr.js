import * as React from 'react';

import { useInfo, useImage } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Project() {
    return (
        <section id="section-05" className="section animation">
            <div className="section-body">
                <h4 className="section-title animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.prj')}</>
                        }
                    </Translation>
                </h4>
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
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top mr-2" src={useImage.no_img} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top mb-2">
                                    Yotrip
                                    <span className="ml-2">
                                        <a href="https://github.com/trngtam10d/php__booking__cars#readme" target="_blank" className="mr-2">
                                            <img src={useImage.more} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                        <a href="https://github.com/trngtam10d/php__booking__cars" target="_blank" >
                                            <img src={useImage.url} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text">
                                    Use Laravel - HTML - CSS - JavaScript
                                    MySQL
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top mr-2" src={useImage.no_img} alt="card-img"/>
                            <div className="card-body">
                                <div className="card-header-top mb-2">
                                    Cake Website
                                    <span className="ml-2">
                                        <a href="https://github.com/trngtam10d/PHP-Web2-Ck-V1#readme" target="_blank" className="mr-2">
                                            <img src={useImage.more} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                        <a href="https://github.com/trngtam10d/PHP-Web2-Ck-V1" target="_blank" >
                                            <img src={useImage.url} alt="card-img" width={20} className="img-box-shaw"/>
                                        </a>
                                    </span>
                                </div>
                                <p className="card-text">E Commerce — Cake website PHP (PHPUnit , WSC , Design Partent)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#section-06">
                    <span className="section-next-counter">05/07</span>
                    <span className="section-next-label">
                        <Translation>
                            {
                                (t, { i18n }) => <>{t('content.next')}</>
                            }
                        </Translation>
                    </span>
                    <span className="section-next-icon">
                        <img src={useImage.next} width={20}/>
                    </span>
                </a>
            </div>
        </section>
    );
}