import * as React from 'react';

import { useInfo } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function About() {
    return (
        <section id="section-02" className="section animation">
            <div className="section-body">
                <div className="row">
                    <div className="col col-xl-10">
                        <h4 className="section-title animation-translate-overline animation-item-1">
                            <Translation>
                                {
                                    (t, { i18n }) => <>{t('navigation.about')}</>
                                }
                            </Translation>
                        </h4>
                        <article className="article animation-translate animation-item-2">
                            <Translation>
                                {
                                    (t, { i18n }) => <p>{t('content.about01')}</p>
                                }
                            </Translation>
                            <Translation>
                                {
                                    (t, { i18n }) => <p>{t('content.about02')}</p>
                                }
                            </Translation>
                            <Translation>
                                {
                                    (t, { i18n }) => <p>{t('content.about03')}</p>
                                }
                            </Translation>
                            <Translation>
                                {
                                    (t, { i18n }) => <p>{t('content.about04')}</p>
                                }
                            </Translation>
                            <Translation>
                                {
                                    (t, { i18n }) => <p>{t('content.about05')}</p>
                                }
                            </Translation>
                        </article>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#section-03">
                    <span className="section-next-counter">02/07</span>
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