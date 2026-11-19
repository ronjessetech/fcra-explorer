import React, { useState } from 'react';
import { 
  Bookmark, 
  MapPin, 
  Calendar, 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Organisation, ComplianceUserNote } from '../types/fcra';

interface OrgCardGridProps {
  organisations: Organisation[];
  notesMap: Record<string, ComplianceUserNote>;
  onToggleBookmark: (regNumber: string) => void;
  onSelectOrg: (org: Organisation) => void;
}

export const OrgCardGrid: React.FC<OrgCardGridProps> = ({
  organisations,
  notesMap,
  onToggleBookmark,
  onSelectOrg
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const totalPages = Math.ceil(organisations.length / pageSize) || 1;
  const paginatedOrgs = organisations.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const now = new Date();

  const formatCurrency = (amount: number) => {
    if (!amount) return '—';
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
    return `₹${(amount / 100000).toFixed(1)} L`;
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {paginatedOrgs.map((org) => {
          const note = notesMap[org.regNumber];
          const isBookmarked = note?.isBookmarked;
          const latestFiling = org.filingHistory && org.filingHistory[0];
          const expiry = new Date(org.validityExpiryDate);
          const diffDays = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 3600 * 24));
          const isExpiringSoon = diffDays > 0 && diffDays <= 180;

          return (
            <div
              key={org.regNumber}
              onClick={() => onSelectOrg(org)}
              className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-400 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Header: Reg No + Bookmark */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {org.regNumber}
                    </span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                      org.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : org.status === 'Cancelled'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {org.status}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(org.regNumber);
                    }}
                    className="p-1 rounded hover:bg-slate-100 transition-colors"
                  >
                    <Bookmark 
                      className={`w-4 h-4 ${
                        isBookmarked ? 'fill-amber-500 text-amber-500' : 'text-slate-300 group-hover:text-slate-400'
                      }`} 
                    />
                  </button>
                </div>

                {/* Org Title */}
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2 mb-1.5">
                  {org.name}
                </h3>

                {/* State & District */}
                <div className="flex items-center space-x-1 text-xs text-slate-500 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{org.district}, {org.state}</span>
                </div>

                {/* Expiry Alert Warning banner if expiring soon */}
                {isExpiringSoon && (
                  <div className="flex items-center space-x-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] px-2 py-1 rounded-md mb-2.5 font-medium">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Certificate expires in {diffDays} days ({org.validityExpiryDate})</span>
                  </div>
                )}

                {/* Nature Chips */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {org.nature.map(nat => (
                    <span key={nat} className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-600 font-medium">
                      {nat}
                    </span>
                  ))}
                  {note?.complianceTags?.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] rounded bg-amber-100 text-amber-800 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Latest Inflow</div>
                  <div className="font-mono font-semibold text-slate-800">
                    {latestFiling ? formatCurrency(latestFiling.amountReceivedINR) : '—'}
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
        <div className="flex items-center space-x-2">
          <span>Cards per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="py-1 px-2 border border-slate-300 rounded bg-white text-slate-700 text-xs"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
          <span className="text-slate-400">|</span>
          <span>
            Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, organisations.length)} of {organisations.length}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-medium text-slate-700 px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
