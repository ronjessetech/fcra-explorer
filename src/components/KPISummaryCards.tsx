import React from 'react';
import { Building2, CheckCircle2, AlertTriangle, Bookmark, IndianRupee } from 'lucide-react';
import { Organisation } from '../types/fcra';

interface KPISummaryCardsProps {
  organisations: Organisation[];
  bookmarkedCount: number;
  onFilterExpiring: () => void;
  onFilterActive: () => void;
  onFilterWatchlist: () => void;
  onResetFilters: () => void;
}

export const KPISummaryCards: React.FC<KPISummaryCardsProps> = ({
  organisations,
  bookmarkedCount,
  onFilterExpiring,
  onFilterActive,
  onFilterWatchlist,
  onResetFilters
}) => {
  const totalCount = organisations.length;
  
  const activeCount = organisations.filter(o => o.status === 'Active').length;

  const now = new Date();
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(now.getMonth() + 6);

  const expiringSoonCount = organisations.filter(o => {
    if (o.status !== 'Active') return false;
    const expiryDate = new Date(o.validityExpiryDate);
    return expiryDate > now && expiryDate <= sixMonthsLater;
  }).length;

  const totalInflow = organisations.reduce((sum, org) => {
    const latest = org.filingHistory && org.filingHistory[0];
    return sum + (latest ? latest.amountReceivedINR : 0);
  }, 0);

  const formatCrores = (val: number) => {
    const cr = val / 10000000;
    return `₹${cr.toFixed(1)} Cr`;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
      {/* Total NGOs */}
      <button
        onClick={onResetFilters}
        className="text-left bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group"
      >
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-medium text-slate-600">Total Stored</span>
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Building2 className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="text-2xl font-bold tracking-tight text-slate-900">{totalCount}</div>
        <div className="text-[11px] text-slate-500 mt-1 flex items-center">
          <span>In IndexedDB store</span>
        </div>
      </button>

      {/* Active Certificates */}
      <button
        onClick={onFilterActive}
        className="text-left bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group"
      >
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-medium text-slate-600">Active FCRA</span>
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="text-2xl font-bold tracking-tight text-emerald-700">{activeCount}</div>
        <div className="text-[11px] text-slate-500 mt-1">
          {totalCount > 0 ? `${Math.round((activeCount / totalCount) * 100)}% compliance rate` : '0%'}
        </div>
      </button>

      {/* Expiring Soon */}
      <button
        onClick={onFilterExpiring}
        className={`text-left bg-white p-3.5 rounded-xl border shadow-sm transition-all group ${
          expiringSoonCount > 0 
            ? 'border-amber-300 bg-amber-50/20 hover:border-amber-500 hover:shadow-md' 
            : 'border-slate-200/80 hover:border-slate-400'
        }`}
      >
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-medium text-amber-700">Expiring in 6 Mo</span>
          <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="text-2xl font-bold tracking-tight text-amber-600">{expiringSoonCount}</div>
        <div className="text-[11px] text-amber-600 font-medium mt-1">
          Action required for renewal
        </div>
      </button>

      {/* Watchlist / Bookmarked */}
      <button
        onClick={onFilterWatchlist}
        className="text-left bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all group"
      >
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-medium text-slate-600">Compliance Watchlist</span>
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <Bookmark className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="text-2xl font-bold tracking-tight text-indigo-700">{bookmarkedCount}</div>
        <div className="text-[11px] text-slate-500 mt-1">
          Starred due diligence cases
        </div>
      </button>

      {/* Total Inflow Tracked */}
      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm col-span-2 md:col-span-1">
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-medium text-slate-600">Tracked Foreign Inflow</span>
          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
            <IndianRupee className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="text-2xl font-bold tracking-tight text-slate-900">
          {formatCrores(totalInflow)}
        </div>
        <div className="text-[11px] text-slate-500 mt-1">
          Latest FY annual filings
        </div>
      </div>
    </div>
  );
};
