import { useState, useEffect, useRef } from 'react';
import { 
  Fingerprint, Cpu, Activity, ScanFace, Palette, ShieldAlert, Box, MicOff, 
  Skull, Binary, Zap, Ghost, AudioWaveform, Radiation, Scissors, Radio, 
  Bug, EyeOff, VideoOff, Hourglass, BrainCircuit, TriangleAlert, MonitorOff, 
  Network, Brain, ChevronDown, ChevronUp, Type, Wind, AudioLines, Droplets, 
  Sun, Spline, Layers2, Sparkles, Layout, Atom, Brush, Move, VolumeX, Dna, 
  Lightbulb, Database, Heart, Waves, RefreshCw, Key, Target, 
  Triangle, GitMerge, ShieldCheck, ShieldX, Terminal, Search, Filter, 
  Settings2, BarChart3, Activity as ActivityIcon, Lock, Unlock,
  Play, Square, FastForward, Info, AlertCircle, CheckCircle2, Globe, Cpu as CpuIcon,
  Eye, MousePointer2, ZapOff, Wifi, WifiOff, HardDrive, Shield, Infinity as InfinityIcon
} from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

const modules = [
  {
    id: 'neural-cloaking',
    title: 'Neural Cloaking',
    subtitle: 'Adversarial Perturbation',
    description: 'Injects a lightweight, invisible pixel pattern designed to mathematically break image recognition models (ResNet/VGG). To a human, it looks HD. To a bot, it looks like static.',
    icon: Cpu,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    tier: 'standard'
  },
  {
    id: 'chronos-jitter',
    title: 'Chronos Jitter',
    subtitle: 'Micro-Temporal VFR',
    description: 'Converts video to a violently fluctuating Variable Frame Rate (VFR). Drops micro-frames and duplicates others to destroy temporal sequence hashes while remaining visually smooth.',
    icon: Activity,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
    tier: 'standard'
  },
  {
    id: 'z-axis-parallax',
    title: 'Z-Axis Parallax',
    subtitle: 'Spatial Geometry Rewrite',
    description: 'Uses depth-estimation AI to map the 2D video into 3D space, then applies a 2-degree rotational shift. Completely annihilates 2D structural hashing while looking like a high-end camera pan.',
    icon: Box,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
    tier: 'standard'
  },
  {
    id: 'formant-phase',
    title: 'Formant Phase',
    subtitle: 'Audio Spectrogram Annihilation',
    description: 'Alters the phase alignment of the audio waveform and shifts vocal formants independently of pitch. The voice sounds identical to humans, but the spectrogram is completely unrecognizable.',
    icon: Fingerprint,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    tier: 'standard'
  },
  {
    id: 'whisper-bane',
    title: 'Whisper-Bane',
    subtitle: 'Semantic Audio Deep-Rewrite',
    description: 'Defeats Speech-to-Text (Whisper) copyright bots. Uses LLMs + Voice Cloning to dynamically swap words with synonyms in real-time, changing the transcript while preserving the original voice and meaning.',
    icon: MicOff,
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-400/10',
    border: 'border-fuchsia-400/30',
    tier: 'standard'
  },
  {
    id: 'semantic-bg',
    title: 'Semantic Background',
    subtitle: 'Deepfake B-Roll',
    description: 'Uses fast AI segmentation to isolate the main subject and applies a 5% generative transformation to the background only. Changes 70% of the screen\'s pixels without altering the subject.',
    icon: ScanFace,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
    tier: 'standard'
  },
  {
    id: 'entropy-bomb',
    title: 'Fractal Entropy Bombing',
    subtitle: 'Encoder Hijack',
    description: 'Injects mathematically incompressible fractal noise into near-black pixels. Causes YouTube\'s compression servers to panic and starve the main video of bitrate, letting their own servers destroy the fingerprint.',
    icon: Radiation,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    tier: 'arms-grade'
  },
  {
    id: 'temporal-ghosting',
    title: 'Temporal Ghosting',
    subtitle: 'Strobe-Sync Evasion',
    description: 'Calculates the exact frame-sampling rate of ingest servers. Flashes a legally safe 1-frame image exactly when the bot takes a snapshot. Invisible to humans (16ms), but the bot only sees the safe image.',
    icon: Ghost,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    tier: 'arms-grade'
  },
  {
    id: 'saliency-starvation',
    title: 'Saliency Starvation',
    subtitle: 'Attention-Map Blindness',
    description: 'Generates invisible adversarial patterns around the absolute edges of the screen. Acts as a magnet for the AI\'s "eyes," forcing the bot to stare at the top-left pixel and ignore the actual video.',
    icon: EyeOff,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    tier: 'zero-day'
  },
  {
    id: 'hydra-protocol',
    title: 'The Hydra Protocol',
    subtitle: 'Manifest-Level Stream Splicing',
    description: 'The uploaded file is pure white noise. The actual video is hidden in fragmented, encrypted HLS metadata tags. The client player decodes the metadata into video on the fly. The bot only hashes the noise.',
    icon: Network,
    color: 'text-white',
    bg: 'bg-white/10',
    border: 'border-white/30',
    tier: 'zero-day'
  },
  {
    id: 'macroblock-disintegration',
    title: 'Macroblock Disintegration',
    subtitle: 'I-Frame Annihilation',
    description: 'Strips almost every I-frame from the file, relying entirely on ultra-complex predictive motion vectors. Humans see smooth video; bots grabbing static screenshots see a grey wall of corrupted sludge.',
    icon: VideoOff,
    color: 'text-rose-600',
    bg: 'bg-rose-600/10',
    border: 'border-rose-600/30',
    tier: 'zero-day'
  }
];

