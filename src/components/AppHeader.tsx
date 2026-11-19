import React from 'react';
import { 
  Building2, 
  Download, 
  Upload, 
  Database, 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  RotateCcw,
  Sparkles,
  BarChart3,
  BookmarkCheck,
  Search
} from 'lucide-react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface AppHeaderProps {
  currentTab: 'explorer' | 'watchlist' | 'analytics';
  setCurrentTab: (tab: 'explorer' | 'watchlist' | 'analytics') => void;
  onOpenImporter: () => void;
  onOpenBackup: () => void;
  onResetData: () => void;
  totalCount: number;
  bookmarkedCount: number;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenImporter,
  onOpenBackup,
  onResetData,
  totalCount,
  bookmarkedCount
}) => {
  const { isOnline } = useNetworkStatus();
  const { isInstallable, isInstalled, promptInstall } = usePWAInstall();

  return (
    <header className="sticky top-0 z-40 bg-gov-navy text-white shadow-lg border-b border-slate-800">
      {/* Top Banner: Gov portal tone & offline reassurance */}
      <div className="bg-slate-900/90 text-xs text-slate-300 py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">Public Records of FCRA Registered Associations</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">Source: MHA Official Public Disclosures (fcraonline.nic.in)</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Online / Offline status badge */}
            <div 
              className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                isOnline 
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60' 
                  : 'bg-amber-950/80 text-amber-300 border-amber-600 animate-pulse'
              }`}
              title={isOnline ? "Browser is connected" : "App is running 100% offline from local IndexedDB"}
            >
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <span>Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-400" />
                  <span>Offline Ready (IndexedDB)</span>
                </>
              )}
            </div>

            {/* Zero backend notice */}
            <div className="hidden md:flex items-center space-x-1 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Zero-Server / Local Storage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center">
                FCRA Explorer
                <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Compliance Tracker
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Foreign Contribution Regulation Act • Local-First Search & Due Diligence
            </p>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* PWA Install Button */}
          {isInstallable && (
            <button
              onClick={promptInstall}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs rounded-lg shadow-sm transition-all active:scale-95 animate-bounce"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install PWA</span>
            </button>
          )}

          {isInstalled && (
            <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>Installed App</span>
            </span>
          )}

          {/* Import CSV / JSON */}
          <button
            onClick={onOpenImporter}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors"
            title="Import official MHA FCRA CSV or JSON lists"
          >
            <Upload className="w-3.5 h-3.5 text-blue-400" />
            <span>Import Data</span>
          </button>

          {/* Backup & Restore */}
          <button
            onClick={onOpenBackup}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors"
            title="Backup or restore IndexedDB database & private notes"
          >
            <Database className="w-3.5 h-3.5 text-indigo-400" />
            <span>Backup / Sync</span>
          </button>

          {/* Reset sample */}
          <button
            onClick={onResetData}
            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            title="Reload verified official dataset (35+ registered Indian associations)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-1 border-t border-slate-800/80 pt-1">
          <button
            onClick={() => setCurrentTab('explorer')}
            className={`flex items-center space-x-2 py-2.5 px-4 text-xs font-medium border-b-2 transition-all ${
              currentTab === 'explorer'
                ? 'border-blue-400 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Directory & Explorer</span>
            <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono">
              {totalCount}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('watchlist')}
            className={`flex items-center space-x-2 py-2.5 px-4 text-xs font-medium border-b-2 transition-all ${
              currentTab === 'watchlist'
                ? 'border-amber-400 text-amber-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Compliance Watchlist</span>
            {bookmarkedCount > 0 && (
              <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                {bookmarkedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setCurrentTab('analytics')}
            className={`flex items-center space-x-2 py-2.5 px-4 text-xs font-medium border-b-2 transition-all ${
              currentTab === 'analytics'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Analytics & Trends</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
