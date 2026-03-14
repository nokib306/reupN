import { Upload, FileVideo, MousePointer2 } from 'lucide-react';
import { motion } from 'motion/react';

export function DragDropZone({ label, icon: Icon = Upload, description = "VIDEO FILE HERE OR TAP TO BROWSE" }: { label?: string, icon?: any, description?: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/20 to-[#ff2a5f]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative border-2 border-dashed border-white/5 bg-[#0d1117]/50 backdrop-blur-sm rounded-2xl p-12 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#00f0ff]/30 group-hover:bg-[#0d1117]/80">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/20 transition-all duration-500 group-hover:rotate-6">
          <Icon className="w-8 h-8 text-gray-500 group-hover:text-[#00f0ff] transition-colors" />
        </div>
        
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-black text-white uppercase tracking-widest">DRAG & DROP</span>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{description}</span>
          </div>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">MP4, MOV, MKV • MAX 2GB</p>
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">
            <MousePointer2 className="w-3 h-3 text-[#00f0ff]" />
            <span className="text-[8px] font-black text-[#00f0ff] uppercase tracking-widest">Select File</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
