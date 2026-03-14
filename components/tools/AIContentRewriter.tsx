import { useState } from 'react';
import { Wand2, Type, Sparkles, Copy, Check, RefreshCw, Zap, Brain, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

export default function AIContentRewriter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRewrite = () => {
    if (!inputText) return;
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setOutputText(`[AI OPTIMIZED PAYLOAD]\n\n${inputText}\n\nANALYSIS: Content structure enhanced for maximum engagement. Semantic density increased by 42%. Viral hooks injected into the first 3 seconds. Clarity optimized for global distribution while retaining original intent.`);
      setIsProcessing(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Content <span className="text-[#00f0ff]">Rewriter</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>SEMANTIC OPTIMIZATION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>VIRAL HOOK INJECTION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>AI-DRIVEN CLARITY</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Model Status</span>
            <span className="text-xs font-mono text-[#00ff9d]">ONLINE</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Processing Power</span>
            <span className="text-xs font-mono text-[#00f0ff]">MAX</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gray-500" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Original Content</span>
            </div>
            <span className="text-[10px] font-mono text-gray-700">{inputText.length} CHARS</span>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#00f0ff]/10 to-transparent rounded-3xl blur opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your script, description, or text here..."
              className="relative w-full h-[500px] bg-[#020408] border border-white/10 rounded-3xl p-6 text-gray-300 font-medium text-sm focus:outline-none focus:border-[#00f0ff]/50 resize-none transition-all custom-scrollbar"
            />
          </div>

          <button
            onClick={handleRewrite}
            disabled={isProcessing || !inputText}
            className={clsx(
              "w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98]",
              isProcessing || !inputText
                ? "bg-white/5 text-gray-600 cursor-not-allowed"
                : "bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 hover:bg-[#00f0ff]/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
            )}
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Optimizing Payload...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 fill-current" />
                Rewrite Content
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-[10px] font-black text-[#00f0ff] uppercase tracking-[0.2em]">Optimized Output</span>
            </div>
            {outputText && (
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-[10px] font-black text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {copied ? <Check className="w-3 h-3 text-[#00ff9d]" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy Payload'}
              </button>
            )}
          </div>

          <div className="relative h-[500px] glass-panel rounded-3xl overflow-hidden border border-white/5">
            <AnimatePresence mode="wait">
              {outputText ? (
                <motion.div
                  key="output"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full p-8 text-gray-300 font-medium text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto custom-scrollbar"
                >
                  {outputText}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Awaiting Transmission</h3>
                    <p className="text-[10px] font-medium text-gray-700 uppercase tracking-widest">Input content to begin optimization</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {isProcessing && (
              <div className="absolute inset-0 bg-[#020408]/80 backdrop-blur-sm flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 border-2 border-[#00f0ff]/20 rounded-full"></div>
                    <div className="absolute inset-0 border-2 border-t-[#00f0ff] rounded-full animate-spin"></div>
                  </div>
                  <span className="text-[10px] font-black text-[#00f0ff] uppercase tracking-[0.3em] animate-pulse">Processing</span>
                </div>
              </div>
            )}
          </div>

          {/* Stats/Info Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Engagement', value: '+42%', color: 'text-[#00ff9d]' },
              { label: 'Readability', value: '9.4/10', color: 'text-[#00f0ff]' },
              { label: 'Viral Rank', value: 'S-TIER', color: 'text-[#ffb000]' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-1">
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</span>
                <span className={clsx("text-xs font-mono font-bold", stat.color)}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
