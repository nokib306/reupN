import { Upload, FileVideo, MousePointer2, File, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';

export function DragDropZone({ 
  label, 
  icon: Icon = Upload, 
  description = "VIDEO FILE HERE OR TAP TO BROWSE",
  accept = "video/*",
  onFileSelect
}: { 
  label?: string, 
  icon?: any, 
  description?: string,
  accept?: string,
  onFileSelect?: (file: File | null) => void
}) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0] || null;
    setFile(droppedFile);
    onFileSelect?.(droppedFile);
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">{label}</label>}
      
      <motion.div 
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="relative group cursor-pointer"
      >
        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden" 
          accept={accept}
          onChange={handleFileChange}
        />

        <div className={`absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/20 to-[#ff2a5f]/20 rounded-2xl blur transition duration-500 ${isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
        
        <div className={`relative border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-sm 
          ${isDragging 
            ? 'border-[#00f0ff] bg-[#0d1117]/90' 
            : 'border-white/5 bg-[#0d1117]/50 group-hover:border-[#00f0ff]/30 group-hover:bg-[#0d1117]/80'
          }`}
        >
          <AnimatePresence mode="wait">
            {file ? (
              <motion.div 
                key="file-info"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center mb-4">
                  <File className="w-8 h-8 text-[#00f0ff]" />
                </div>
                <span className="text-sm font-black text-white uppercase tracking-widest mb-1 truncate max-w-[250px]">
                  {file.name}
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </span>
                <button 
                  onClick={clearFile}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-500 transition-all group/btn"
                >
                  <X className="w-3 h-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Remove File</span>
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/20 transition-all duration-500 group-hover:rotate-6">
                  <Icon className={`w-8 h-8 transition-colors ${isDragging ? 'text-[#00f0ff]' : 'text-gray-500 group-hover:text-[#00f0ff]'}`} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-sm font-black text-white uppercase tracking-widest">
                      {isDragging ? 'DROP TO UPLOAD' : 'DRAG & DROP'}
                    </span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{description}</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">MP4, MOV, MKV • MAX 2GB</p>
                </div>

                <div className={`absolute bottom-4 right-4 transition-opacity duration-300 ${isDragging ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                    <MousePointer2 className="w-3 h-3 text-[#00f0ff]" />
                    <span className="text-[8px] font-black text-[#00f0ff] uppercase tracking-widest">Select File</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
