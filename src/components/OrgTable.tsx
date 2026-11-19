import React, { useState } from 'react';
import { 
  Bookmark, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Building, 
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { Organisation, ComplianceUserNote } from '../types/fcra';

interface OrgTableProps {
  organisations: Organisation[];
  notesMap: Record<string, ComplianceUserNote>;
  onToggleBookmark: (regNumber: string) => void;
  onSelectOrg: (org: Organisation) => void;
}

export const OrgTable: React.FC<OrgTableProps> = ({
  organisations,
  notesMap,
  onToggleBookmark,
  onSelectOrg
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const totalPages = Math.ceil(organisations.length / pageSize) || 1;
  const paginatedOrgs = organisations.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const now = new Date();

  const getStatusBadge = (status: string, expiryDateStr: string) => {
    const expiry = new Date(expiryDateStr);
    const diffDays = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 3600 * 24));

    if (status === 'Cancelled') {
      return (
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
          <XCircle className="w-3 h-3 text-rose-500" />
          <span>Cancelled</span>
        </span>
      );
    }

    if (status === 'Deemed Expired') {
      return (
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">
          <Clock className="w-3 h-3 text-orange-500" />
          <span>Deemed Expired</span>
        </span>
      );
    }

    if (status === 'Expired' || diffDays <= 0) {
      return (
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-300">
          <Clock className="w-3 h-3 text-slate-500" />
          <span>Expired</span>
        </span>
      );
    }

    if (diffDays <= 180) {
      return (
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 animate-pulse">
          <AlertTriangle className="w-3 h-3 text-amber-600" />
          <span>Expiring in {diffDays}d</span>
        </span>
      );
    }

    return (
      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
        <span>Active</span>
      </span>
    );
  };

  const formatCurrency = (amount: number) => {
    if (!amount) return '—';
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(1)} L`;
  };

  if (organisations.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
          <Building className="w-6 h-6" />
        </div>
        <h3 className="text-base font-semibold text-slate-800 mb-1">No matching organisations found</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
          Try loosening your search terms, changing the state or status filter, or importing more records.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[10px]">
              <th className="py-3 px-3 w-10 text-center">★</th>
              <th className="py-3 px-3">FCRA Reg No</th>
              <th className="py-3 px-4">Organisation Name & Focus</th>
              <th className="py-3 px-3">State & District</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3">Certificate Expiry</th>
              <th className="py-3 px-3">SBI Sansad Marg</th>
              <th className="py-3 px-3 text-right">Latest Inflow</th>
              <th className="py-3 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedOrgs.map((org) => {
              const note = notesMap[org.regNumber];
              const isBookmarked = note?.isBookmarked;
              const latestFiling = org.filingHistory && org.filingHistory[0];

              return (
                <tr 
                  key={org.regNumber}
                  onClick={() => onSelectOrg(org)}
                  className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                >
                  {/* Bookmark Star */}
                  <td 
                    className="py-3 px-3 text-center" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(org.regNumber);
                    }}
                  >
                    <button
                      className="p-1 rounded hover:bg-slate-100 transition-colors"
                      title={isBookmarked ? "Remove from watchlist" : "Add to compliance watchlist"}
                    >
                      <Bookmark 
                        className={`w-4 h-4 ${
                          isBookmarked 
                            ? 'fill-amber-500 text-amber-500' 
                            : 'text-slate-300 group-hover:text-slate-400'
                        }`} 
                      />
                    </button>
                  </td>

                  {/* FCRA Reg Number */}
                  <td className="py-3 px-3 font-mono font-medium text-slate-800">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[11px] border border-slate-200">
                      {org.regNumber}
                    </span>
                  </td>

                  {/* Name & Activities */}
                  <td className="py-3 px-4 max-w-xs sm:max-w-md">
                    <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-xs sm:text-sm">
                      {org.name}
                    </div>
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                      {org.nature.map(nat => (
                        <span 
                          key={nat} 
                          className="px-1.5 py-0.2 rounded text-[10px] bg-slate-100 text-slate-600 font-medium"
                        >
                          {nat}
                        </span>
                      ))}
                      {note?.complianceTags?.map(tag => (
                        <span 
                          key={tag}
                          className="px-1.5 py-0.2 rounded text-[10px] bg-amber-100 text-amber-800 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* State & District */}
                  <td className="py-3 px-3">
                    <div className="font-medium text-slate-800">{org.state}</div>
                    <div className="text-[11px] text-slate-500">{org.district}</div>
                  </td>

                  {/* Status */}
                  <td className="py-3 px-3">
                    {getStatusBadge(org.status, org.validityExpiryDate)}
                  </td>

                  {/* Expiry Date */}
                  <td className="py-3 px-3 font-mono text-slate-700">
                    <div>{org.validityExpiryDate}</div>
                    <div className="text-[10px] text-slate-400">Reg: {org.registrationDate}</div>
                  </td>

                  {/* SBI Sansad Marg */}
                  <td className="py-3 px-3">
                    {org.bankDetails.isMainSBIAccount ? (
                      <span className="inline-flex items-center space-x-1 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-medium border border-emerald-200">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>Sansad Marg SBI</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[10px]">
                        {org.bankDetails.branch}
                      </span>
                    )}
                  </td>

                  {/* Latest Inflow */}
                  <td className="py-3 px-3 text-right font-mono font-medium text-slate-800">
                    {latestFiling ? formatCurrency(latestFiling.amountReceivedINR) : '—'}
                  </td>

                  {/* Action */}
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectOrg(org);
                      }}
                      className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      title="Inspect full compliance record"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="py-1 px-2 border border-slate-300 rounded bg-white text-slate-700 text-xs"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
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
            className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-medium text-slate-700 px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
