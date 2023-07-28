const Navbar = () => {
    return (
        <div className="navbar shadow-lg">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-2xl">Tech World</a>
            </div>
            <div className="navbar-center hidden md:block">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Build Pc</a></li>
                        <li>
                            <details>
                                <summary>
                                    Categories
                                </summary>
                                <ul className="p-2 mt-2 w-44">
                                    <li><a>CPU/Processor</a></li>
                                    <li><a>Motherboard</a></li>
                                    <li><a>RAM</a></li>
                                    <li><a>Power Supply Unit</a></li>
                                    <li><a>Storage Device</a></li>
                                    <li><a>Monitor</a></li>
                                    <li><a>Others</a></li>
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
                                    <li><a>CPU/Processor</a></li>
                                    <li><a>Motherboard</a></li>
                                    <li><a>RAM</a></li>
                                    <li><a>Power Supply Unit</a></li>
                                    <li><a>Storage Device</a></li>
                                    <li><a>Monitor</a></li>
                                    <li><a>Others</a></li>
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
