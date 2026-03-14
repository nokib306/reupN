import { useState } from 'react';
import { Rocket, TrendingUp, Zap, Activity } from 'lucide-react';

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
    }, 2000);
  };

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white flex items-center gap-3">
          <Rocket className="w-8 h-8 text-[#ff4400]" />
          Viral Content Booster
        </h1>
        <p className="text-gray-400 text-sm">
          Analyze and inject viral hooks, pacing adjustments, and engagement triggers into your content.
        </p>
      </div>

      <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-8 mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Video URL or Upload ID..."
            className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-[#ff4400]/50 focus:ring-1 focus:ring-[#ff4400]/50 transition-all"
          />
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !url}
            className="bg-[#ff4400]/10 hover:bg-[#ff4400]/20 text-[#ff4400] border border-[#ff4400]/30 px-8 py-3 rounded-xl font-bold tracking-wider uppercase text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isAnalyzing ? (
              <span className="animate-pulse">Analyzing...</span>
            ) : (
              <>
                <Zap className="w-4 h-4" /> Boost
              </>
            )}
          </button>
        </div>
      </div>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-[#0d1117] border border-[#ff4400]/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#ff4400]/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-[#ff4400]" />
              </div>
              <h3 className="font-bold text-gray-200">Hook Score</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">94<span className="text-lg text-gray-500">/100</span></div>
            <p className="text-sm text-gray-400">First 3 seconds optimized for maximum retention.</p>
          </div>

          <div className="bg-[#0d1117] border border-[#ffb000]/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#ffb000]/10 rounded-lg">
                <Activity className="w-5 h-5 text-[#ffb000]" />
              </div>
              <h3 className="font-bold text-gray-200">Pacing Rating</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">A+</div>
            <p className="text-sm text-gray-400">Jump cuts and transitions align with viral trends.</p>
          </div>

          <div className="bg-[#0d1117] border border-[#00ff9d]/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#00ff9d]/10 rounded-lg">
                <Rocket className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <h3 className="font-bold text-gray-200">Viral Probability</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">87%</div>
            <p className="text-sm text-gray-400">High likelihood of algorithmic pickup.</p>
          </div>
        </div>
      )}
    </div>
  );
}
