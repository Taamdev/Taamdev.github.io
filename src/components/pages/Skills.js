import * as React from 'react';

import { useImage, useInfo } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Skills() {
    return (
        <section id="section-03" className="section animation">
            <div className="section-body">
                <h4 className="section-title animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.skill')}</>
                        }
                    </Translation>
                </h4>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-md-6 pb-2">
                        <p className="lead animation-translate animation-item-3">Earning skills</p>
                        <img className="mr-1 mt-2" src={useImage.php} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.laravel} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.html5} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.css3} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.java_script} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.jquery} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.bootstrap} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.mysql} alt="Avatar" width={50}/>
                    </div>
                    <div className="col-12 col-md-6 pb-2">
                        <p className="lead animation-translate animation-item-3">Learn new skills</p>
                        <img className="mr-1 mt-2" src={useImage.typescript} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.java} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.react} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.tailwind_css} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.graphql} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.mongodb} alt="Avatar" width={50}/>
                    </div>
                    <div className="col-12 col-md-6 pt-2 pb-2">
                        <p className="lead animation-translate animation-item-3">Tools I use</p>
                        <img className="mr-1 mt-2" src={useImage.vscode} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.slack} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.git} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.sourcetree} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.linux} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.postman} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.docker} alt="Avatar" width={50}/>
                        <img className="mr-1 mt-2" src={useImage.npm} alt="Avatar" width={50}/>
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
                    <span className="section-next-icon">
                        <img src={useImage.next} width={20}/>
                    </span>
                </a>
            </div>
        </section>
    );
}