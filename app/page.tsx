'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import ReEncode from '@/components/tools/ReEncode';
import EternityLoop from '@/components/tools/EternityLoop';
import ClipCompiler from '@/components/tools/ClipCompiler';
import VideoDownloader from '@/components/tools/VideoDownloader';
import ThumbnailGenerator from '@/components/tools/ThumbnailGenerator';
import NextGenEvasion from '@/components/tools/NextGenEvasion';
import AIContentRewriter from '@/components/tools/AIContentRewriter';
import ViralContentBooster from '@/components/tools/ViralContentBooster';
import SEOOptimizer from '@/components/tools/SEOOptimizer';
import RetentionForge from '@/components/tools/RetentionForge';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Search, User, Settings, Globe, Shield, Zap, Activity } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('next-gen');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen bg-[#020408] text-white font-sans overflow-hidden selection:bg-[#00f0ff]/30">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00f0ff]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff2a5f]/5 blur-[120px] rounded-full" />
      </div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col relative z-10">
        {/* Global Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-12 bg-[#020408]/50 backdrop-blur-md">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">System Time</span>
                <span className="text-sm font-mono text-gray-300">
                  {currentTime.toLocaleTimeString([], { hour12: false })}
                </span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/5" />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-[#00f0ff]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Global Node: <span className="text-white">ASIA-SE-1</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-[#00ff9d]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Firewall: <span className="text-white">ACTIVE</span></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 group-focus-within:text-[#00f0ff] transition-colors" />
              <input 
                type="text" 
                placeholder="SEARCH MODULES..." 
                className="bg-white/5 border border-white/5 rounded-full py-2 pl-9 pr-4 text-[10px] font-bold tracking-wider focus:outline-none focus:border-[#00f0ff]/30 focus:bg-white/[0.08] transition-all w-48 focus:w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors relative">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#ff2a5f] rounded-full border-2 border-[#020408]" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Settings className="w-4 h-4 text-gray-400" />
              </button>
              <div className="h-8 w-[1px] bg-white/5 mx-2" />
              <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-wider">Admin</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-12 min-h-full"
            >
              {activeTab === 're-encode' && <ReEncode />}
              {activeTab === 'retention-forge' && <RetentionForge />}
              {activeTab === 'eternity-loop' && <EternityLoop />}
              {activeTab === 'clip-compiler' && <ClipCompiler />}
              {activeTab === 'video-downloader' && <VideoDownloader />}
              {activeTab === 'thumbnail' && <ThumbnailGenerator />}
              {activeTab === 'next-gen' && <NextGenEvasion />}
              {activeTab === 'ai-rewriter' && <AIContentRewriter />}
              {activeTab === 'viral-booster' && <ViralContentBooster />}
              {activeTab === 'seo-optimizer' && <SEOOptimizer />}
              {activeTab === 'pc-tool' && (
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[#00f0ff]" />
                      </div>
                      <h1 className="text-4xl font-black tracking-tighter text-white">PC TOOL <span className="text-[#00f0ff]">INTERFACE</span></h1>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                      Advanced desktop integration for high-performance batch processing and local file management.
                    </p>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/20 to-[#ff2a5f]/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative border border-white/5 bg-[#0d1117]/50 backdrop-blur-xl p-16 rounded-3xl flex flex-col items-center justify-center min-h-[400px] text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                        <Activity className="w-10 h-10 text-gray-600 animate-pulse" />
                      </div>
                      <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Module Under Construction</h2>
                      <p className="text-gray-500 max-w-md mx-auto font-medium">
                        Our engineers are currently calibrating the high-speed desktop bridge. Check back soon for the full release.
                      </p>
                      <div className="mt-12 flex gap-4">
                        <div className="px-6 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">v10.4.2-ALPHA</div>
                        <div className="px-6 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[10px] font-bold text-[#00f0ff] uppercase tracking-widest">PRIORITY: HIGH</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
