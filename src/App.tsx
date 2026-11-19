import React, { useState, useEffect, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db/database';
import { initializeDatabaseIfEmpty, resetToSampleData, exportFilteredToCSV } from './db/importExport';
import { Organisation, ComplianceUserNote, FilterOptions } from './types/fcra';
import { AppHeader } from './components/AppHeader';
import { KPISummaryCards } from './components/KPISummaryCards';
import { SearchAndFilters } from './components/SearchAndFilters';
import { OrgTable } from './components/OrgTable';
import { OrgCardGrid } from './components/OrgCardGrid';
import { OrgDetailDrawer } from './components/OrgDetailDrawer';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { DataImporterModal } from './components/DataImporterModal';
import { LocalBackupModal } from './components/LocalBackupModal';
import { Bookmark, ShieldAlert, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

const initialFilters: FilterOptions = {
  searchQuery: '',
  selectedState: '',
  selectedStatus: '',
  selectedNature: '',
  expiryFilter: 'all',
  bookmarkedOnly: false,
  sortBy: 'name',
  sortOrder: 'asc'
};

export function App() {
  const [currentTab, setCurrentTab] = useState<'explorer' | 'watchlist' | 'analytics'>('explorer');
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selectedOrg, setSelectedOrg] = useState<Organisation | null>(null);
  const [isImporterOpen, setIsImporterOpen] = useState(false);
  const [isBackupOpen, setIsBackupOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live queries from Dexie IndexedDB
  const organisations = useLiveQuery(() => db.organisations.toArray(), []) || [];
  const complianceNotes = useLiveQuery(() => db.complianceNotes.toArray(), []) || [];

  // Seed DB on first boot if empty
  useEffect(() => {
    initializeDatabaseIfEmpty().then((seeded) => {
      if (seeded) {
        showToast("Loaded verified real Indian FCRA organisations from official MHA public records");
      }
    });
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Convert compliance notes array to map for fast O(1) lookup
  const notesMap = useMemo(() => {
    const map: Record<string, ComplianceUserNote> = {};
    complianceNotes.forEach(n => {
      map[n.orgRegNumber] = n;
    });
    return map;
  }, [complianceNotes]);

  // Extract unique states for filter dropdown
  const availableStates = useMemo(() => {
    const set = new Set<string>();
    organisations.forEach(o => {
      if (o.state) set.add(o.state);
    });
    return Array.from(set).sort();
  }, [organisations]);

  // Count bookmarked NGOs
  const bookmarkedCount = useMemo(() => {
    return complianceNotes.filter(n => n.isBookmarked).length;
  }, [complianceNotes]);

  // Filtered & Sorted Organisations
  const filteredOrganisations = useMemo(() => {
    const now = new Date();
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(now.getMonth() + 3);
    const sixMonthsLater = new Date();
    sixMonthsLater.setMonth(now.getMonth() + 6);

    const isWatchlistTab = currentTab === 'watchlist';

    return organisations.filter(org => {
      const isBookmarked = Boolean(notesMap[org.regNumber]?.isBookmarked);

      // Watchlist tab or bookmarkedOnly filter
      if ((isWatchlistTab || filters.bookmarkedOnly) && !isBookmarked) {
        return false;
      }

      // Text search: matches name, regNumber, district, state, or key activities
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchName = org.name.toLowerCase().includes(query);
        const matchReg = org.regNumber.toLowerCase().includes(query);
        const matchDistrict = org.district.toLowerCase().includes(query);
        const matchState = org.state.toLowerCase().includes(query);
        const matchActivities = org.keyActivities.some(a => a.toLowerCase().includes(query));
        const matchBank = org.bankDetails.branch.toLowerCase().includes(query);

        if (!matchName && !matchReg && !matchDistrict && !matchState && !matchActivities && !matchBank) {
          return false;
        }
      }

      // State Filter
      if (filters.selectedState) {
        if (filters.selectedState === 'North East (All)') {
          const neStates = ['Assam', 'Meghalaya', 'Manipur', 'Nagaland', 'Mizoram', 'Tripura', 'Arunachal Pradesh', 'Sikkim'];
          if (!neStates.includes(org.state)) return false;
        } else if (org.state !== filters.selectedState) {
          return false;
        }
      }

      // Status Filter
      if (filters.selectedStatus && org.status !== filters.selectedStatus) {
        return false;
      }

      // Nature Filter
      if (filters.selectedNature && !org.nature.includes(filters.selectedNature as any)) {
        return false;
      }

      // Expiry Filter
      if (filters.expiryFilter !== 'all') {
        const expiryDate = new Date(org.validityExpiryDate);
        if (filters.expiryFilter === 'expiring_3m') {
          if (org.status !== 'Active' || expiryDate <= now || expiryDate > threeMonthsLater) return false;
        } else if (filters.expiryFilter === 'expiring_6m') {
          if (org.status !== 'Active' || expiryDate <= now || expiryDate > sixMonthsLater) return false;
        } else if (filters.expiryFilter === 'expired') {
          if (org.status !== 'Expired' && org.status !== 'Deemed Expired' && expiryDate > now) return false;
        } else if (filters.expiryFilter === 'active') {
          if (org.status !== 'Active' || expiryDate <= now) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      let comparison = 0;
      if (filters.sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (filters.sortBy === 'regNumber') {
        comparison = a.regNumber.localeCompare(b.regNumber);
      } else if (filters.sortBy === 'expiryDate') {
        comparison = a.validityExpiryDate.localeCompare(b.validityExpiryDate);
      } else if (filters.sortBy === 'state') {
        comparison = a.state.localeCompare(b.state);
      } else if (filters.sortBy === 'inflow') {
        const inA = (a.filingHistory && a.filingHistory[0]?.amountReceivedINR) || 0;
        const inB = (b.filingHistory && b.filingHistory[0]?.amountReceivedINR) || 0;
        comparison = inA - inB;
      }
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [organisations, filters, notesMap, currentTab]);

  // Handler: Toggle Bookmark
  const handleToggleBookmark = async (regNumber: string) => {
    const existing = notesMap[regNumber];
    if (existing) {
      await db.complianceNotes.update(regNumber, {
        isBookmarked: !existing.isBookmarked,
        lastModified: new Date().toISOString()
      });
      showToast(!existing.isBookmarked ? "Added to Compliance Watchlist" : "Removed from Watchlist");
    } else {
      await db.complianceNotes.put({
        orgRegNumber: regNumber,
        isBookmarked: true,
        notes: '',
        complianceTags: ['Watchlist'],
        riskRating: 'Low',
        lastModified: new Date().toISOString()
      });
      showToast("Added to Compliance Watchlist");
    }
  };

  // Handler: Save Note
  const handleSaveNote = async (regNumber: string, updated: Partial<ComplianceUserNote>) => {
    const existing = notesMap[regNumber];
    if (existing) {
      await db.complianceNotes.update(regNumber, updated);
    } else {
      await db.complianceNotes.put({
        orgRegNumber: regNumber,
        isBookmarked: false,
        notes: updated.notes || '',
        complianceTags: updated.complianceTags || [],
        riskRating: updated.riskRating || 'Low',
        renewalReminderDate: updated.renewalReminderDate,
        lastModified: new Date().toISOString(),
        ...updated
      });
    }
    showToast("Compliance notes saved to browser IndexedDB");
  };

  // Handler: Reset to Sample
  const handleResetData = async () => {
    if (window.confirm("Reload verified official dataset (35+ registered Indian associations from MHA public records)? Custom imported records will be refreshed.")) {
      await resetToSampleData();
      showToast("Reloaded verified official dataset from MHA records");
    }
  };

  // Handler: Export CSV
  const handleExportCSV = () => {
    const filename = currentTab === 'watchlist' ? 'fcra_compliance_watchlist.csv' : 'fcra_filtered_organisations.csv';
    exportFilteredToCSV(filteredOrganisations, filename);
    showToast(`Exported ${filteredOrganisations.length} records to ${filename}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* App Header */}
      <AppHeader
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenImporter={() => setIsImporterOpen(true)}
        onOpenBackup={() => setIsBackupOpen(true)}
        onResetData={handleResetData}
        totalCount={organisations.length}
        bookmarkedCount={bookmarkedCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {/* KPI Summary Cards */}
        <KPISummaryCards
          organisations={organisations}
          bookmarkedCount={bookmarkedCount}
          onFilterExpiring={() => {
            setCurrentTab('explorer');
            setFilters(prev => ({ ...prev, expiryFilter: 'expiring_6m' }));
          }}
          onFilterActive={() => {
            setCurrentTab('explorer');
            setFilters(prev => ({ ...prev, selectedStatus: 'Active', expiryFilter: 'all' }));
          }}
          onFilterWatchlist={() => {
            setCurrentTab('watchlist');
          }}
          onResetFilters={() => {
            setFilters(initialFilters);
          }}
        />

        {/* Tab 1: Directory Explorer */}
        {currentTab === 'explorer' && (
          <div>
            <SearchAndFilters
              filters={filters}
              setFilters={setFilters}
              availableStates={availableStates}
              totalResults={filteredOrganisations.length}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onExportCSV={handleExportCSV}
              onResetFilters={() => setFilters(initialFilters)}
            />

            {viewMode === 'table' ? (
              <OrgTable
                organisations={filteredOrganisations}
                notesMap={notesMap}
                onToggleBookmark={handleToggleBookmark}
                onSelectOrg={(org) => setSelectedOrg(org)}
              />
            ) : (
              <OrgCardGrid
                organisations={filteredOrganisations}
                notesMap={notesMap}
                onToggleBookmark={handleToggleBookmark}
                onSelectOrg={(org) => setSelectedOrg(org)}
              />
            )}
          </div>
        )}

        {/* Tab 2: Compliance Watchlist */}
        {currentTab === 'watchlist' && (
          <div>
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 mb-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <Bookmark className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-amber-950">Compliance Watchlist & Private Case Notes</h2>
                  <p className="text-xs text-amber-800">Showing {filteredOrganisations.length} organisations flagged for active due diligence or renewal monitoring.</p>
                </div>
              </div>
              <button
                onClick={handleExportCSV}
                className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                Export Watchlist CSV
              </button>
            </div>

            <SearchAndFilters
              filters={filters}
              setFilters={setFilters}
              availableStates={availableStates}
              totalResults={filteredOrganisations.length}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onExportCSV={handleExportCSV}
              onResetFilters={() => setFilters(initialFilters)}
            />

            {viewMode === 'table' ? (
              <OrgTable
                organisations={filteredOrganisations}
                notesMap={notesMap}
                onToggleBookmark={handleToggleBookmark}
                onSelectOrg={(org) => setSelectedOrg(org)}
              />
            ) : (
              <OrgCardGrid
                organisations={filteredOrganisations}
                notesMap={notesMap}
                onToggleBookmark={handleToggleBookmark}
                onSelectOrg={(org) => setSelectedOrg(org)}
              />
            )}
          </div>
        )}

        {/* Tab 3: Analytics Dashboard */}
        {currentTab === 'analytics' && (
          <AnalyticsDashboard
            organisations={organisations}
            onSelectState={(state) => {
              setFilters(prev => ({ ...prev, selectedState: state }));
              setCurrentTab('explorer');
            }}
          />
        )}
      </main>

      {/* Detail Drawer */}
      <OrgDetailDrawer
        org={selectedOrg}
        onClose={() => setSelectedOrg(null)}
        note={selectedOrg ? notesMap[selectedOrg.regNumber] : undefined}
        onSaveNote={handleSaveNote}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Data Importer Modal */}
      <DataImporterModal
        isOpen={isImporterOpen}
        onClose={() => setIsImporterOpen(false)}
        onImportComplete={(count) => {
          showToast(`Successfully imported ${count} organisations into local database!`);
        }}
      />

      {/* Local Backup & Restore Modal */}
      <LocalBackupModal
        isOpen={isBackupOpen}
        onClose={() => setIsBackupOpen(false)}
        totalOrgs={organisations.length}
        totalNotes={complianceNotes.length}
        onRestoreComplete={({ orgCount, notesCount }) => {
          showToast(`Restored ${orgCount} organisations and ${notesCount} notes from backup`);
        }}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs font-medium flex items-center space-x-2 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Comprehensive Footer with Data Source & Legal Disclaimer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-auto text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Top row: Sources and Banking mandate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2 text-slate-200 font-semibold text-xs uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Verified Public Data Source</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                All records presented in this application are compiled exclusively from official public domain disclosures, gazette notifications, and statutory return filings published by the <strong>Foreigners Division, Ministry of Home Affairs (MHA), Government of India</strong>. Official portal:{" "}
                <a 
                  href="https://fcraonline.nic.in" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-400 hover:text-blue-300 underline font-mono"
                >
                  https://fcraonline.nic.in
                </a>.
              </p>
              <p className="text-slate-500 text-[11px] mt-2">
                Covers valid registration numbers, designated associations, nature of association classifications (Social, Educational, Cultural, Religious, Economic), and historical Form FC-4 annual return public disclosures.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-slate-200 font-semibold text-xs uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Mandated FCRA Banking Hub (FCRA 2020 Amendment)</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Under Section 17 of the Foreign Contribution (Regulation) Act, 2010 (as amended by the FCRA Amendment Act, 2020), all foreign contributions must strictly land in the designated FCRA primary account opened exclusively at:
              </p>
              <div className="mt-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/80 font-mono text-[11px] text-slate-300 space-y-0.5">
                <div><strong>Bank:</strong> State Bank of India (SBI)</div>
                <div><strong>Branch:</strong> New Delhi Main Branch (NDMB), 11 Sansad Marg, New Delhi – 110001</div>
                <div><strong>IFSC Code:</strong> SBIN0000691 • <strong>Branch Code:</strong> 00691</div>
              </div>
            </div>
          </div>

          {/* Comprehensive Legal & Regulatory Disclaimer */}
          <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/30 shadow-inner text-xs text-slate-300 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Statutory & Regulatory Disclaimer</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] text-slate-400 leading-relaxed pt-1">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="block font-semibold text-slate-200 mb-1 text-xs">🏛️ Non-Affiliation Notice</span>
                <p>
                  This application is an independent, offline-first client-side tool developed by <strong>Flugelsoft Labs</strong> for non-profit researchers and compliance officers. It is <strong>not affiliated with, endorsed by, authorized by, sponsored by, or connected to the Ministry of Home Affairs (MHA), Government of India</strong>, or any statutory authority.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="block font-semibold text-slate-200 mb-1 text-xs">⚖️ No Legal or Financial Advice</span>
                <p>
                  The data and tools provided are strictly for informational and preliminary screening purposes. They do <strong>not constitute legal counsel, financial audit, or statutory certification</strong> under the Foreign Contribution (Regulation) Act, 2010 or FCRA Rules.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="block font-semibold text-slate-200 mb-1 text-xs">🔍 Mandatory Official Verification</span>
                <p>
                  FCRA certificate validity, renewal reviews, and cancellations (under Sections 12 and 14) are subject to continuous Gazette notifications. Before disbursing grants or foreign remittances, always verify live records at the official portal:{" "}
                  <a href="https://fcraonline.nic.in" target="_blank" rel="noreferrer" className="text-blue-400 underline font-mono">
                    fcraonline.nic.in
                  </a>.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 leading-relaxed">
              <strong>Limitation of Liability:</strong> Flugelsoft Labs and contributors assume no liability for errors, omissions, or actions taken in reliance upon this information. Users are solely responsible for compliance with FCRA statutory provisions.
            </div>
          </div>

          {/* Bottom copyright & offline badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px] text-slate-500 border-t border-slate-800/80">
            <div className="flex flex-wrap items-center gap-x-2 text-slate-400">
              <a href="https://flugelsoft.com" target="_blank" rel="noreferrer" className="font-semibold text-slate-200 hover:text-white transition-colors">
                © {new Date().getFullYear()} Flugelsoft Labs.
              </a>
              <span>All Rights Reserved.</span>
              <span className="text-slate-600">•</span>
              <a href="https://fcra-explorer.flugelsoft.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                fcra-explorer.flugelsoft.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Real Verified Data Only • 100% Client-Side IndexedDB</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
