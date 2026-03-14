import { DragDropZone } from '../DragDropZone';
import { Clapperboard, Music } from 'lucide-react';

export default function EternityLoop() {
  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white">Eternity Loop</h1>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span>Loop short video + audio into hours-long content</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>480p compressed</span>
        </p>
      </div>
      
      <div className="space-y-8 border border-white/5 bg-[#0d1117]/30 p-8 rounded-2xl">
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">1. Source Video Fragment</label>
          <DragDropZone icon={Clapperboard} description="— MP4 clip to loop" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">2. Source Audio Fragment</label>
          <DragDropZone icon={Music} description="— MP3/WAV to loop" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">3. Target Duration</label>
          <div className="flex items-center gap-4">
            <input type="number" className="bg-[#0d1117] border border-white/10 rounded-xl p-4 w-32 text-center text-white text-lg focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all" placeholder="10" />
            <span className="text-sm text-gray-400 font-bold tracking-[0.2em] uppercase">HOURS</span>
          </div>
        </div>
        
        <button className="w-full py-5 rounded-xl border border-white/10 bg-[#0d1117]/80 text-gray-400 font-bold tracking-[0.2em] uppercase hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all flex items-center justify-center gap-3 mt-8 group">
          <span className="group-hover:translate-x-1 transition-transform">▶</span> Start Loop Synthesis
        </button>
      </div>
    </div>
  );
}
