import { RxHamburgerMenu } from "react-icons/rx";
import { IoSunnySharp } from "react-icons/io5";
import { BsJournalText } from "react-icons/bs";

const Header = () => {
    return (
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
            <div>
                <img className="w-16 h-10 bg-cover" src="https://i.ibb.co.com/0JpT46X/1000-F-241307210-Mjja-JC3-SJy2z-JZ6-B7b-KGMRs-KQbdw-RSze.jpg" alt="" />
            </div>
            <div>
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
            <div>
                <ul className="flex gap-1  lg:gap-6 ">


                    <li>
                        <div className="lg:w-10 lg:h-10  bg-slate-100 flex justify-center items-center">
                            <IoSunnySharp />
                        </div>
                    </li>
                    <li>
                        <div className="lg:w-10 lg:h-10 bg-slate-100 flex justify-center items-center max-sm:hidden">
                            <BsJournalText />
                        </div>
                    </li>
                    <li>
                        <div className="lg:w-10 lg:h-10 bg-slate-100 flex justify-center items-center">
                            <RxHamburgerMenu />
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
