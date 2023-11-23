import * as React from 'react';
import i18n from '../../translation/i18n';

import { useImage } from '../../config/data/info';

export default function Header() {
    const [translate, setTranslate] = React.useState('en');

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }
    React.useEffect(() => {
        if (translate) {
            i18n.changeLanguage(translate);
        }
    }, [translate])

    return (
        <section className="header">
            <div className="container-fluid-limited d-flex align-items-center justify-content-between">
                <a href="/resume" className="header-brand">
                    <img src={useImage.imgLogo} data-light-src={useImage.imgLogo} data-dark-src={useImage.imgLogo} alt="Your logo" />
                    <span className="header-title">Tr Ng Tam</span>
                </a>
                <div className="select-translate">
                    <select name="translate" onChange={changeLanguage} defaultValue={translate}>
                        <option value="en">
                            English
                        </option>
                        <option value="vi">
                            Vietnamese
                        </option>
                    </select>
                </div>
                <button className="sections-nav-toggler" aria-label="Toggle navigation">
                    <span className="sections-nav-toggler-bar"></span>
                    <span className="sections-nav-toggler-bar"></span>
                    <span className="sections-nav-toggler-bar"></span>
                    <span className="sections-nav-toggler-bar"></span>
                </button>
            </div>
        </section>
    );
}