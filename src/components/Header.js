import * as React from "react";
import { useImage } from "../config/data/info";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    const [theme, setTheme] = React.useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

    function getThemeFromLocalStorage() {
        document.body.setAttribute('data-theme', theme);
        document.getElementById('header').setAttribute('data-theme', theme);
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}

	function toggleTheme() {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}

	React.useEffect(() => {
		getThemeFromLocalStorage();
	}, [theme]);

    return (
        <header className="styles_header__Nw_k8 styles_white__oNdNo" id="header">
            <a href="/" className="styles_logo__Nfwg6">
                <span className="block w-10 aspect-square overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Logo" width="50" height="50" decoding="async" src={useImage.icon} />
                </span>
                <span className="flex items-center name uppercase m-2 font-bold styles__box_shadow">
                    Mr. Tam
                </span>
            </a>
            <span></span>
            <div className="flex items-center justify-end gap-3">
                <div className="flex">
                    <button type="button" className="inline-flex button-reset">
                        <div className="inline-flex shrink-0">
                            <div className="paper styles_header_Nw_k10">
                                <DarkModeToggle darkMode={theme} handleClick={toggleTheme}/>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}