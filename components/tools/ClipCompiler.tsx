import { DragDropZone } from '../DragDropZone';
import { Clapperboard, Video, Shuffle, Music, Settings, ShieldAlert, Flame, Zap, Play, Terminal, Layers, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export default function ClipCompiler() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffb000]/10 flex items-center justify-center">
              <Clapperboard className="w-5 h-5 text-[#ffb000]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Clip <span className="text-[#ffb000]">Compiler</span></h1>
            <span className="text-[10px] text-[#ff2a5f] uppercase tracking-[0.2em] border border-[#ff2a5f]/30 bg-[#ff2a5f]/10 px-3 py-1.5 rounded-md font-black ml-2">
              PRO 3000Y
            </span>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>MULTI-SOURCE AGGREGATION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>AUTO-TRANSITIONS</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>BYPASS INJECTION</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Compiler Engine</span>
            <span className="text-xs font-mono text-[#ffb000]">v10.2</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Active Bypass</span>
            <span className="text-xs font-mono text-[#ff2a5f]">ENABLED</span>
          </div>
        </div>
      </div>

      {/* Bypass Alert */}
      <div className="mb-12 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff2a5f]/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative glass-panel p-8 rounded-3xl border border-[#ff2a5f]/20 bg-[#ff2a5f]/5">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#ff2a5f]/10 flex items-center justify-center shrink-0 border border-[#ff2a5f]/20">
              <ShieldAlert className="w-6 h-6 text-[#ff2a5f]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[#ff2a5f] font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                MOVIE RECAP MODE: ACTIVE BYPASS INJECTED
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Extreme color filters (Saturation x2.5, Contrast x1.3), Horizontal Flip, and 1.02x Audio Speed+Pitch Shift applied. 
                <span className="text-gray-500 ml-2 italic">Breaking Content ID video hash and audio fingerprint in real-time.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: URL Input & Manual Upload */}
        <div className="lg:col-span-8 space-y-8">
          {/* URL Input Area */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Flame className="w-4 h-4 text-[#00f0ff]" />
                <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Auto-Fetch URLs</h3>
              </div>
              <button className="flex items-center gap-2 text-[8px] font-black tracking-widest text-[#ffb000] border border-[#ffb000]/30 bg-[#ffb000]/10 px-3 py-1.5 rounded-lg hover:bg-[#ffb000]/20 transition-colors uppercase">
                <Settings className="w-3 h-3" /> API Config
              </button>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f0ff]/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <textarea 
                className="relative w-full h-48 bg-[#020408] border border-white/10 rounded-2xl p-6 text-sm text-gray-300 font-mono focus:outline-none focus:border-[#00f0ff]/50 transition-all leading-relaxed resize-none"
                placeholder="Paste links from Reddit, TikTok, YouTube Shorts, or IG (One per line)..."
                defaultValue={"https://www.reddit.com/r/gumballmemes/comments/...\nhttps://www.tiktok.com/@user/video/...\nhttps://youtube.com/shorts/..."}
              ></textarea>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Auto-Download Active</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-gray-700" />
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Parsing Engine: v10.4</span>
              </div>
            </div>
          </div>

          {/* Manual Upload Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 px-2">
              <div className="h-px bg-white/5 flex-1"></div>
              <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em]">Manual Sequence Assembly</span>
              <div className="h-px bg-white/5 flex-1"></div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-2">01. Main Clips</span>
                  <DragDropZone icon={Clapperboard} description="Multiple video clips" />
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-2">02. Intro Fragment</span>
                  <DragDropZone icon={Video} description="Optional intro clip" />
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-2">03. Transitions</span>
                  <DragDropZone icon={Shuffle} description="Optional transition clips" />
                </div>
                <div className="space-y-3">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-2">04. Outro Fragment</span>
                  <DragDropZone icon={Clapperboard} description="Optional outro clip" />
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest px-2">05. Background Audio Layer</span>
                <DragDropZone icon={Music} description="Optional background music" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Controls & Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-4 h-4 text-[#ffb000]" />
              <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Compilation Settings</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Output Format</span>
                <div className="grid grid-cols-2 gap-2">
                  {['MP4 (H.264)', 'MKV (H.265)'].map((f) => (
                    <button 
                      key={f}
                      className={clsx(
                        "py-3 rounded-xl border text-[9px] font-black uppercase tracking-widest transition-all",
                        f === 'MP4 (H.264)' 
                          ? "bg-[#ffb000]/10 border-[#ffb000]/30 text-[#ffb000]" 
                          : "bg-white/5 border-white/5 text-gray-600 hover:text-gray-400"
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Audio Normalization</span>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Target LUFS</span>
                  <span className="text-[10px] font-mono text-white">-14.0</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Activity className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">GPU Acceleration</span>
                    <span className="text-[8px] font-bold text-[#00ff9d] uppercase tracking-widest">Active</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full py-6 rounded-2xl bg-[#ffb000]/10 border border-[#ffb000]/30 text-[#ffb000] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#ffb000]/20 transition-all flex items-center justify-center gap-4 group shadow-[0_0_30px_rgba(255,176,0,0.1)]">
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  Start Compilation
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#ffb000]/5 border border-[#ffb000]/10">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-4 h-4 text-[#ffb000]" />
              <span className="text-[10px] font-black text-[#ffb000] uppercase tracking-widest">Pro Tip</span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed italic">
              &quot;Using transitions between every 3 clips significantly improves audience retention metrics on TikTok and Reels.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
