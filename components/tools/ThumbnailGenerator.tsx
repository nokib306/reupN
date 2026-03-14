import { DragDropZone } from '../DragDropZone';
import { Clapperboard, Image as ImageIcon, Zap, Sparkles, Play, Settings, Activity, ChevronDown, Shield, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export default function ThumbnailGenerator() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffb000]/10 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-[#ffb000]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Thumbnail <span className="text-[#ffb000]">Generator</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>FRAME EXTRACTION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>AI STYLIZATION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>VIRAL OPTIMIZATION</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Render Engine</span>
            <span className="text-xs font-mono text-[#ffb000]">v6.1</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">AI Model</span>
            <span className="text-xs font-mono text-[#00f0ff]">VISION-X</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#ffb000]" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">01. Source Video File</span>
                </div>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">MP4 / MKV / MOV</span>
              </div>
              <DragDropZone icon={Clapperboard} description="Drop video to extract frames" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ffb000]" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">02. Overlay Text (Optional)</span>
                </div>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Auto-Styled</span>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffb000]/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <input 
                  type="text" 
                  className="relative w-full bg-[#020408] border border-white/10 rounded-2xl px-6 py-5 text-white font-bold focus:outline-none focus:border-[#ffb000]/50 transition-all" 
                  placeholder="Enter catchy thumbnail title..." 
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full py-6 rounded-2xl bg-[#ffb000]/10 border border-[#ffb000]/30 text-[#ffb000] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#ffb000]/20 transition-all flex items-center justify-center gap-4 group shadow-[0_0_30px_rgba(255,176,0,0.1)]">
                <ImageIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Generate Viral Thumbnails
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Parameters */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-4 h-4 text-[#ffb000]" />
              <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Stylization Parameters</h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Visual Style</span>
                <div className="relative group">
                  <select className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-[11px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-[#ffb000]/50 appearance-none transition-all cursor-pointer">
                    <option>🔥 Viral (High Contrast)</option>
                    <option>🎬 Cinematic (Moody)</option>
                    <option>😱 Reaction (Face Zoom)</option>
                    <option>Raw (No Filter)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-600">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Frame Extraction Count</span>
                  <span className="text-[10px] font-mono text-[#ffb000]">03</span>
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="number" 
                    className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-center text-[#ffb000] font-mono text-xl focus:outline-none focus:border-[#ffb000]/50 transition-all" 
                    defaultValue={3} 
                  />
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Frames</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Activity className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Processing Node</span>
                    <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">ID: GPU-04</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Quality Guard</span>
                    <span className="text-[8px] font-bold text-[#00ff9d] uppercase tracking-widest">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#ffb000]/5 border border-[#ffb000]/10">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-4 h-4 text-[#ffb000]" />
              <span className="text-[10px] font-black text-[#ffb000] uppercase tracking-widest">AI Insight</span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed italic">
              &quot;The &apos;Reaction&apos; style typically yields 15% higher CTR on YouTube Shorts when combined with a bold title.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
