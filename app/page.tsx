'use client';
import { useState } from 'react';
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

export default function Home() {
  const [activeTab, setActiveTab] = useState('next-gen');

  return (
    <div className="flex h-screen bg-[#05090f] text-white font-sans overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-12">
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
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-3 tracking-wide text-white">PC Tool</h1>
              <p className="text-gray-400 text-sm">Drag & Drop PC Tool Interface</p>
            </div>
            <div className="border border-white/5 bg-[#0d1117]/30 p-8 rounded-2xl flex items-center justify-center h-64">
              <p className="text-gray-500 tracking-[0.2em] uppercase font-bold">PC Tool Interface Coming Soon</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
