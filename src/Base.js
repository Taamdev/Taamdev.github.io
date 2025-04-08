import * as React from "react";
import { useImage } from "./config/data/info";
import Header from "./components/Header";
import TabHome from "./components/TabHome";

export default function Base() {
    const [activeTab, setActiveTab] = React.useState('Home'); // Example state
    
    const handleClick = (event, tabName) => {
        event.preventDefault(); // Prevent default link behavior if needed
        setActiveTab(tabName);
    };

    return (
        <React.Suspense fallback="loading">
            <div>
                <Header />
                <div className="styles_clearfix__xe71d"></div>

                <div className="relative mx-auto w-full border-base-border bg-base-background pb-6 md:pb-12 styles_layout__mDbZ7">
                    <div className="styles_banner__MiCog overflow-hidden pt-[27%] min-h-[160px] max-h-[300px] bg-cover bg-no-repeat bg-center bg-base-background"></div>
                    <div className="flex justify-between items-start w-full px-4 md:px-12 relative mb-8">
                        <div className="flex mt-[-60px] md:mt-[-80px] md:pr-[408px] min-w-0 grow flex-col space-y-4">
                            <div className="w-[120px] h-[120px] md:w-40 md:h-40 rounded-2xl bg-muted-background border-2 border-base-background bg-cover bg-no-repeat bg-center bg-base-background styles_avatar"></div>
                            <h1 className="inline-flex items-center space-x-1 text-base-text text-[24px]/[32px] font-bold">
                                <span className="styles__box_shadow">Tran Ngoc Tam</span>
                            </h1>
                            <div className="flex items-start flex-col space-y-2">
                                <div className="flex flex-row space-x-2 styles_icon">
                                    <a href="https://www.facebook.com/tam.ngoc.5648/" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://github.com/tamtocode" target="_blank">
                                        <i className="fa fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/tam001/" target="_blank">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="mailto:ngoctam2303001@gmail.com, tngoctam2303001@gmail.com" target="_blank">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                    <a href="tel:+84909762942"><i className="fa fa-phone"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex styles_nav__w1QmS sticky z-1 bg-base-background border-b border-base-border w-full px-4 md:px-12 flex-row space-x-4">
                        <a href="#about" onClick={(e) => handleClick(e, 'Home')}  className={`flex items-center justify-center py-3 border-b-2 text-sm leading-none font-semibold transition-colors duration-200 ${
                            activeTab === 'Home'
                                ? 'border-current text-base-text' // Active styles
                                : 'border-transparent text-base-text-muted hover:text-base-text' // Inactive styles
                            }`}>
                            <span className="flex items-center flex-row space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>
                                <span>Home</span>
                            </span>
                        </a>
                        <a href="#"
                            onClick={(e) => handleClick(e, 'About')}
                            className={`flex items-center justify-center py-3 border-b-2 text-sm leading-none font-semibold transition-colors duration-200 ${
                            activeTab === 'About'
                                ? 'border-current text-base-text' // Active styles
                                : 'border-transparent text-base-text-muted hover:text-base-text' // Inactive styles
                            }`}
                        >
                            <span className="flex items-center flex-row space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256"><path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path></svg>
                                <span>About</span>
                            </span>
                        </a>
                    </nav>
                    <div className="styles_content__L7uMN overflow-hidden">
                        {activeTab === 'Home' ? (
                            <TabHome />
                        ) : (
                            <div className="px-4 md:px-12 py-6 md:pt-12">
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Suspense>
    );
}