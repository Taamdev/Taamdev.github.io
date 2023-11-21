import React, { useState } from "react";

import { useImage, useInfo } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    };
    React.useEffect(() => {
        if (open) {
            
        }
    }, [open])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Window Alert
    const showAlert = () => {
        window.alert('Currently in the process of being completed, please understand!');
    };

    return (
        <section id="section-01" className="section section-sub-header animation interaction-in">
            <div className="section-body">
                <div className="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
                    <div className="avatar">
                        <img src={useImage.imgAvatar} className="jumbotron-img animation-translate animation-item-1" alt="Avatar" />
                    </div>
                    <h1 className="display-1 display-animated display-animated-in animation-translate animation-item-2">{useInfo.nameGithub}</h1>
                    <p className="lead animation-translate animation-item-3">{useInfo.position}</p>
                </div>
                <div className="pt-6 pt-lg-8 pb-0 mb-0">
                    {/* target="_blank" rel="noreferrer" */}
                    <a className="btn-slice" href="#"  onClick={showAlert}>
                        <div className="box-2">
                            <div className="btn btn-two">
                                <span>📥
                                <Translation>
                                    {
                                        (t, { i18n }) => <>{t('content.download')}</>
                                    }
                                </Translation>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-4">
                <a className="section-next goto-section" href="#section-02">
                    <span className="section-next-counter">01/07</span>
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