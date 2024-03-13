import * as React from 'react';

import { useImage, useInfo } from '../../config/data/info';
import { Translation } from 'react-i18next';

export default function Experiences() {
    return (
        <section id="section-04" className="section animation">
            <div className="section-body">
                <h2 className="animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.experience')}</>
                        }
                    </Translation>
                </h2>
                <div className="timeline timeline-animated">
                    <div className="timeline-item">
                        <span className="timeline-date">2022&nbsp;–&nbsp;
                            <Translation>
                                {
                                    (t, { i18n }) => <>{t('content.now')}</>
                                }
                            </Translation>
                        </span>
                        <h3 className="timeline-title">Wacontre Co.,Ltd</h3>
                        <p className="timeline-text">Junior Developer</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-date">2021&nbsp;–&nbsp;2022</span>
                        <h3 className="timeline-title">ONICORN MEDIA.,JSC</h3>
                        <p className="timeline-text">Intern Developer</p>
                        <p className="timeline-text">Team leader (2 - 5 member)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}