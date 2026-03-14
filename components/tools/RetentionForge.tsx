import { useState } from 'react';
import { Flame, Layers, SplitSquareVertical, Mic2, Zap, Play, Settings2, ShieldAlert, Activity, Cpu, Sparkles, Wand2 } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

const viralFormats = [
  {
    id: 'split-screen',
    title: 'Brain-Rot Split Screen',
    subtitle: 'TikTok / Shorts Meta',
    description: 'Top half: Copyrighted content. Bottom half: Satisfying gameplay (GTA V, Subway Surfers, Kinetic Sand). Destroys attention span, skyrockets retention.',
    icon: SplitSquareVertical,
    color: 'text-[#00f0ff]',
    bg: 'bg-[#00f0ff]/10',
    border: 'border-[#00f0ff]/30',
  },
  {
    id: 'ai-recap',
    title: 'AI Voice Movie Recap',
    subtitle: 'High-Drama Storytelling',
    description: 'Chops movie into 5-second fast-paced clips. Overlays an aggressive, highly dramatized AI voice (ElevenLabs style) to hook viewers in the first 3 seconds.',
    icon: Mic2,
    color: 'text-[#ff00ff]',
    bg: 'bg-[#ff00ff]/10',
    border: 'border-[#ff00ff]/30',
  },
  {
    id: 'sigma-phonk',
    title: 'Sigma / Phonk Edit',
    subtitle: 'Aesthetic Viral Machine',
    description: 'Heavy color grading, slow-motion interpolation, and trending heavy bass Phonk music. Perfect for movies like American Psycho, Peaky Blinders, or Fight Club.',
    icon: Zap,
    color: 'text-[#ffb000]',
    bg: 'bg-[#ffb000]/10',
    border: 'border-[#ffb000]/30',
  }
];

