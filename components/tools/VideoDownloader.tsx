import { useState } from 'react';
import { Download, Globe, Zap, Shield, Play, Settings, Activity, Link as LinkIcon, ChevronDown, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export default function VideoDownloader() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const startProcessing = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsProcessing(false), 1000);
          return 100;
        }
        return prev + 4;
      });
    }, 100);
  };
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffb000]/10 flex items-center justify-center">
              <Download className="w-5 h-5 text-[#ffb000]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Video <span className="text-[#ffb000]">Downloader</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>UNIVERSAL PARSING</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>HIGH-SPEED BUFFER</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>NO RATE LIMITS</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Download Engine</span>
            <span className="text-xs font-mono text-[#ffb000]">v8.4</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Bandwidth</span>
            <span className="text-xs font-mono text-[#00f0ff]">UNLIMITED</span>
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
                  <LinkIcon className="w-4 h-4 text-[#ffb000]" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">01. Target Resource URL</span>
                </div>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Supported: YT, TT, IG, FB</span>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffb000]/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <input 
                  type="text" 
                  className="relative w-full bg-[#020408] border border-white/10 rounded-2xl pl-6 pr-4 py-6 text-white font-bold focus:outline-none focus:border-[#ffb000]/50 transition-all" 
                  placeholder="Paste video or social media URL here..." 
                />
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <button 
                onClick={startProcessing}
                disabled={isProcessing}
                className={clsx(
                  "w-full py-6 rounded-2xl border font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 group shadow-[0_0_30px_rgba(255,176,0,0.1)]",
                  isProcessing 
                    ? "bg-white/5 border-white/10 text-gray-500 cursor-not-allowed" 
                    : "bg-[#ffb000]/10 border-[#ffb000]/30 text-[#ffb000] hover:bg-[#ffb000]/20"
                )}
              >
                {isProcessing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                )}
                {isProcessing ? `DOWNLOADING ${progress}%` : 'Initialize Download'}
              </button>

              {isProcessing && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[9px] font-black text-[#ffb000] uppercase tracking-widest">Fetching Stream</span>
                    <span className="text-[9px] font-mono text-[#ffb000]">{progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-[#ffb000]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse"></div>
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Proxy Node Active</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-gray-700" />
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Encrypted Tunnel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Parameters */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-4 h-4 text-[#ffb000]" />
              <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Download Parameters</h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Target Quality</span>
                <div className="relative group">
                  <select className="w-full bg-[#020408] border border-white/10 rounded-xl px-4 py-4 text-[11px] font-black text-white uppercase tracking-widest focus:outline-none focus:border-[#ffb000]/50 appearance-none transition-all cursor-pointer">
                    <option>720p (Standard)</option>
                    <option>1080p (High Def)</option>
                    <option>4K (Ultra High Def)</option>
                    <option>Audio Only (MP3 320kbps)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-600">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Download Mode</span>
                <div className="grid grid-cols-2 gap-2">
                  {['DIRECT', 'PROXY'].map((m) => (
                    <button 
                      key={m}
                      className={clsx(
                        "py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all",
                        m === 'DIRECT' 
                          ? "bg-[#ffb000]/10 border-[#ffb000]/30 text-[#ffb000]" 
                          : "bg-white/5 border-white/5 text-gray-600 hover:text-gray-400"
                      )}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Activity className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Server Load</span>
                    <span className="text-[8px] font-bold text-gray-600 uppercase">12% - OPTIMAL</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">CDN Status</span>
                    <span className="text-[8px] font-bold text-[#00ff9d] uppercase tracking-widest">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#ffb000]/5 border border-[#ffb000]/10">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-4 h-4 text-[#ffb000]" />
              <span className="text-[10px] font-black text-[#ffb000] uppercase tracking-widest">Download Tip</span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed italic">
              &quot;Using &apos;Audio Only&apos; mode is 10x faster and perfect for extracting high-quality background music from viral clips.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
