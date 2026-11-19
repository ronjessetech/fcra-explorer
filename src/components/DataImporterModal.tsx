import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  FileSpreadsheet, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  Download,
  Info,
  Sparkles
} from 'lucide-react';
import { 
  parseCSVFile, 
  parseJSONFile, 
  importOrganisations, 
  downloadSampleCSVTemplate,
  downloadNorthEastCSV,
  reloadVerifiedNorthEastDataset
} from '../db/importExport';
import { ImportPreviewResult, Organisation } from '../types/fcra';

interface DataImporterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportComplete: (count: number) => void;
}

export const DataImporterModal: React.FC<DataImporterModalProps> = ({
  isOpen,
  onClose,
  onImportComplete
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [importMode, setImportMode] = useState<'append' | 'replace'>('append');
  const [preview, setPreview] = useState<ImportPreviewResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      processSelectedFile(selected);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      processSelectedFile(dropped);
    }
  };

  const processSelectedFile = (selected: File) => {
    setFile(selected);
    setErrorMessage(null);
    setPreview(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) return;

      try {
        let result: ImportPreviewResult;
        if (selected.name.endsWith('.json')) {
          result = parseJSONFile(content);
        } else {
          result = parseCSVFile(content);
        }

        setPreview(result);
        if (result.validRows.length === 0 && result.errors.length > 0) {
          setErrorMessage(result.errors[0]);
        }
      } catch (err: any) {
        setErrorMessage(`Parsing failed: ${err.message}`);
      }
    };

    reader.readAsText(selected);
  };

  const handleExecuteImport = async () => {
    if (!preview || preview.validRows.length === 0) return;
    setIsProcessing(true);
    try {
      const count = await importOrganisations(preview.validRows, importMode);
      onImportComplete(count);
      onClose();
    } catch (err: any) {
      setErrorMessage(`Import to IndexedDB failed: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Local FCRA Data Importer</h3>
              <p className="text-xs text-slate-500">Parse & ingest official CSV/JSON files directly into browser IndexedDB</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Automated 1-Click Sync Banner */}
        <div className="mb-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-900">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Automate: 1-Click Master North East Registry Sync</span>
            </div>
            <p className="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
              Instantly ingest all 68 verified authentic organisations across all 8 North East states with complete statutory details and zero manual upload.
            </p>
          </div>
          <button
            type="button"
            disabled={isProcessing}
            onClick={async () => {
              setIsProcessing(true);
              const count = await reloadVerifiedNorthEastDataset();
              setIsProcessing(false);
              onImportComplete(count);
              onClose();
            }}
            className="shrink-0 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors self-start sm:self-center"
          >
            {isProcessing ? 'Syncing...' : 'Auto-Sync Now'}
          </button>
        </div>

        {/* Official Portal Step-by-Step Guide */}
        <div className="mb-4 bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700">
          <div className="flex items-center justify-between font-semibold text-slate-800 mb-1.5">
            <span className="flex items-center space-x-1.5">
              <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>How to fetch official data from fcraonline.nic.in</span>
            </span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-600 leading-relaxed">
            <li>Visit the official portal at <a href="https://fcraonline.nic.in" target="_blank" rel="noreferrer" className="text-blue-600 underline font-medium">fcraonline.nic.in</a>.</li>
            <li>Go to <strong>Services / Information</strong> &rarr; <strong>Registered Associations (State-wise)</strong>.</li>
            <li>Select the desired state (e.g., <em>Assam, Meghalaya, Nagaland</em>) and solve the security CAPTCHA.</li>
            <li>Copy or export the table into a spreadsheet and save as <strong>.CSV</strong>.</li>
            <li>Drop the file above; the app automatically recognizes official MHA column headers!</li>
          </ol>
        </div>

        {/* Drag & Drop Area */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer bg-slate-50 hover:bg-blue-50/30 transition-all mb-4"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".csv,.json"
            className="hidden"
          />
          <FileSpreadsheet className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-xs font-semibold text-slate-800">
            {file ? file.name : "Click to select or drag & drop FCRA CSV or JSON file"}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Supports official MHA column exports, state NGO directories, or custom datasets.
          </p>
        </div>

        {/* Import Mode Options */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Import Strategy
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setImportMode('append')}
              className={`p-3 text-left rounded-xl border text-xs transition-all ${
                importMode === 'append'
                  ? 'border-blue-500 bg-blue-50/50 text-blue-900 font-medium'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="font-semibold text-slate-900">Append / Merge (Upsert)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Keep existing records, update duplicates by Reg No</div>
            </button>

            <button
              type="button"
              onClick={() => setImportMode('replace')}
              className={`p-3 text-left rounded-xl border text-xs transition-all ${
                importMode === 'replace'
                  ? 'border-amber-500 bg-amber-50/50 text-amber-900 font-medium'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="font-semibold text-slate-900">Replace Entire Store</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Wipe existing organisations and load this file fresh</div>
            </button>
          </div>
        </div>

        {/* Validation & Preview Summary */}
        {preview && (
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 mb-4 text-xs space-y-2">
            <div className="flex items-center justify-between font-semibold text-slate-800">
              <span className="flex items-center space-x-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Ready to import {preview.validRows.length} valid organisations</span>
              </span>
              <span className="text-slate-500 font-mono text-[11px]">
                {preview.totalRows} rows parsed
              </span>
            </div>

            {preview.validRows.length > 0 && (
              <div className="text-[11px] text-slate-600">
                First record: <strong className="text-slate-900">{preview.validRows[0].name}</strong> ({preview.validRows[0].regNumber} — {preview.validRows[0].state})
              </div>
            )}

            {preview.errors.length > 0 && (
              <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200 space-y-0.5 max-h-24 overflow-y-auto">
                <div className="font-semibold">{preview.errors.length} row warning(s):</div>
                {preview.errors.slice(0, 3).map((err, i) => (
                  <div key={i}>{err}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 text-xs flex items-start space-x-2 mb-4">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>{errorMessage}</div>
          </div>
        )}

        {/* Actions & Quick North East Utilities */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={downloadSampleCSVTemplate}
              className="flex items-center space-x-1.5 text-slate-600 hover:text-slate-800 text-xs font-medium"
              title="Download standard import format template"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV Template</span>
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={downloadNorthEastCSV}
              className="flex items-center space-x-1.5 text-emerald-600 hover:text-emerald-800 text-xs font-semibold"
              title="Download verified CSV dataset of all 8 North Eastern states"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download North East CSV</span>
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={async () => {
                setIsProcessing(true);
                const count = await reloadVerifiedNorthEastDataset();
                setIsProcessing(false);
                onImportComplete(count);
                onClose();
              }}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-xs font-medium"
              title="Instantly re-sync and load all verified North East organisations into local database"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Re-Sync NE Data</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!preview || preview.validRows.length === 0 || isProcessing}
              onClick={handleExecuteImport}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              {isProcessing ? 'Importing...' : `Import ${preview ? preview.validRows.length : 0} Records`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
