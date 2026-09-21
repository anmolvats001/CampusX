import { useContext } from "react";
import { AppContext } from "../Context/context";
import campusxwhite from "../assets/campusxwhite.png";
import campusxblack from "../assets/campusxblack.png";
import { NavLink, useNavigate } from "react-router-dom";

const Sider = () => {
  const {
    dark,
    setProfileOn,
    setFilter,
    setPostVis,
    inchargelogin,
    atoken,
    utoken,
    itoken,
    logout,
    profileData,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-blue-600/15 text-blue-500 font-semibold shadow-sm"
        : dark
        ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <aside
      className={`hidden lg:flex flex-col justify-between w-[25%] xl:w-[22%] min-h-screen border-r px-5 xl:px-8 py-6 z-30 transition-colors ${
        dark ? "bg-[#0B0F17] border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      {/* Top Header & Navigation Links */}
      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer pt-2"
          onClick={() => navigate("/issues/home")}
        >
          <img
            className="h-10 w-auto object-contain"
            src={!dark ? campusxblack : campusxwhite}
            alt="Campus Connect Logo"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1.5 mt-2">
          <NavLink
            to={"/issues/home"}
            onClick={() => setFilter(null)}
            className={getNavLinkClass}
          >
            <i className="fi fi-sr-house-blank text-lg"></i>
            <span>Home</span>
          </NavLink>

          {inchargelogin && (
            <NavLink to={"/issues/incharge-dashboard"} className={getNavLinkClass}>
              <i className="fi fi-rr-dashboard-monitor text-lg"></i>
              <span>Dashboard</span>
            </NavLink>
          )}

          {atoken && (
            <NavLink to={"/issues/adminDashboard"} className={getNavLinkClass}>
              <i className="fi fi-rr-dashboard-monitor text-lg"></i>
              <span>Dashboard</span>
            </NavLink>
          )}

          <NavLink to={"/issues/search"} className={getNavLinkClass}>
            <i className="fi fi-bs-search text-lg"></i>
            <span>Search</span>
          </NavLink>

          {utoken && (
            <div
              onClick={() => {
                setPostVis(true);
                navigate("/issues/home");
              }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                dark
                  ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <i className="fi fi-ss-add text-lg text-blue-500"></i>
              <span>Report Issue</span>
            </div>
          )}

          {itoken && (
            <NavLink to={"/issues/resolve"} className={getNavLinkClass}>
              <i className="fi fi-ss-problem-solving text-lg text-amber-500"></i>
              <span>Resolve</span>
            </NavLink>
          )}

          {atoken && (
            <NavLink to={"/issues/incharges"} className={getNavLinkClass}>
              <i className="fi fi-rr-leadership-alt text-lg"></i>
              <span>Incharges</span>
            </NavLink>
          )}

          {atoken && (
            <NavLink to={"/issues/add-incharge"} className={getNavLinkClass}>
              <i className="fi fi-sr-person-circle-plus text-lg text-emerald-500"></i>
              <span>Add Incharge</span>
            </NavLink>
          )}

          {/* Filter Accordion */}
          <div className="group">
            <div
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                dark
                  ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <i className="fi fi-rr-filter text-lg"></i>
                <span>Categories</span>
              </div>
              <i className="fi fi-rr-angle-small-down text-sm transition-transform duration-200 group-hover:rotate-180"></i>
            </div>

            <div className="flex flex-col gap-1 pl-10 pr-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-72 group-hover:opacity-100 transition-all duration-300">
              {[
                { id: "all", label: "All Categories" },
                { id: "water", label: "Water & Taps" },
                { id: "hygiene", label: "Hygiene & Sanitation" },
                { id: "food", label: "Food & Canteen" },
                { id: "building", label: "Infrastructure" },
                { id: "security", label: "Safety & Security" },
                { id: "administration", label: "Administration" },
              ].map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    navigate("/issues/home");
                    setFilter(cat.id);
                  }}
                  className="py-1.5 px-2 rounded-lg text-xs font-medium text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer transition-colors"
                >
                  {cat.label}
                </div>
              ))}
            </div>
          </div>

          {utoken && (
            <NavLink
              to={"/issues/profile"}
              onClick={() => setProfileOn(true)}
              className={getNavLinkClass}
            >
              <i className="fi fi-sr-user text-lg"></i>
              <span>Profile</span>
            </NavLink>
          )}

          <NavLink to={"/issues/setting"} className={getNavLinkClass}>
            <i className="fi fi-sr-settings text-lg"></i>
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* User Profile Card at Bottom */}
      <div className="relative group pt-4 border-t border-slate-700/30">
        <div
          className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer ${
            dark
              ? "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              : "bg-slate-50 border-slate-200 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={
                profileData?.profile ||
                "https://imgs.search.brave.com/OrD16cB7BwEj3DZfFr7OHRQyABsYifutWhl975vIvII/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtUE5H/LUltYWdlLVRyYW5z/cGFyZW50LUJhY2tn/cm91bmQucG5n"
              }
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/30 shrink-0"
              alt="Avatar"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm truncate">{profileData?.name || "User"}</p>
              <p className="text-xs text-slate-400 truncate">
                {atoken || itoken ? profileData?.work : profileData?.branch || "Student"}
              </p>
            </div>
          </div>

          <i className="fi fi-rr-menu-dots text-slate-400 hover:text-slate-200 px-1"></i>
        </div>

        {/* Dropdown Popup */}
        <div
          className={`hidden group-hover:flex flex-col gap-1 absolute bottom-full left-0 right-0 mb-2 p-2 rounded-xl shadow-xl border z-50 transition-all ${
            dark
              ? "bg-[#111827] border-slate-700 text-slate-200"
              : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-500/10 hover:text-blue-400 cursor-pointer transition-colors"
            onClick={() => {
              setProfileOn(true);
              navigate("/issues/profile");
            }}
          >
            <i className="fi fi-rr-user"></i>
            <span>View Profile</span>
          </div>

          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-red-500 hover:bg-red-500/10 cursor-pointer transition-colors"
            onClick={() => logout()}
          >
            <i className="fi fi-rr-sign-out-alt"></i>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sider;
