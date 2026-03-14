import { useState } from 'react';
import { Flame, Layers, SplitSquareVertical, Mic2, Zap, Play, Settings2, ShieldAlert } from 'lucide-react';
import { clsx } from 'clsx';

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
    <div className="max-w-5xl pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white flex items-center gap-3">
          Retention Forge <Flame className="w-8 h-8 text-[#ff4400]" />
        </h1>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span>The Kingmaker Algorithm</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>1 Million Views Payload</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>Viral Architecture</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-4">Select Payload</h2>
          {viralFormats.map((format) => {
            const isActive = activeFormat === format.id;
            const Icon = format.icon;
            return (
              <button
                key={format.id}
                onClick={() => setActiveFormat(format.id)}
                className={clsx(
                  "w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group",
                  isActive 
                    ? `bg-[#0d1117] ${format.border} shadow-[0_0_20px_rgba(0,0,0,0.2)]` 
                    : "bg-[#0d1117]/50 border-white/5 hover:border-white/10"
                )}
              >
                {isActive && (
                  <div className={clsx("absolute top-0 left-0 w-1 h-full", format.bg.replace('/10', ''))}></div>
                )}
                <div className="flex items-start gap-4">
                  <div className={clsx(
                    "p-2 rounded-lg transition-colors",
                    isActive ? format.bg : "bg-white/5"
                  )}>
                    <Icon className={clsx("w-5 h-5", isActive ? format.color : "text-gray-500")} />
                  </div>
                  <div>
                    <h3 className={clsx("font-bold text-sm mb-1", isActive ? "text-white" : "text-gray-300")}>{format.title}</h3>
                    <p className={clsx("text-[10px] font-mono uppercase tracking-wider", isActive ? format.color : "text-gray-500")}>{format.subtitle}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="border border-white/5 bg-[#0d1117]/30 p-8 rounded-2xl">
            <h2 className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
              <Settings2 className="w-4 h-4" /> Payload Configuration
            </h2>
            
            <div className="mb-8">
              <p className="text-sm text-gray-300 leading-relaxed">
                {viralFormats.find(f => f.id === activeFormat)?.description}
              </p>
            </div>

            {activeFormat === 'split-screen' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Bottom Half Source</label>
                  <select className="w-full bg-[#05090f] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#00f0ff]/50">
                    <option>GTA V Mega Ramp (Auto-fetch)</option>
                    <option>Subway Surfers No-Coin Run</option>
                    <option>Kinetic Sand Cutting ASMR</option>
                    <option>Minecraft Parkour</option>
                    <option>Custom Local File...</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#05090f] border border-white/5 rounded-lg">
                  <div>
                    <h4 className="text-sm font-bold text-white">Auto-Caption Generation</h4>
                    <p className="text-xs text-gray-500">Hormozi-style dynamic subtitles</p>
                  </div>
                  <div className="w-10 h-5 bg-[#00f0ff]/20 rounded-full relative cursor-pointer border border-[#00f0ff]/30">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === 'ai-recap' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">AI Voice Model</label>
                  <select className="w-full bg-[#05090f] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#ff00ff]/50">
                    <option>Adam (Deep, Dramatic)</option>
                    <option>Rachel (Suspenseful, Fast)</option>
                    <option>Marcus (Action Movie Trailer)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Script Generation Prompt</label>
                  <textarea 
                    className="w-full bg-[#05090f] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#ff00ff]/50 h-24 resize-none"
                    placeholder="Describe the movie plot briefly. The AI will generate a 60-second high-retention script..."
                    defaultValue="A man wakes up in a mysterious maze and has to run for his life..."
                  ></textarea>
                </div>
              </div>
            )}

            {activeFormat === 'sigma-phonk' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Phonk Audio Track</label>
                  <select className="w-full bg-[#05090f] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#ffb000]/50">
                    <option>Midnight City (Slowed + Reverb)</option>
                    <option>GigaChad Theme (Bass Boosted)</option>
                    <option>Sahara - Hensonn</option>
                    <option>Custom Audio File...</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#05090f] border border-white/5 rounded-lg">
                  <div>
                    <h4 className="text-sm font-bold text-white">Beat-Sync Interpolation</h4>
                    <p className="text-xs text-gray-500">Automatically cuts and slows video to the bass drops</p>
                  </div>
                  <div className="w-10 h-5 bg-[#ffb000]/20 rounded-full relative cursor-pointer border border-[#ffb000]/30">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#ffb000] rounded-full shadow-[0_0_10px_#ffb000]"></div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-[#ff0055]/20 animate-in fade-in duration-500">
              <h2 className="text-xs font-bold text-[#ff0055] tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> God Mode Overrides (Global Patch)
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#05090f] border border-[#ff0055]/10 rounded-lg group hover:border-[#ff0055]/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-white">Aggressive Color Grading</h4>
                    <p className="text-xs text-gray-500">Fixes wash-out, boosts contrast & saturation for CTR</p>
                  </div>
                  <div className="w-10 h-5 bg-[#ff0055]/20 rounded-full relative cursor-pointer border border-[#ff0055]/30">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#ff0055] rounded-full shadow-[0_0_10px_#ff0055]"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#05090f] border border-[#ff0055]/10 rounded-lg group hover:border-[#ff0055]/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-white">Retention-Optimized Voice EQ</h4>
                    <p className="text-xs text-gray-500">Boosts 2kHz-5kHz range for psychological engagement</p>
                  </div>
                  <div className="w-10 h-5 bg-[#ff0055]/20 rounded-full relative cursor-pointer border border-[#ff0055]/30">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#ff0055] rounded-full shadow-[0_0_10px_#ff0055]"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#05090f] border border-[#ff0055]/10 rounded-lg group hover:border-[#ff0055]/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-white">Force 100% Full-Screen (9:16)</h4>
                    <p className="text-xs text-gray-500">Aggressive crop & pan, zero black bars allowed</p>
                  </div>
                  <div className="w-10 h-5 bg-[#ff0055]/20 rounded-full relative cursor-pointer border border-[#ff0055]/30">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#ff0055] rounded-full shadow-[0_0_10px_#ff0055]"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#05090f] border border-[#ff0055]/10 rounded-lg group hover:border-[#ff0055]/30 transition-colors">
                  <div>
                    <h4 className="text-sm font-bold text-white">Bulletproof Engine Resilience</h4>
                    <p className="text-xs text-gray-500">Multi-pass encoding fallback for long-term consistency</p>
                  </div>
                  <div className="w-10 h-5 bg-[#ff0055]/20 rounded-full relative cursor-pointer border border-[#ff0055]/30">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#ff0055] rounded-full shadow-[0_0_10px_#ff0055]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Play className="w-5 h-5 fill-current" /> Initialize Viral Payload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
