import { useState } from 'react';
import { Wand2, Type, Sparkles } from 'lucide-react';

export default function AIContentRewriter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRewrite = () => {
    if (!inputText) return;
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setOutputText(`[AI Rewritten] ${inputText}\n\nThis content has been optimized for maximum engagement and clarity while retaining the original meaning.`);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white flex items-center gap-3">
          <Wand2 className="w-8 h-8 text-[#00f0ff]" />
          AI Content Rewriter
        </h1>
        <p className="text-gray-400 text-sm">
          Transform your scripts and descriptions into highly engaging, original content.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-gray-300 tracking-wider uppercase">Original Content</label>
            <Type className="w-4 h-4 text-gray-500" />
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your script, description, or text here..."
            className="w-full h-96 bg-[#0d1117] border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 resize-none transition-all"
          />
          <button
            onClick={handleRewrite}
            disabled={isProcessing || !inputText}
            className="w-full bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 py-3 rounded-xl font-bold tracking-wider uppercase text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Rewrite Content
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-[#00f0ff] tracking-wider uppercase">Optimized Output</label>
            <Wand2 className="w-4 h-4 text-[#00f0ff]" />
          </div>
          <div className="w-full h-96 bg-[#0d1117]/50 border border-[#00f0ff]/20 rounded-xl p-4 text-gray-300 overflow-y-auto relative">
            {outputText ? (
              <div className="whitespace-pre-wrap">{outputText}</div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm uppercase tracking-widest">
                Awaiting Input
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
