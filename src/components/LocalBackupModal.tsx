import React, { useState, useRef } from 'react';
import { 
  X, 
  Database, 
  Download, 
  Upload, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  HardDrive
} from 'lucide-react';
import { createFullDatabaseBackup, restoreFullDatabaseBackup } from '../db/importExport';

interface LocalBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestoreComplete: (counts: { orgCount: number, notesCount: number }) => void;
  totalOrgs: number;
  totalNotes: number;
}

export const LocalBackupModal: React.FC<LocalBackupModalProps> = ({
  isOpen,
  onClose,
  onRestoreComplete,
  totalOrgs,
  totalNotes
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleExport = async () => {
    setIsExporting(true);
    setStatusMessage(null);
    try {
      await createFullDatabaseBackup();
      setStatusMessage({ type: 'success', text: 'Backup downloaded successfully! Contains all organisations, bookmarks, and private notes.' });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: `Backup export failed: ${err.message}` });
    } finally {
      setIsExporting(false);
    }
  };

  const handleFileRestore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsRestoring(true);
    setStatusMessage(null);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const content = event.target?.result as string;
        const result = await restoreFullDatabaseBackup(content);
        setStatusMessage({
          type: 'success',
          text: `Restored ${result.orgCount} organisations and ${result.notesCount} compliance notes!`
        });
        onRestoreComplete(result);
      } catch (err: any) {
        setStatusMessage({ type: 'error', text: `Restore failed: ${err.message}` });
      } finally {
        setIsRestoring(false);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Local Backup & Migration</h3>
              <p className="text-xs text-slate-500">Export or restore your private IndexedDB workspace</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current status stats */}
        <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 mb-5 text-xs">
          <div>
            <span className="text-slate-500 block">Current Stored NGOs</span>
            <strong className="text-slate-900 font-mono text-sm">{totalOrgs} records</strong>
          </div>
          <div>
            <span className="text-slate-500 block">Custom Compliance Notes</span>
            <strong className="text-indigo-700 font-mono text-sm">{totalNotes} entries</strong>
          </div>
        </div>

        {/* Action 1: Export */}
        <div className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors mb-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                <Download className="w-3.5 h-3.5 text-indigo-600" />
                <span>Export Full Local Backup (.json)</span>
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Creates a single offline JSON file containing all IndexedDB organisations, your private due-diligence notes, and bookmarks.
              </p>
            </div>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="ml-3 shrink-0 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              {isExporting ? 'Saving...' : 'Export'}
            </button>
          </div>
        </div>

        {/* Action 2: Restore */}
        <div className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors mb-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                <Upload className="w-3.5 h-3.5 text-blue-600" />
                <span>Restore Backup to Browser</span>
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Import a previously saved backup file to restore your entire database and notes on any device.
              </p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileRestore}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isRestoring}
              className="ml-3 shrink-0 px-3.5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              {isRestoring ? 'Restoring...' : 'Restore File'}
            </button>
          </div>
        </div>

        {statusMessage && (
          <div className={`p-3 rounded-xl text-xs flex items-center space-x-2 mb-4 border ${
            statusMessage.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
              : 'bg-rose-50 text-rose-800 border-rose-300'
          }`}>
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <div>{statusMessage.text}</div>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