export default function RetentionForge() {
  const [activeFormat, setActiveFormat] = useState(viralFormats[0].id);

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff4400]/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-[#ff4400]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Retention <span className="text-[#ff4400]">Forge</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>KINGMAKER ALGORITHM</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>1M VIEWS PAYLOAD</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>VIRAL ARCHITECTURE</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Viral Potential</span>
            <span className="text-xs font-mono text-[#00ff9d]">EXTREME</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Algorithm Sync</span>
            <span className="text-xs font-mono text-[#00f0ff]">98.4%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Format Selection */}
        <div className="lg:col-span-4 space-y-4">
          <div className="px-2 mb-4 flex items-center justify-between">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Select Viral Payload</span>
            <Activity className="w-3 h-3 text-gray-700" />
          </div>
          
          <div className="space-y-2">
            {viralFormats.map((format) => {
              const isActive = activeFormat === format.id;
              const Icon = format.icon;
              return (
                <button
                  key={format.id}
                  onClick={() => setActiveFormat(format.id)}
                  className={clsx(
                    "w-full group relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-300",
                    isActive 
                      ? "bg-white/5 text-white" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-format"
                      className={clsx("absolute inset-0 border rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none", format.border)}
                    />
                  )}
                  
                  <div className={clsx(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0",
                    isActive ? format.bg : "bg-white/5 text-gray-600 group-hover:text-gray-400"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="text-left relative z-10">
                    <h3 className={clsx("font-black text-sm uppercase tracking-tight mb-1", isActive ? "text-white" : "text-gray-400")}>{format.title}</h3>
                    <p className={clsx("text-[9px] font-mono uppercase tracking-widest", isActive ? format.color : "text-gray-600")}>{format.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-6 rounded-3xl bg-[#ff4400]/5 border border-[#ff4400]/10 mt-8">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-4 h-4 text-[#ff4400]" />
              <span className="text-[10px] font-black text-[#ff4400] uppercase tracking-widest">Pro Tip</span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed">
              &quot;Brain-Rot&quot; formats currently have a 400% higher retention rate on TikTok compared to standard edits.
            </p>
          </div>
        </div>

        {/* Right Column: Configuration */}
        <div className="lg:col-span-8 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4400]/20 to-[#ff2a5f]/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative glass-panel p-8 rounded-3xl space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Settings2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <h2 className="text-sm font-black text-white uppercase tracking-widest">Payload Configuration</h2>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[8px] font-black text-[#00ff9d] uppercase tracking-widest">Optimized</div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-sm text-gray-400 leading-relaxed font-medium italic">
                  &quot;{viralFormats.find(f => f.id === activeFormat)?.description}&quot;
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFormat}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {activeFormat === 'split-screen' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">Bottom Half Source</label>
                        <select className="w-full bg-[#020408] border border-white/10 rounded-2xl p-5 text-sm font-bold text-white focus:outline-none focus:border-[#00f0ff]/50 transition-all appearance-none cursor-pointer">
                          <option>GTA V Mega Ramp (Auto-fetch)</option>
                          <option>Subway Surfers No-Coin Run</option>
                          <option>Kinetic Sand Cutting ASMR</option>
                          <option>Minecraft Parkour</option>
                          <option>Custom Local File...</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center">
                            <Wand2 className="w-5 h-5 text-[#00f0ff]" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-tight">Auto-Caption Generation</h4>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Hormozi-style dynamic subtitles</p>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-[#00f0ff]/20 rounded-full relative border border-[#00f0ff]/30">
                          <div className="absolute top-1 right-1 w-4 h-4 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFormat === 'ai-recap' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">AI Voice Model</label>
                        <select className="w-full bg-[#020408] border border-white/10 rounded-2xl p-5 text-sm font-bold text-white focus:outline-none focus:border-[#ff00ff]/50 transition-all appearance-none cursor-pointer">
                          <option>Adam (Deep, Dramatic)</option>
                          <option>Rachel (Suspenseful, Fast)</option>
                          <option>Marcus (Action Movie Trailer)</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">Script Generation Prompt</label>
                        <textarea 
                          className="w-full bg-[#020408] border border-white/10 rounded-2xl p-5 text-sm font-bold text-white focus:outline-none focus:border-[#ff00ff]/50 h-32 resize-none custom-scrollbar"
                          placeholder="Describe the movie plot briefly. The AI will generate a 60-second high-retention script..."
                          defaultValue="A man wakes up in a mysterious maze and has to run for his life..."
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {activeFormat === 'sigma-phonk' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">Phonk Audio Track</label>
                        <select className="w-full bg-[#020408] border border-white/10 rounded-2xl p-5 text-sm font-bold text-white focus:outline-none focus:border-[#ffb000]/50 transition-all appearance-none cursor-pointer">
                          <option>Midnight City (Slowed + Reverb)</option>
                          <option>GigaChad Theme (Bass Boosted)</option>
                          <option>Sahara - Hensonn</option>
                          <option>Custom Audio File...</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#ffb000]/10 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-[#ffb000]" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-tight">Beat-Sync Interpolation</h4>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Automatically cuts video to the drops</p>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-[#ffb000]/20 rounded-full relative border border-[#ffb000]/30">
                          <div className="absolute top-1 right-1 w-4 h-4 bg-[#ffb000] rounded-full shadow-[0_0_10px_#ffb000]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-4 h-4 text-[#ff2a5f]" />
                  <h3 className="text-[10px] font-black text-[#ff2a5f] uppercase tracking-[0.2em]">God Mode Overrides</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Aggressive Color Grading', desc: 'CTR Optimized' },
                    { label: 'Retention Voice EQ', desc: 'Psychological Hook' },
                    { label: 'Force 9:16 Crop', desc: 'Zero Black Bars' },
                    { label: 'Engine Resilience', desc: 'Multi-Pass Fallback' },
                  ].map((override, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#ff2a5f]/30 transition-all cursor-pointer group">
                      <div>
                        <h4 className="text-[11px] font-black text-white uppercase tracking-tight">{override.label}</h4>
                        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{override.desc}</p>
                      </div>
                      <div className="w-8 h-4 bg-[#ff2a5f]/10 rounded-full relative border border-[#ff2a5f]/20">
                        <div className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-[#ff2a5f] rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <Play className="w-4 h-4 fill-current" />
                Initialize Viral Payload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
