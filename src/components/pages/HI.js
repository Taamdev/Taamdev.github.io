import * as React from "react";

import { useImage, useInfo } from "../../config/data/info";
import { Translation } from "react-i18next";

export default function HobbiesAndInterests() {
    return (
        <section id="section-06" className="section animation">
            <div className="section-body">
                <h4 className="section-title animation-translate-overline animation-item-1">
                    <Translation>
                        {
                            (t, { i18n }) => <>{t('navigation.knowledges')}</>
                        }
                    </Translation>
                </h4>
                <div className="animation-translate animation-item-2">
                    <h6 className="animation-item-2"><Translation>{(t, { i18n }) => <>{t('field')}</>}</Translation></h6>
                    <div className="row">
                        <ul className="col-md-12 col-12">
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.analytics')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.billing')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.blogging')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.carsharing')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.e_commerce')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.identity_verification')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.chat_bots')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.open_discussion_systems')}</>}</Translation></li>
                        </ul>
                        <ul className="col-md-12 col-12">
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.payment_gateway')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.product_reviews')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.product_data_management')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.realtime_messaging')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.social_authentication')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.social_networks')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.statistics')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.issue_invoices')}</>}</Translation></li>
                            <li className="list-inside line-anywhere"><Translation>{(t, { i18n }) => <>{t('personal.sending_mail')}</>}</Translation></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-2">
                <a className="section-next goto-section" href="#section-07">
                    <span className="section-next-counter">06/07</span>
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