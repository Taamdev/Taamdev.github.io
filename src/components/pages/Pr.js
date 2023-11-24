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
                    <div className="col-12 col-md-4 mt-2 mr-2">
                        <div className="card">
                            <img className="card-img-top" src={useImage.no_img} alt="card-img" style={{ width: "83%" }} />
                            <div className="card-body">
                                <div className="card-title h5">Hello Activity</div>
                                <p className="card-text" style={{ width: "83%" }}>
                                    Use PHP - HTML - CSS - JavaScript
                                    Docker - MySQL - RESTful Api
                                </p>
                                <div className="btn-group">
                                    <a role="button" href="#" className="btn btn-primary">More</a>
                                    <a role="button" href="https://helloactivity.com/" target="_blank" className="btn btn-primary">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-2 mr-2">
                        <div className="card">
                            <img className="card-img-top" src={useImage.no_img} alt="card-img" style={{ width: "83%" }} />
                            <div className="card-body">
                                <div className="card-title h5">Cherish</div>
                                <p className="card-text" style={{ width: "83%" }}>
                                    Use PHP - HTML - CSS - JavaScript
                                    Docker - MySQL
                                </p>
                                <div className="btn-group">
                                    <a role="button" href="#" className="btn btn-primary">More</a>
                                    <a role="button" href="#" target="_blank" className="btn btn-primary">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-2 mr-2">
                        <div className="card">
                            <img className="card-img-top" src={useImage.no_img} alt="card-img" style={{ width: "83%" }} />
                            <div className="card-body">
                                <div className="card-title h5">Yotrip</div>
                                <p className="card-text" style={{ width: "83%" }}>
                                    Use Laravel - HTML - CSS - JavaScript
                                    MySQL
                                </p>
                                <div className="btn-group">
                                    <a role="button" href="https://github.com/gokkutamu/php__booking__cars#readme" target="_blank" className="btn btn-primary">More</a>
                                    <a role="button" href="https://github.com/gokkutamu/php__booking__cars" target="_blank" className="btn btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mt-2 mr-2">
                        <div className="card">
                            <img className="card-img-top" src={useImage.no_img} alt="card-img" style={{ width: "83%" }} />
                            <div className="card-body">
                                <div className="card-title h5">Cake Website</div>
                                <p className="card-text" style={{ width: "83%" }}>E Commerce — Cake website PHP (PHPUnit , WSC , Design Partent)</p>
                                <div className="btn-group">
                                    <a role="button" href="https://github.com/gokkutamu/PHP-Web2-Ck-V1#readme" target="_blank" className="btn btn-primary">More</a>
                                    <a role="button" href="https://github.com/gokkutamu/PHP-Web2-Ck-V1" target="_blank" className="btn btn-primary">GitHub</a>
                                </div>
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
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}