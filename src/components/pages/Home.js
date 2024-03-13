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
                <div className="pt-6 pb-0 mb-0">
                    <div className="avatar">
                        <img src={useImage.imgAvatar} className="jumbotron-img animation-translate animation-item-1" alt="Avatar" />
                        <div className="display-4 display-animated display-animated-in animation-translate animation-item-2">
                            {useInfo.nameGithub}
                            <div className="lead animation-translate animation-item-3">{useInfo.position}</div>
                        </div>
                    </div>

                    <article className="article animation-translate animation-item-4">
                        <Translation>
                            {
                                (t, { i18n }) => <p>{t('content.about01')}</p>
                            }
                        </Translation>
                    </article>

                    <div className="d-icon d-flex align-items-center animation-translate">
                        <div className="d-flex align-items-center mr-6 mt-4">
                            <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg" />
                            <a href="https://www.facebook.com/tam.ngoc.5648/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </div>
                        <div className="d-flex align-items-center mr-6 mt-4">
                            <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" />
                            <a href="https://www.instagram.com/ngoc.tam.2303/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </div>
                        <div className="d-flex align-items-center mr-6 mt-4">
                            <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
                            <a href="https://www.linkedin.com/in/tam001/" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                Linkedin
                            </a>
                        </div>
                        <div className="d-flex align-items-center mr-6 mt-4">
                            <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                            <a href="https://github.com/trngtam10d" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <div className="d-flex align-items-center mr-6 mt-4">
                            <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mail-dot-ru.svg" />
                            <a href="mailto:ngoctam2303001@gmail.com" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                E-mail
                            </a>
                        </div>
                        <div className="d-flex align-items-center mr-6 mt-4">
                            <img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@11.7.0/icons/quicklook.svg" />
                            <a href="" className="ml-2 cm-link whitespace-no-wrap" target="_blank" rel="noopener noreferrer">
                                Quick Look
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}