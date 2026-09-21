import React, { useContext } from 'react';
import { AppContext } from '../Context/context';

const Data = () => {
  const { dark, data } = useContext(AppContext);
  const total = data?.length || 0;
  const resolved = data?.filter(p => p.resolvedByIncharge)?.length || 0;
  const inProgress = data?.filter(p => !p.resolvedByIncharge && p.resolvedByStudent)?.length || 0;
  const pending = total - resolved - inProgress;

  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center p-6 ${dark ? 'bg-[#0B0F17] text-slate-200' : 'bg-slate-50 text-slate-700'}`}>
      <div className={`max-w-md w-full p-8 rounded-2xl border text-center shadow-xl ${dark ? 'bg-[#151D2A] border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : 'bg-white border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'}`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-3xl">
          <i className="fi fi-rr-chart-pie-alt"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Campus Statistics</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Real-time overview of reported, pending, and resolved campus grievances.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className={`p-3 rounded-xl border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-blue-50/50 border-blue-100'}`}>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{total}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Total</p>
          </div>
          <div className={`p-3 rounded-xl border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-emerald-50/50 border-emerald-100'}`}>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{resolved}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Resolved</p>
          </div>
          <div className={`p-3 rounded-xl border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-amber-50/50 border-amber-100'}`}>
            <p className="text-xl font-bold text-amber-600 dark:text-amber-400">{pending > 0 ? pending : 0}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