const Visualizer = ({ activeModules }: { activeModules: Record<string, boolean> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let frame = 0;

    const render = () => {
      frame++;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Base "Video" simulation
      ctx.fillStyle = '#1a1f26';
      ctx.fillRect(0, 0, width, height);

      // Draw a "Subject"
      ctx.fillStyle = '#2d3748';
      const subjectX = width / 2 + Math.sin(frame * 0.02) * 20;
      const subjectY = height / 2 + Math.cos(frame * 0.03) * 10;
      ctx.beginPath();
      ctx.arc(subjectX, subjectY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Apply Effects based on active modules
      if (activeModules['neural-cloaking']) {
        for (let i = 0; i < 100; i++) {
          ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.2})`;
          ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
        }
      }

      if (activeModules['chronos-jitter']) {
        if (frame % 5 === 0) {
          ctx.fillStyle = 'rgba(0, 255, 157, 0.1)';
          ctx.fillRect(0, 0, width, height);
        }
      }

      if (activeModules['saliency-starvation']) {
        ctx.fillStyle = '#ff0055';
        ctx.fillRect(0, 0, 10, 10);
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 0, 85, 0.5)';
        ctx.moveTo(0, 0);
        ctx.lineTo(width, height);
        ctx.stroke();
      }

      if (activeModules['entropy-bomb']) {
        for (let i = 0; i < 50; i++) {
          ctx.fillStyle = `rgba(255, 68, 0, ${Math.random() * 0.1})`;
          ctx.fillRect(Math.random() * width, Math.random() * height, 10, 1);
        }
      }

      // Scanline effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, (frame % height), width, 1);

      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [activeModules]);

  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl group">
      <canvas ref={canvasRef} width={480} height={270} className="w-full h-full" />
      <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20" />
      
      {/* Overlay UI */}
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">Live Obfuscation</span>
        </div>
        <div className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-500/30">
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Secure</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-tighter">Bitrate</span>
            <span className="text-xs font-mono text-emerald-400 font-bold">12.4 Mbps</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-tighter">Entropy</span>
            <span className="text-xs font-mono text-blue-400 font-bold">84.2%</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-rose-500"
              animate={{ x: [-128, 128] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <span className="text-[10px] font-mono text-white/50">SYNCING</span>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="flex gap-4">
          <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-xl border border-white/20 transition-all">
            <Play className="w-6 h-6 text-white fill-white" />
          </button>
          <button className="p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-xl border border-white/20 transition-all">
            <Settings2 className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function NextGenEvasion() {
  const [activeTier, setActiveTier] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModules, setActiveModules] = useState<Record<string, boolean>>({
    'neural-cloaking': true,
    'formant-phase': true,
    'saliency-starvation': false,
  });
  const [isActivating, setIsActivating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const activateFullProtection = () => {
    setIsActivating(true);
    setLogs(prev => ["Initializing Global Evasion Protocol...", ...prev]);
    
    setTimeout(() => {
      setActiveModules(modules.reduce((acc, m) => ({ ...acc, [m.id]: true }), {}));
      setIsActivating(false);
      setLogs(prev => ["FULL PROTECTION ACTIVE: 11/11 Modules Online", ...prev]);
    }, 2000);
  };
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Object.values(activeModules).some(Boolean)) {
        const messages = [
          "Analyzing spectrogram peaks...",
          "Injecting adversarial noise...",
          "Bypassing Content ID hash check...",
          "Rotating geometric projection...",
          "Scrambling formant phase alignment...",
          "Zero-day exploit active: Saliency Starvation",
          "Encrypting HLS metadata tags...",
        ];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setLogs(prev => [randomMsg, ...prev].slice(0, 10));
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [activeModules]);

  const toggleModule = (id: string) => {
    setActiveModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredModules = modules.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         m.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = activeTier === 'all' || m.tier === activeTier;
    return matchesSearch && matchesTier;
  });

  const activeCount = Object.values(activeModules).filter(Boolean).length;
  const strength = Math.round((activeCount / modules.length) * 100);

  return (
    <div className="max-w-[1600px] mx-auto p-4 lg:p-8 space-y-8 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0d1117] border border-white/5 rounded-[3rem] p-8 lg:p-12 shadow-2xl group">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-500/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 rounded-full border border-rose-500/20">
              <Zap className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Next-Gen Engine Active</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">
                EVASION <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500">COMMAND</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                The world&apos;s most advanced adversarial machine learning suite. 
                Neutralize automated content recognition with mathematical precision.
              </p>
            </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={activateFullProtection}
                  disabled={isActivating}
                  className={clsx(
                    "px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl active:scale-95 flex items-center gap-3",
                    isActivating 
                      ? "bg-rose-500/50 text-white/50 cursor-not-allowed" 
                      : "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20"
                  )}
                >
                  {isActivating ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <Shield className="w-5 h-5" />
                  )}
                  {isActivating ? 'INITIALIZING...' : 'ACTIVATE FULL PROTECTION'}
                </button>
              <button 
                onClick={() => setShowTutorial(true)}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm transition-all border border-white/10 flex items-center gap-3"
              >
                <Info className="w-5 h-5" />
                HOW IT WORKS
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-3xl font-black text-white">14ms</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Latency</p>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-500">99.9%</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-500">4.2k</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Nodes Active</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Visualizer activeModules={activeModules} />
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#161b22] border border-white/10 p-6 rounded-3xl shadow-2xl backdrop-blur-xl w-64"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Evasion Strength</span>
                <span className="text-xl font-black text-white">{strength}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-gradient-to-r from-rose-500 to-purple-500"
                  animate={{ width: `${strength}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-emerald-500">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Bypass Confirmed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Control Center */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Sidebar Controls */}
        <div className="xl:col-span-3 space-y-6">
          <div className="bg-[#0d1117] border border-white/5 rounded-[2.5rem] p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Filters</h2>
              <Filter className="w-4 h-4 text-gray-500" />
            </div>
            
            <div className="space-y-2">
              {['all', 'standard', 'arms-grade', 'zero-day'].map(tier => (
                <button
                  key={tier}
                  onClick={() => setActiveTier(tier)}
                  className={clsx(
                    "w-full px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all text-left flex items-center justify-between group",
                    activeTier === tier 
                      ? "bg-white/10 text-white border border-white/10" 
                      : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                  )}
                >
                  {tier}
                  <div className={clsx(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    activeTier === tier ? "bg-rose-500 scale-125" : "bg-gray-700 group-hover:bg-gray-500"
                  )} />
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-xs focus:outline-none focus:border-rose-500/50 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#0d1117] border border-white/5 rounded-[2.5rem] p-6 h-[400px] flex flex-col shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Live Console
              </h2>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex-1 font-mono text-[10px] space-y-3 overflow-hidden custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {logs.map((log, i) => (
                  <motion.div 
                    key={`${log}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1 - (i * 0.1), x: 0 }}
                    className="flex items-start gap-3 text-gray-500"
                  >
                    <span className="text-rose-500/50 shrink-0">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                    <span className="truncate">{log}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <div className="xl:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredModules.map((mod, index) => {
                const isActive = activeModules[mod.id];
                const Icon = mod.icon;
                
                return (
                  <motion.div 
                    layout
                    key={mod.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={clsx(
                      "group relative border rounded-[2rem] p-8 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[280px]",
                      isActive 
                        ? `bg-[#0d1117] ${mod.border} shadow-2xl shadow-rose-500/5` 
                        : "bg-[#0d1117]/40 border-white/5 hover:border-white/10 hover:bg-[#0d1117]"
                    )}
                    onClick={() => toggleModule(mod.id)}
                  >
                    {/* Active Indicator */}
                    <div className={clsx(
                      "absolute top-0 left-0 w-full h-1 transition-all duration-500",
                      isActive ? "bg-rose-500 opacity-100" : "bg-transparent opacity-0"
                    )} />

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className={clsx(
                          "p-4 rounded-2xl transition-all duration-500",
                          isActive ? mod.bg : "bg-white/5 group-hover:bg-white/10"
                        )}>
                          <Icon className={clsx("w-6 h-6", isActive ? mod.color : "text-gray-600")} />
                        </div>
                        <div className={clsx(
                          "w-10 h-6 rounded-full p-1 transition-all duration-500 relative",
                          isActive ? "bg-rose-500/20" : "bg-white/5"
                        )}>
                          <motion.div 
                            className={clsx(
                              "w-4 h-4 rounded-full shadow-sm",
                              isActive ? "bg-rose-500" : "bg-gray-700"
                            )}
                            animate={{ x: isActive ? 16 : 0 }}
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className={clsx(
                          "text-xl font-black mb-1 transition-colors",
                          isActive ? "text-white" : "text-gray-400"
                        )}>
                          {mod.title}
                        </h3>
                        <p className={clsx(
                          "text-[10px] font-mono uppercase tracking-widest mb-4 font-bold",
                          isActive ? mod.color : "text-gray-600"
                        )}>
                          {mod.subtitle}
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={clsx(
                          "w-1.5 h-1.5 rounded-full",
                          isActive ? "bg-emerald-500 animate-pulse" : "bg-gray-700"
                        )} />
                        <span className="text-[9px] font-mono text-gray-600 uppercase font-bold tracking-widest">
                          {mod.tier}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <ActivityIcon className="w-3 h-3" />
                        <span className="text-[9px] font-mono font-bold">0.02ms</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Tutorial Modal */}
      <AnimatePresence>
        {showTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTutorial(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#0d1117] border border-white/10 rounded-[3rem] p-12 max-w-2xl w-full shadow-2xl"
            >
              <button 
                onClick={() => setShowTutorial(false)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <FastForward className="w-6 h-6" />
              </button>
              
              <div className="space-y-8">
                <div className="p-4 bg-blue-500/10 rounded-3xl w-fit border border-blue-500/20">
                  <BrainCircuit className="w-12 h-12 text-blue-500" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-white">How Evasion Works</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Next-Gen Evasion uses a multi-layered approach to neutralize content recognition bots. 
                    By combining adversarial perturbations with temporal jitter and semantic re-writes, 
                    we create a file that is visually perfect to humans but mathematically invisible to AI.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-rose-500" /> Human View
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Maintains 4K resolution, color accuracy, and smooth motion. 
                      Invisible patterns are hidden in high-frequency noise.
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <MonitorOff className="w-4 h-4 text-blue-500" /> Bot View
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Sees corrupted hashes, broken temporal sequences, and 
                      adversarial noise that triggers false negatives.
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setShowTutorial(false)}
                  className="w-full py-4 bg-white text-black rounded-2xl font-black text-sm hover:bg-gray-200 transition-all"
                >
                  GOT IT, LET&apos;S GO
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
