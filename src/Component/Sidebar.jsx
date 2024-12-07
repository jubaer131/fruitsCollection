
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle menu toggle
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div>
            {/* Mobile Burger Menu */}
            <div className="md:hidden bg-gray-100 p-4 flex justify-between">
                <h1>Food items</h1>
                <button
                    className="text-gray-700 text-lg focus:outline-none"
                    onClick={toggleMenu}
                >
                    <IoMdArrowDropdown className='text-4xl font-bold' />
                </button>
            </div>

            {/* Sidebar for Desktop */}
            <div className={`md:block ${isMenuOpen ? "block" : "hidden"} bg-white rounded-2xl p-6 md:p-0`}>

                <div className="space-y-4 p-6">
                    <div className="">
                        <Tabs>
                            <TabList className="border-2 border-[#f5dbd2] bg-[#fceee9]  w-full flex my-4 rounded-xl ">
                                <Tab className="px-4 py-2 text-orange-500  w-full">
                                    <button className='w-full max-w-xs  outline-none'>Fruit List</button>
                                </Tab>
                                <Tab className="px-4 py-2 text-orange-500  w-full">

                                    <button className='w-full max-w-xs  outline-none'>Fruit List</button>
                                </Tab>
                            </TabList>
                            <TabPanel>

                                <div className="relative ">
                                    <form className="w-full max-w-md mx-auto ">
                                        <label className="input input-bordered flex items-center gap-2 px-4 py-4 pr-0 border rounded-lg shadow-sm">
                                            <input
                                                type="text"
                                                name="searchInput"
                                                className="grow outline-none lg:w-64"
                                                placeholder="Search"
                                            />
                                            <button type="submit" className="flex items-center justify-center bg-[#f9f0ed] lg:h-11 lg:w-16 rounded-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                    className="lg:h-6 lg:w-6 opacity-70"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </label>
                                    </form>
                                </div>
                                <div className="lg:flex-1  space-y-2">
                                    <h1 className='pt-3'>Fruits List</h1>
                                    <ul className="pt-2 pb-4  text-sm space-y-2">
                                        <li className="rounded-sm ">
                                            <NavLink
                                                to="/apple"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond "
                                                        src="https://i.ibb.co.com/v3fsCC3/hand-drawn-apple-fruit-illustration-53876-2980.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Apple</span>
                                            </NavLink>
                                            <NavLink
                                                to="/banana"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/9YJkckF/banana-bunch-with-slices-489827-611.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Banana</span>
                                            </NavLink>
                                            <NavLink
                                                to="/mango"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/NYrCT7D/delicious-mango-studio-23-2151844835.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Mango</span>
                                            </NavLink>
                                            <NavLink
                                                to="/orange"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/0t3ynkR/orange-juicy-ripe-circle-citrus-1172-203.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Orange</span>
                                            </NavLink>
                                            <NavLink
                                                to="/grapes"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/cvV42DW/red-grape-isolated-white-88281-804.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Grapes</span>
                                            </NavLink>
                                            <NavLink
                                                to="/pineapple"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/RNpNBrt/pineapple-juicy-mellow-isolated-white-179666-678.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Pineapple</span>
                                            </NavLink>
                                            <NavLink
                                                to="/watermelon"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/HDS47bW/fresh-watermelon-isolated-white-background-454083-30.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Watermelon</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                            </TabPanel>
                            <TabPanel>

                                <div className="relative ">
                                    <form className="w-full max-w-md mx-auto ">
                                        <label className="input input-bordered flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm">
                                            <input
                                                type="text"
                                                name="searchInput"
                                                className="grow outline-none lg:w-64"
                                                placeholder="Search"
                                            />
                                            <button type="submit" className="flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                    className="h-4 w-4 opacity-70"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </label>
                                    </form>
                                </div>
                                <div className="lg:flex-1  space-y-2">
                                    <h1 className='pt-3'>Fruits List</h1>
                                    <ul className="pt-2 pb-4  text-sm space-y-2">
                                        <li className="rounded-sm ">
                                            <NavLink

                                                to="/spinach"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/T200mpt/fresh-green-spinach-leaves-58830-877.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Spinach</span>
                                            </NavLink>
                                            <NavLink
                                                to="/carrot"
                                                className={({ isActive }) =>
                                                    `flex items-center gap-4 w-full p-3 rounded-lg ${isActive ? "text-blue-500 font-bold border border-red-300" : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span>
                                                    <img
                                                        className="w-8 h-8 mask mask-diamond"
                                                        src="https://i.ibb.co.com/L51yps8/fresh-vibrant-carrot-vector-illustrations-elevate-your-designs-1132808-885.jpg"
                                                        alt="Home Icon"
                                                    />
                                                </span>
                                                <span>Carrot</span>
                                            </NavLink>

                                        </li>
                                    </ul>
                                </div>

                            </TabPanel>


                        </Tabs>



                    </div>
                </div>
            </div >
        </div >
    );
};

export default Sidebar;
