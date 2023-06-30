import React          from "react";
import Link           from "next/link";
import RichText       from "../RichText";

const Navbar = ({navbar}) => {
    if (!navbar) {
        return null;
    }

    const navbarData = navbar.data;

    return (
    <div>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://prismic.io/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    <RichText field={navbarData.slices[0]?.primary.name}/>
                </span>
            </a>
            <div className="flex md:order-2">
            </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navbarData?.slices?.[0]?.items?.map((item, i) => {
                            return <li key={i}>
                                <Link
                                    href={item?.slug}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    <RichText field={item?.child_name}/>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;
