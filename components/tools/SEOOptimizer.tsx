import { useState } from 'react';
import { Search, Hash, Globe, BarChart } from 'lucide-react';

export default function SEOOptimizer() {
  const [keyword, setKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<boolean>(false);

  const handleGenerate = () => {
    if (!keyword) return;
    setIsGenerating(true);
    setTimeout(() => {
      setResults(true);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white flex items-center gap-3">
          <Search className="w-8 h-8 text-[#00ff9d]" />
          SEO Optimizer
        </h1>
        <p className="text-gray-400 text-sm">
          Generate high-ranking titles, descriptions, and tags based on current search trends.
        </p>
      </div>

      <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-8 mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter main topic or keyword..."
            className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/50 transition-all"
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !keyword}
            className="bg-[#00ff9d]/10 hover:bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/30 px-8 py-3 rounded-xl font-bold tracking-wider uppercase text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isGenerating ? (
              <span className="animate-pulse">Generating...</span>
            ) : (
              <>
                <BarChart className="w-4 h-4" /> Optimize
              </>
            )}
          </button>
        </div>
      </div>

      {results && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-6">
            <h3 className="text-[#00ff9d] font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Optimized Titles
            </h3>
            <ul className="space-y-3">
              <li className="bg-black/30 p-3 rounded-lg border border-white/5 text-gray-300">
                The Ultimate Guide to {keyword || 'Your Topic'} in 2026
              </li>
              <li className="bg-black/30 p-3 rounded-lg border border-white/5 text-gray-300">
                I Tried {keyword || 'Your Topic'} For 30 Days (Shocking Results)
              </li>
              <li className="bg-black/30 p-3 rounded-lg border border-white/5 text-gray-300">
                Why Everyone is Wrong About {keyword || 'Your Topic'}
              </li>
            </ul>
          </div>

          <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-6">
            <h3 className="text-[#00ff9d] font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
              <Hash className="w-4 h-4" /> High-Volume Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {['trending', 'viral', 'tutorial', 'review', '2026', 'guide', 'tips'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[#00ff9d] rounded-full text-sm">
                  #{tag}
                </span>
              ))}
              <span className="px-3 py-1 bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[#00ff9d] rounded-full text-sm">
                #{keyword.replace(/\s+/g, '').toLowerCase() || 'topic'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
