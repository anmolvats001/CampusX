import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/context";
import { useNavigate } from "react-router-dom";

const RightSider = () => {
  const { dark, data, setNotificationOn, utoken } = useContext(AppContext);
  const [siderData, setSiderData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.length > 0) {
      setSiderData(data.slice(0, 5));
    } else {
      setSiderData([]);
    }
  }, [data]);

  return (
    <aside
      className={`hidden lg:flex flex-col justify-between w-[30%] xl:w-[28%] min-h-screen border-l px-6 py-6 transition-colors ${
        dark ? "bg-[#0B0F17] border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="flex flex-col gap-6">
        {/* Card Header & Content */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            dark
              ? "bg-[#111827] border-slate-800 shadow-md shadow-black/20"
              : "bg-slate-50 border-slate-200 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/30">
            <div className="flex items-center gap-2">
              <i className="fi fi-rr-flame text-amber-500 text-lg"></i>
              <h2 className="text-base font-bold tracking-tight">Recent Complaints</h2>
            </div>
            {utoken && (
              <button
                type="button"
                onClick={() => setNotificationOn(true)}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  dark
                    ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                    : "hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                }`}
                title="Notifications"
              >
                <i className="fi fi-rr-bell text-lg"></i>
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {!siderData || siderData.length === 0 ? (
              <p className="text-center text-xs text-slate-500 py-6">No recent complaints</p>
            ) : (
              siderData.map((e, i) => (
                <div
                  key={e._id || i}
                  onClick={() => navigate(`/issues/post-data/${e._id}`)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    dark
                      ? "border-slate-800/60 hover:border-slate-700 hover:bg-slate-800/50"
                      : "border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <p className="text-xs sm:text-sm font-medium line-clamp-2 leading-snug">
                    {e.data}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-400">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-400 font-semibold">
                      {e.block} Block
                    </span>
                    {e.problem && (
                      <span className="capitalize text-slate-400">
                        {e.problem}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="pt-6 border-t border-slate-700/20 text-xs text-slate-500 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <a href="tel:+917983704504" className="hover:text-blue-500 transition-colors">
            +91 7983704504
          </a>
          <span>•</span>
          <a href="mailto:campusconnect0611@gmail.com" className="hover:text-blue-500 transition-colors">
            Support Email
          </a>
          <span>•</span>
          <span className="cursor-pointer hover:text-blue-500 transition-colors">Privacy</span>
        </div>
        <p className="text-[11px] text-slate-500 font-medium">© 2025 Campus Connect. All rights reserved.</p>
      </footer>
    </aside>
  );
};

export default RightSider;
