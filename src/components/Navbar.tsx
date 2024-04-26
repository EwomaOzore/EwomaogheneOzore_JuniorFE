/** @format */
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;
};

const navItems: NavItem[] = [
    {
        label: "Home",
        link: "/home",
    },
    {
        label: "About",
        link: "/about",
    },
    {
        label: "Contact",
        link: "/contact",
    },
];

const Navbar = () => {
    const [isSideMenuOpen, setSideMenue] = useState(false);
    function openSideMenu() {
        setSideMenue(true);
    }
    function closeSideMenu() {
        setSideMenue(false);
    }

    return (
        <div className="flex w-full justify-between px-4 py-5">
            <section className="flex items-center gap-10">
                <h1 className="flex-shrink-0 text-white font-extrabold lg:ml-[40%] lg:mr-[20%] text-4xl">SpaceX</h1>
                {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
                <div className="hidden md:flex items-center gap-20 px-[120px] transition-all">
                    {navItems.map((d, i) => (
                        <a
                            key={i}
                            href={d.link ?? "#"}
                            className="relative px-2 py-3 transition-all"
                        >
                            <p className="flex cursor-pointer items-center text-[20px] font-medium text-[#E6E6E6] group-hover:text-[#006A3C]">
                                <span>{d.label}</span>
                            </p>

                            {/* dropdown */}
                            {d.children && (
                                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                                    {d.children.map((ch, i) => (
                                        <a
                                            key={i}
                                            href={ch.link ?? "#"}
                                            className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                                        >
                                            {ch.iconImage && (
                                                <img src={ch.iconImage} alt="item-icon" />
                                            )}
                                            <span className="whitespace-nowrap pl-3">
                                                {ch.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </section>

            <FontAwesomeIcon icon={faBars}
                onClick={openSideMenu}
                className="cursor-pointer text-4xl text-white md:hidden"
            />
        </div>
    );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
        <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
            <div className=" h-full w-[65%] bg-white px-4 py-4">
                <section className="flex justify-end">
                    <FontAwesomeIcon icon={faXmark} style={{ color: "#000000", }}
                        onClick={closeSideMenu}
                        className="cursor-pointer text-4xl"
                    />
                </section>
                <div className="flex flex-col text-base gap-2 transition-all">
                    {navItems.map((d, i) => (
                        <SingleNavItem
                            key={i}
                            label={d.label}
                            iconImage={d.iconImage}
                            link={d.link}
                        >
                            {d.children}
                        </SingleNavItem>
                    ))}
                </div>

            </div>
        </div>
    );
}

function SingleNavItem(d: NavItem) {
    const [isItemOpen, setItem] = useState(false);

    function toggleItem() {
        return setItem(!isItemOpen);
    }

    return (
        <a
            onClick={toggleItem}
            href={d.link ?? "#"}
            className="relative px-2 py-3 transition-all"
        >
            <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{d.label}</span>
            </p>

            {/* dropdown */}
            {isItemOpen && d.children && (
                <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
                    {d.children.map((ch, i) => (
                        <a
                            key={i}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                        >
                            {ch.iconImage && <img src={ch.iconImage} alt="item-icon" />}
                            <span className="whitespace-nowrap pl-3 ">{ch.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </a>
    );
}

export default Navbar;