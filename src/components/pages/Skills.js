import * as React from 'react';

import { useImage, useInfo } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Skills() {
    return (
        <section id="section-03" className="section animation">
            <div className="section-body">
                <h2 className="section-title animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.skill')}</>
                        }
                    </Translation>
                </h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-6 col-md-3">
                        <p className="lead animation-translate animation-item-3">Languages</p>
                        <p className="card-img">
                            <img src={useImage.php} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.html5} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.css3} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.java_script} alt="Avatar" width={100}/>
                        </p>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="lead animation-translate animation-item-3">Frameworks</p>
                        <p className="card-img">
                            <img src={useImage.laravel} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.bootstrap} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.jquery} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.react} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.tailwind_css} alt="Avatar" width={100}/>
                        </p>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="lead animation-translate animation-item-3">Databases</p>
                        <p className="card-img">
                            <img src={useImage.mysql} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.mongodb} alt="Avatar" width={100}/>
                        </p>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="lead animation-translate animation-item-3">Tools</p>
                        <p className="card-img">
                            <img src={useImage.git} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.linux} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.postman} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.docker} alt="Avatar" width={100}/>
                        </p>
                        <p className="card-img">
                            <img src={useImage.npm} alt="Avatar" width={100}/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#section-04">
                    <span className="section-next-counter">03/07</span>
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