import * as React from 'react';
import { Translation } from 'react-i18next';
import { useImage } from '../../config/data/info';

export default function Navbar() {
    return (
        <nav className="sections-nav-container">
            <ul id="sections-nav" className="nav sections-nav sections-nav-animated">
                <li>
                    <a href="/" className="nav-link nav-active">
                        Tr Ng Tam
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-01" className="nav-link sections-nav-link goto-section active">
                        <span className="sections-nav-counter">01</span>
                        <Translation>
                            {
                                (t, { i18n }) => <>{t('navigation.top')}</>
                            }
                        </Translation>
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-03" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">02</span>
                        <Translation>
                            {
                                (t, { i18n }) => <>{t('navigation.skill')}</>
                            }
                        </Translation>                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-04" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">03</span>
                        <Translation>
                            {
                                (t, { i18n }) => <>{t('navigation.experience')}</>
                            }
                        </Translation>
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-05" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">04</span>
                        <Translation>
                            {
                                (t, { i18n }) => <>{t('navigation.prj')}</>
                            }
                        </Translation>
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-06" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">05</span>
                        <Translation>
                            {
                                (t, { i18n }) => <>{t('navigation.knowledges')}</>
                            }
                        </Translation>
                    </a>
                </li>

            </ul>
        </nav>
    );
}
