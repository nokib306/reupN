import { useState } from 'react';
import { Rocket, TrendingUp, Zap, Activity, Globe, Share2, BarChart3, Sparkles, ArrowRight, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

export default function ViralContentBooster() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | boolean>(null);

  const handleAnalyze = () => {
    if (!url) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults(true);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff4400]/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#ff4400]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Viral <span className="text-[#ff4400]">Booster</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>ALGORITHMIC ACCELERATION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>ENGAGEMENT TRIGGERS</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>PACING OPTIMIZATION</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Global Reach</span>
            <span className="text-xs font-mono text-[#00ff9d]">UNLIMITED</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Boost Factor</span>
            <span className="text-xs font-mono text-[#ff4400]">12.5x</span>
          </div>
        </div>
      </div>

      {/* Main Input Area */}
      <div className="relative group mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4400]/20 to-[#ffb000]/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative glass-panel p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Video URL or Content ID..."
                className="w-full bg-[#020408] border border-white/10 rounded-2xl pl-12 pr-4 py-5 text-gray-200 font-bold focus:outline-none focus:border-[#ff4400]/50 transition-all"
              />
            </div>
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !url}
              className={clsx(
                "px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98]",
                isAnalyzing || !url
                  ? "bg-white/5 text-gray-600 cursor-not-allowed"
                  : "bg-[#ff4400]/10 text-[#ff4400] border border-[#ff4400]/30 hover:bg-[#ff4400]/20 shadow-[0_0_30px_rgba(255,68,0,0.1)]"
              )}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#ff4400]/20 border-t-[#ff4400] rounded-full animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  Boost Content
                </>
              )}
            </button>
          </div>
          
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse"></div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Engine Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-3 h-3 text-gray-700" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Multi-Platform Sync</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {results && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  label: 'Hook Score', 
                  value: '94', 
                  suffix: '/100', 
                  desc: 'First 3 seconds optimized for maximum retention.',
                  icon: TrendingUp,
                  color: 'text-[#ff4400]',
                  bg: 'bg-[#ff4400]/10',
                  border: 'border-[#ff4400]/20'
                },
                { 
                  label: 'Pacing Rating', 
                  value: 'A+', 
                  suffix: '', 
                  desc: 'Jump cuts and transitions align with viral trends.',
                  icon: Activity,
                  color: 'text-[#ffb000]',
                  bg: 'bg-[#ffb000]/10',
                  border: 'border-[#ffb000]/20'
                },
                { 
                  label: 'Viral Probability', 
                  value: '87', 
                  suffix: '%', 
                  desc: 'High likelihood of algorithmic pickup.',
                  icon: Gauge,
                  color: 'text-[#00ff9d]',
                  bg: 'bg-[#00ff9d]/10',
                  border: 'border-[#00ff9d]/20'
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={clsx("glass-panel p-8 rounded-3xl border", stat.border)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center", stat.bg)}>
                      <stat.icon className={clsx("w-6 h-6", stat.color)} />
                    </div>
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-black text-white tracking-tighter">{stat.value}</span>
                    <span className="text-xl font-black text-gray-700">{stat.suffix}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Detailed Analysis Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-5 h-5 text-gray-400" />
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Algorithmic Breakdown</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Visual Contrast', value: 92 },
                  { label: 'Audio Frequency Sync', value: 78 },
                  { label: 'Semantic Hook Density', value: 85 },
                  { label: 'Pattern Interruption', value: 96 },
                ].map((metric, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{metric.label}</span>
                      <span className="text-xs font-mono text-white">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-[#ff4400] to-[#ffb000] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-[#ff4400]/5 border border-[#ff4400]/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-5 h-5 text-[#ff4400]" />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-tight">Recommendation Engine</h4>
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Increase saturation by 12% for better mobile CTR</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black text-[#ff4400] uppercase tracking-widest hover:translate-x-1 transition-transform">
                  Apply Fix <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
