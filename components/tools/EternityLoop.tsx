import { useState } from 'react';
import { DragDropZone } from '../DragDropZone';
import { Clapperboard, Music, Infinity, Zap, Clock, Settings, Play, Shield, Activity, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export default function EternityLoop() {
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
        return prev + 5;
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
              <Infinity className="w-5 h-5 text-[#ffb000]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Eternity <span className="text-[#ffb000]">Loop</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>TEMPORAL SYNTHESIS</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>SEAMLESS TRANSITIONS</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>480P OPTIMIZED</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Synthesis Engine</span>
            <span className="text-xs font-mono text-[#ffb000]">v4.2</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Max Duration</span>
            <span className="text-xs font-mono text-white">24H</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Configuration */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-[#ffb000]" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">01. Source Video Fragment</span>
                </div>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">MP4 / MKV</span>
              </div>
              <DragDropZone icon={Clapperboard} description="Drop video clip to loop" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#ffb000]" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">02. Source Audio Fragment</span>
                </div>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">MP3 / WAV</span>
              </div>
              <DragDropZone icon={Music} description="Drop audio track to loop" />
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
                {isProcessing ? `SYNTHESIZING ${progress}%` : 'Initialize Synthesis'}
              </button>

              {isProcessing && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[9px] font-black text-[#ffb000] uppercase tracking-widest">Temporal Synthesis</span>
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
          </div>
        </div>

        {/* Right Column: Parameters */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-4 h-4 text-[#ffb000]" />
              <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Loop Parameters</h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Target Duration</span>
                  <span className="text-[10px] font-mono text-[#ffb000]">10.0H</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input 
                      type="number" 
                      className="w-full bg-[#020408] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white font-mono text-xl focus:outline-none focus:border-[#ffb000]/50 transition-all" 
                      placeholder="10" 
                    />
                  </div>
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">HOURS</span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Output Quality</span>
                <div className="grid grid-cols-2 gap-2">
                  {['480P', '720P'].map((q) => (
                    <button 
                      key={q}
                      className={clsx(
                        "py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all",
                        q === '480P' 
                          ? "bg-[#ffb000]/10 border-[#ffb000]/30 text-[#ffb000]" 
                          : "bg-white/5 border-white/5 text-gray-600 hover:text-gray-400"
                      )}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Seamless Sync</span>
                    <span className="text-[8px] font-bold text-gray-600 uppercase">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Activity className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Bitrate Control</span>
                    <span className="text-[8px] font-bold text-gray-600 uppercase">Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#ffb000]/5 border border-[#ffb000]/10">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-4 h-4 text-[#ffb000]" />
              <span className="text-[10px] font-black text-[#ffb000] uppercase tracking-widest">Synthesis Tip</span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed italic">
              &quot;For best results, ensure the source video fragment has a matching start and end frame for a truly infinite loop.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
