import Link from "next/link";
import {featuredCategories} from "@/data";

const Navbar = () => {
    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <Link href={'/'} className="ml-5 text-3xl font-bold">Tech World</Link>
            </div>
            <div className="navbar-center hidden md:block">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                </div>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal menu-dropdown px-1 font-bold text-lg">
                        <li><a>PC Builder</a></li>
                        <li>
                            <details>
                                <summary>
                                    Categories
                                </summary>
                                <ul className="p-2 mt-2 w-56 z-[1] ">
                                    {
                                        featuredCategories.map((category, index) => (
                                            <li key={index}><Link href={`/categories/${category}`}>{category}</Link>
                                            </li>))
                                    }
                                </ul>
                            </details>
                        </li>
                        <li><a>Sign in</a></li>
                        <li><a>Sign out</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                        <li><a>Build Pc</a></li>
                        <li>
                            <details>
                                <summary>
                                    Categories
                                </summary>
                                <ul className="p-2 w-44">
                                    {
                                        featuredCategories.map((category, index) => (
                                            <li key={index}><Link href={`/categories/${category}`}>{category}</Link>
                                            </li>))
                                    }
                                </ul>
                            </details>
                        </li>
                        <li><a>Sign in</a></li>
                        <li><a>Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
