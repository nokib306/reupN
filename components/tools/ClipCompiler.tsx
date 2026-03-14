import { DragDropZone } from '../DragDropZone';
import { Clapperboard, Video, Shuffle, Music, Settings, ShieldAlert, Flame } from 'lucide-react';

export default function ClipCompiler() {
  return (
    <div className="max-w-4xl pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide flex items-center gap-4 text-white">
          Clip Compiler 
          <span className="text-[10px] text-[#ff2a5f] uppercase tracking-[0.2em] border border-[#ff2a5f]/30 bg-[#ff2a5f]/10 px-3 py-1.5 rounded-md font-bold">
            PRO 3000 YEARS EDIT
          </span>
        </h1>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span>Auto-fetch links OR combine local clips</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>With intro/outro/transitions</span>
        </p>
      </div>
      
      <div className="mb-8 border border-[#ff2a5f]/30 bg-[#ff2a5f]/5 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#ff2a5f]"></div>
        <h3 className="text-[#ff2a5f] font-bold flex items-center gap-3 mb-3 tracking-wide">
          <ShieldAlert className="w-5 h-5" /> ACTIVE BYPASS INJECTED: MOVIE RECAP MODE
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          I analyzed the &quot;Movie Recap&quot; script. Your output will automatically have extreme color filters (Saturation x2.5, Contrast x1.3), a Horizontal Flip, and a 1.02x Audio Speed+Pitch Shift. This breaks both the Content ID video hash AND the audio fingerprint instantly.
        </p>
      </div>
      
      <div className="border border-[#00f0ff]/20 bg-[#00f0ff]/5 rounded-2xl p-8 mb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]"></div>
        <h3 className="text-[#00f0ff] font-bold flex items-center gap-3 mb-3 tracking-wide">
          <Flame className="w-5 h-5" /> THE 3000 YEARS METHOD: AUTO-FETCH URLS
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Paste links from Reddit, TikTok, YouTube Shorts, or IG (One per line). The bot will auto-download and compile them into a seamless video!
        </p>
        
        <button className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#ffb000] border border-[#ffb000]/30 bg-[#ffb000]/10 px-4 py-2 rounded-lg mb-4 hover:bg-[#ffb000]/20 transition-colors">
          <Settings className="w-4 h-4" /> Reddit API Settings (Click to expand)
        </button>
        
        <textarea 
          className="w-full h-40 bg-[#0d1117] border border-white/10 rounded-xl p-5 text-sm text-gray-300 font-mono focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 resize-none transition-all leading-relaxed"
          placeholder="https://www.reddit.com/r/gumballmemes/comments/...&#10;https://www.tiktok.com/@user/video/...&#10;https://youtube.com/shorts/..."
          defaultValue={"https://www.reddit.com/r/gumballmemes/comments/...\nhttps://www.tiktok.com/@user/video/...\nhttps://youtube.com/shorts/..."}
        ></textarea>
      </div>
      
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="h-px bg-white/10 flex-1"></div>
        <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">OR MANUAL UPLOAD</span>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>
      
      <div className="space-y-8 border border-white/5 bg-[#0d1117]/30 p-8 rounded-2xl">
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">1. Upload Video Clips (Multiple)</label>
          <DragDropZone icon={Clapperboard} description="— multiple clips here" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">2. Intro Video (Optional)</label>
          <DragDropZone icon={Video} description="— plays at the beginning" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">3. Transition Video (Optional)</label>
          <DragDropZone icon={Shuffle} description="— inserted between clips" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">4. Outro Video (Optional)</label>
          <DragDropZone icon={Clapperboard} description="— plays at the end" />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">5. Background Music (Optional)</label>
          <DragDropZone icon={Music} description="— overlayed at low volume" />
        </div>
        
        <button className="w-full py-5 rounded-xl border border-white/10 bg-[#0d1117]/80 text-gray-400 font-bold tracking-[0.2em] uppercase hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all flex items-center justify-center gap-3 mt-8 group">
          <span className="group-hover:translate-x-1 transition-transform">▶</span> Compile Video
        </button>
      </div>
    </div>
  );
}
