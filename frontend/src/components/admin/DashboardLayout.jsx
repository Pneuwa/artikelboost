import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { categories } from "../../util/categories";

const DashboardLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("artikel-boost");
    setMenuOpen(false);
  };

  const menuItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
          <path
            fillRule="evenodd"
            d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      to: "collection",
      label: "Word Collection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>
      ),
    },
    {
      to: "add-word",
      label: "Add Word",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
    },
  ];

  const renderMenuItems = (className = "") => (
    <>
      {menuItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-rose-100 hover:text-rose-500 ${
              isActive ? "bg-rose-100 text-rose-500" : "text-neutral-900"
            } ${className}`
          }
          end
          onClick={() => setMenuOpen(false)}
        >
          {icon}
          <span className="grow">{label}</span>
        </NavLink>
      ))}
    </>
  );

  return (
    <div>
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-neutral-100"
      >
        <header
          id="page-header"
          className="z-1 flex flex-none justify-center items-center"
        >
          <div className="container px-4 lg:px-8 max-w-full">
            <div className="flex justify-between lg:justify-center border-b-2 border-neutral-200/50 py-6">
              <div className="flex items-center">
                <Link to="/">
                  <img
                    src={logo}
                    className="w-[180px] h-auto max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-1 lg:gap-5">
                <div className="lg:hidden">
                  <button
                    type="button"
                    className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-neutral-900 hover:bg-rose-100 hover:text-rose-600 active:border-rose-200 active:bg-rose-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* MOBILE NAV */}
            <nav
              className={`absolute z-100 bg-neutral-100 left-0 w-full flex flex-col py-4 transition-all duration-300 ease-in-out lg:hidden ${
                menuOpen ? "flex" : "hidden"
              }`}
            >
              {renderMenuItems()}
              <hr className="h-2 border-0" />
              <p className="pl-4 text-sm font-bold text-neutral-900">
                Categories
              </p>
              {categories.map((category) => (
                <NavLink
                  key={category.slug}
                  to={`categories/${category.slug}`}
                  className={({ isActive }) =>
                    `group flex items-center justify-between gap-2 rounded-md border border-transparent pl-4 py-2 text-sm font-semibold hover:bg-rose-100 hover:text-rose-500 ${
                      isActive
                        ? "bg-rose-100 text-rose-500"
                        : "text-neutral-900"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    stroke="currentColor"
                    className={`size-6 ${category.iconColor}`}
                  >
                    <path d={category.icon} />
                  </svg>
                  <span className="grow">{category.name}</span>
                </NavLink>
              ))}
              <hr className="h-2 border-0" />
              <NavLink
                to="/"
                onClick={logoutHandler}
                className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-rose-100 hover:text-rose-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                <span className="grow">Logout</span>
              </NavLink>
            </nav>
          </div>
        </header>

        <main id="page-content">
          <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
            <div className="grid grid-cols-1 md:gap-20 lg:grid-cols-12">
              <nav className="hidden lg:col-span-3 lg:block">
                {renderMenuItems()}
                <hr className="h-2 border-0" />
                <p className="pl-4 text-sm font-bold text-neutral-900">
                  Categories
                </p>
                {categories.map((category) => (
                  <NavLink
                    key={category.slug}
                    to={`categories/${category.slug}`}
                    className={({ isActive }) =>
                      `group flex items-center justify-between gap-2 rounded-md border border-transparent pl-4 py-2 text-sm font-semibold hover:bg-rose-100 hover:text-rose-500 ${
                        isActive
                          ? "bg-rose-100 text-rose-500"
                          : "text-neutral-900"
                      }`
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      stroke="currentColor"
                      className={`size-6 ${category.iconColor}`}
                    >
                      <path d={category.icon} />
                    </svg>
                    <span className="grow">{category.name}</span>
                  </NavLink>
                ))}
                <NavLink
                  to="/"
                  onClick={logoutHandler}
                  className="group flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold hover:bg-rose-100 hover:text-rose-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                  <span className="grow">Logout</span>
                </NavLink>
              </nav>

              <div className="lg:col-span-9 mx-auto w-full">
                <div className="flex justify-center items-center mx-auto">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
