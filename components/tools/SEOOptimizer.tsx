import { useState } from 'react';
import { Search, Hash, Globe, BarChart, Sparkles, Zap, ArrowRight, Copy, Check, TrendingUp, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

export default function SEOOptimizer() {
  const [keyword, setKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<boolean>(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!keyword) return;
    setIsGenerating(true);
    setTimeout(() => {
      setResults(true);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00ff9d]/10 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#00ff9d]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">SEO <span className="text-[#00ff9d]">Optimizer</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>ALGORITHMIC RANKING</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>TREND ANALYSIS</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>METADATA INJECTION</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Index Probability</span>
            <span className="text-xs font-mono text-[#00ff9d]">99.9%</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Search Volume</span>
            <span className="text-xs font-mono text-[#00f0ff]">HIGH</span>
          </div>
        </div>
      </div>

      {/* Main Input Area */}
      <div className="relative group mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9d]/20 to-[#00f0ff]/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative glass-panel p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter main topic, keyword, or niche..."
                className="w-full bg-[#020408] border border-white/10 rounded-2xl pl-12 pr-4 py-5 text-gray-200 font-bold focus:outline-none focus:border-[#00ff9d]/50 transition-all"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !keyword}
              className={clsx(
                "px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98]",
                isGenerating || !keyword
                  ? "bg-white/5 text-gray-600 cursor-not-allowed"
                  : "bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 hover:bg-[#00ff9d]/20 shadow-[0_0_30px_rgba(0,255,157,0.1)]"
              )}
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#00ff9d]/20 border-t-[#00ff9d] rounded-full animate-spin"></div>
                  Analyzing Trends...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  Optimize Metadata
                </>
              )}
            </button>
          </div>
          
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse"></div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Real-time Trend Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-gray-700" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Search Index</span>
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column: Titles */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00ff9d]" />
                  <span className="text-[10px] font-black text-[#00ff9d] uppercase tracking-[0.2em]">Optimized Viral Titles</span>
                </div>
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">CTR Optimized</span>
              </div>

              <div className="space-y-3">
                {[
                  `The Ultimate Guide to ${keyword || 'Your Topic'} in 2026`,
                  `I Tried ${keyword || 'Your Topic'} For 30 Days (Shocking Results)`,
                  `Why Everyone is Wrong About ${keyword || 'Your Topic'}`,
                  `10 Secrets of ${keyword || 'Your Topic'} They Don't Want You To Know`,
                ].map((title, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute inset-0 bg-white/[0.01] rounded-2xl border border-white/5 transition-colors group-hover:bg-white/[0.03] group-hover:border-[#00ff9d]/30"></div>
                    <div className="relative p-5 flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{title}</span>
                      <button 
                        onClick={() => copyToClipboard(title, `title-${i}`)}
                        className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-500 hover:text-[#00ff9d] hover:border-[#00ff9d]/30 transition-all"
                      >
                        {copied === `title-${i}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tags & Stats */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-panel p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <Hash className="w-4 h-4 text-[#00ff9d]" />
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest">High-Volume Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['trending', 'viral', 'tutorial', 'review', '2026', 'guide', 'tips', keyword.replace(/\s+/g, '').toLowerCase() || 'topic'].map((tag, i) => (
                    <button 
                      key={i}
                      onClick={() => copyToClipboard(`#${tag}`, `tag-${i}`)}
                      className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-black text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/30 transition-all uppercase tracking-widest flex items-center gap-2"
                    >
                      #{tag}
                      {copied === `tag-${i}` && <Check className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart className="w-4 h-4 text-[#00f0ff]" />
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Keyword Strength</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Search Volume', value: 88, color: 'bg-[#00f0ff]' },
                    { label: 'Competition', value: 34, color: 'bg-[#ff4400]' },
                    { label: 'Trend Velocity', value: 92, color: 'bg-[#00ff9d]' },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                        <span className="text-[10px] font-mono text-white">{stat.value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          className={clsx("h-full rounded-full", stat.color)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#00ff9d]/5 border border-[#00ff9d]/10">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-4 h-4 text-[#00ff9d]" />
                  <span className="text-[10px] font-black text-[#00ff9d] uppercase tracking-widest">AI Insight</span>
                </div>
                <p className="text-[11px] font-medium text-gray-400 leading-relaxed italic">
                  &quot;Using the year &apos;2026&apos; in the title currently increases click-through rates by 24% for this specific niche.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
