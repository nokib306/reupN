import { DragDropZone } from '../DragDropZone';
import { Clapperboard, Image as ImageIcon } from 'lucide-react';

export default function ThumbnailGenerator() {
  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white">Thumbnail Generator</h1>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span>Generate thumbnails from your video</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>Auto-extract best frames</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>Custom styles</span>
        </p>
      </div>
      
      <div className="space-y-8 border border-white/5 bg-[#0d1117]/30 p-8 rounded-2xl">
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">1. Upload Video</label>
          <DragDropZone icon={Clapperboard} description="— video here or tap to select" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">2. Style</label>
          <div className="relative">
            <select className="w-full bg-[#0d1117] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 appearance-none transition-all cursor-pointer">
              <option>🔥 Viral (Bright + High Contrast)</option>
              <option>🎬 Cinematic (Moody + Letterbox)</option>
              <option>😱 Reaction (Face Zoom + Outline)</option>
              <option>Raw (No Filter)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">3. Title Text (Optional)</label>
          <input 
            type="text" 
            className="w-full bg-[#0d1117] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all" 
            placeholder="Enter thumbnail title..." 
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">4. Number of Thumbnails</label>
          <div className="flex items-center gap-4">
            <input type="number" className="bg-[#0d1117] border border-white/10 rounded-xl p-4 w-32 text-center text-[#00f0ff] text-xl font-mono focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all" defaultValue={3} />
            <span className="text-sm text-gray-400 font-bold tracking-[0.2em] uppercase">Frames</span>
          </div>
        </div>
        
        <button className="w-full py-5 rounded-xl border border-white/10 bg-[#0d1117]/80 text-gray-400 font-bold tracking-[0.2em] uppercase hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all flex items-center justify-center gap-3 mt-8 group">
          <ImageIcon className="w-5 h-5 group-hover:scale-110 transition-transform" /> Generate Thumbnails
        </button>
      </div>
    </div>
  );
}
