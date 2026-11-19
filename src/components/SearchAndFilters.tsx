import React from 'react';
import { 
  Search, 
  X, 
  Filter, 
  FileSpreadsheet, 
  LayoutGrid, 
  Table as TableIcon,
  ArrowUpDown,
  Bookmark,
  Sparkles
} from 'lucide-react';
import { FilterOptions, FCRANature, FCRAStatus } from '../types/fcra';

interface SearchAndFiltersProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  availableStates: string[];
  totalResults: number;
  viewMode: 'table' | 'grid';
  setViewMode: (mode: 'table' | 'grid') => void;
  onExportCSV: () => void;
  onResetFilters: () => void;
}

const natures: FCRANature[] = ['Social', 'Educational', 'Economic', 'Cultural', 'Religious'];
const statuses: FCRAStatus[] = ['Active', 'Expired', 'Cancelled', 'Deemed Expired'];

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  filters,
  setFilters,
  availableStates,
  totalResults,
  viewMode,
  setViewMode,
  onExportCSV,
  onResetFilters
}) => {
  const hasActiveFilters = 
    Boolean(filters.searchQuery) || 
    Boolean(filters.selectedState) || 
    Boolean(filters.selectedStatus) || 
    Boolean(filters.selectedNature) || 
    filters.expiryFilter !== 'all' || 
    filters.bookmarkedOnly;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-6">
      {/* Top row: Search input + Actions */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
            placeholder="Search by NGO Name, FCRA Reg No (e.g. 083780012), District, or Activities..."
            className="w-full pl-10 pr-9 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder-slate-400"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* View Toggle & Export */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Table vs Grid View */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-md text-xs font-medium transition-all ${
                viewMode === 'table' ? 'bg-white shadow-xs text-blue-600' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Table View"
            >
              <TableIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md text-xs font-medium transition-all ${
                viewMode === 'grid' ? 'bg-white shadow-xs text-blue-600' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Card Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          {/* Export to CSV */}
          <button
            onClick={onExportCSV}
            className="flex items-center space-x-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg border border-emerald-200 transition-colors"
            title="Download currently filtered rows as CSV"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter facets toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-3 border-t border-slate-100">
        {/* State/UT Selector */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">State / UT</label>
          <select
            value={filters.selectedState}
            onChange={(e) => setFilters(prev => ({ ...prev, selectedState: e.target.value }))}
            className="w-full py-1.5 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
          >
            <option value="">All States / UTs</option>
            <option value="North East (All)">🏔️ North East (All 8 States)</option>
            {availableStates.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* FCRA Status */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Registration Status</label>
          <select
            value={filters.selectedStatus}
            onChange={(e) => setFilters(prev => ({ ...prev, selectedStatus: e.target.value }))}
            className="w-full py-1.5 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
          >
            <option value="">All Statuses</option>
            {statuses.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* Nature of Association */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nature / Purpose</label>
          <select
            value={filters.selectedNature}
            onChange={(e) => setFilters(prev => ({ ...prev, selectedNature: e.target.value }))}
            className="w-full py-1.5 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
          >
            <option value="">All Natures</option>
            {natures.map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Expiry Window */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Certificate Validity</label>
          <select
            value={filters.expiryFilter}
            onChange={(e) => setFilters(prev => ({ ...prev, expiryFilter: e.target.value as any }))}
            className="w-full py-1.5 px-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
          >
            <option value="all">Any Validity Date</option>
            <option value="expiring_3m">⚠️ Expiring within 3 Months</option>
            <option value="expiring_6m">⚠️ Expiring within 6 Months</option>
            <option value="active">Active & Valid</option>
            <option value="expired">Already Expired</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Sort Results By</label>
          <div className="flex space-x-1">
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="flex-1 py-1.5 px-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
            >
              <option value="name">Name</option>
              <option value="expiryDate">Expiry Date</option>
              <option value="regNumber">FCRA Reg No</option>
              <option value="state">State</option>
              <option value="inflow">Foreign Inflow</option>
            </select>
            <button
              onClick={() => setFilters(prev => ({ ...prev, sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc' }))}
              className="px-2 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-slate-700 text-xs"
              title={`Sorting ${filters.sortOrder.toUpperCase()}`}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom status bar: Bookmarked toggle & active filter pills */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
        <div className="flex items-center space-x-3">
          {/* Bookmarked only toggle */}
          <button
            onClick={() => setFilters(prev => ({ ...prev, bookmarkedOnly: !prev.bookmarkedOnly }))}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
              filters.bookmarkedOnly
                ? 'bg-amber-100 text-amber-800 border-amber-300'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${filters.bookmarkedOnly ? 'fill-amber-600 text-amber-600' : ''}`} />
            <span>Watchlist Only</span>
          </button>

          {/* Quick preset for North East */}
          <button
            onClick={() => setFilters(prev => ({ ...prev, selectedState: prev.selectedState === 'North East (All)' ? '' : 'North East (All)' }))}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
              filters.selectedState === 'North East (All)'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-400 font-semibold'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Filter by all 8 North East states (Assam, Meghalaya, Manipur, Nagaland, Mizoram, Tripura, Arunachal Pradesh, Sikkim)"
          >
            <span>🏔️ All North East</span>
          </button>

          {/* Quick preset for Assam */}
          <button
            onClick={() => setFilters(prev => ({ ...prev, selectedState: prev.selectedState === 'Assam' ? '' : 'Assam' }))}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
              filters.selectedState === 'Assam'
                ? 'bg-blue-100 text-blue-800 border-blue-400 font-semibold'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
            title="Filter by verified FCRA associations in Assam"
          >
            <span>🌿 Assam Only</span>
          </button>

          {/* Quick preset for expiring */}
          {filters.expiryFilter === 'all' && (
            <button
              onClick={() => setFilters(prev => ({ ...prev, expiryFilter: 'expiring_6m' }))}
              className="text-slate-500 hover:text-amber-700 text-[11px] flex items-center space-x-1"
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Show renewals due in 6 mo</span>
            </button>
          )}
        </div>

        {/* Results summary and Reset */}
        <div className="flex items-center space-x-3">
          <span className="text-slate-500 font-medium">
            Showing <strong className="text-slate-800">{totalResults}</strong> records
          </span>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
