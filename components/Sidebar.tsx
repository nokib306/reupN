import { RefreshCw, Laptop, Infinity, Clapperboard, Download, Image as ImageIcon, Fingerprint, Flame, Wand2, Rocket, Search, Terminal, Cpu, Shield, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'motion/react';

const navItems = [
  { id: 're-encode', label: 'Re-Encode', icon: RefreshCw, badge: 'v7 TURBO', badgeColor: 'text-[#00ff9d] border-[#00ff9d]/30 bg-[#00ff9d]/10' },
  { id: 'retention-forge', label: 'Retention Forge', icon: Flame, badge: 'VIRAL', badgeColor: 'text-[#ff4400] border-[#ff4400]/30 bg-[#ff4400]/10' },
  { id: 'pc-tool', label: 'PC Tool', icon: Laptop, badge: 'DRAG & DROP', badgeColor: 'text-[#00ff9d] border-[#00ff9d]/30 bg-[#00ff9d]/10' },
  { id: 'eternity-loop', label: 'Eternity Loop', icon: Infinity, badge: 'NEW', badgeColor: 'text-[#ffb000] border-[#ffb000]/30 bg-[#ffb000]/10' },
  { id: 'clip-compiler', label: 'Clip Compiler', icon: Clapperboard, badge: 'NEW', badgeColor: 'text-[#ffb000] border-[#ffb000]/30 bg-[#ffb000]/10' },
  { id: 'video-downloader', label: 'Video Downloader', icon: Download, badge: 'NEW', badgeColor: 'text-[#ffb000] border-[#ffb000]/30 bg-[#ffb000]/10' },
  { id: 'thumbnail', label: 'Thumbnail', icon: ImageIcon, badge: 'NEW', badgeColor: 'text-[#ffb000] border-[#ffb000]/30 bg-[#ffb000]/10' },
  { id: 'next-gen', label: 'Next-Gen Evasion', icon: Fingerprint, badge: 'BETA', badgeColor: 'text-[#ff2a5f] border-[#ff2a5f]/30 bg-[#ff2a5f]/10' },
  { id: 'ai-rewriter', label: 'AI Content Rewriter', icon: Wand2, badge: 'NEW', badgeColor: 'text-[#00f0ff] border-[#00f0ff]/30 bg-[#00f0ff]/10' },
  { id: 'viral-booster', label: 'Viral Content Booster', icon: Rocket, badge: 'NEW', badgeColor: 'text-[#ff4400] border-[#ff4400]/30 bg-[#ff4400]/10' },
  { id: 'seo-optimizer', label: 'SEO Optimizer', icon: Search, badge: 'NEW', badgeColor: 'text-[#00ff9d] border-[#00ff9d]/30 bg-[#00ff9d]/10' },
];

export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <div className="w-72 bg-[#020408] border-r border-white/5 flex flex-col h-full relative z-50">
      {/* Header / Logo */}
      <div className="p-8">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#ff2a5f] p-[1px] group-hover:rotate-12 transition-transform duration-500">
            <div className="w-full h-full rounded-xl bg-[#020408] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">UPNRE<span className="text-[#00f0ff]">26</span></span>
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Command Center v10</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 space-y-8 overflow-y-auto scrollbar-hide">
        <div>
          <div className="px-4 mb-4 flex items-center justify-between">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Core Modules</span>
            <Terminal className="w-3 h-3 text-gray-700" />
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={clsx(
                    "w-full group relative flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                    isActive 
                      ? "bg-white/5 text-white" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
                  )}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute inset-0 border border-white/10 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none"
                    />
                  )}
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={clsx(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",
                      isActive ? "bg-[#00f0ff]/10 text-[#00f0ff]" : "bg-white/5 text-gray-600 group-hover:text-gray-400"
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="tracking-tight">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={clsx(
                      "relative z-10 text-[8px] px-2 py-0.5 border rounded-full tracking-wider uppercase font-black",
                      item.badgeColor
                    )}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* System Status Section */}
        <div className="px-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-3 h-3 text-[#00f0ff]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Engine Status</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[9px] font-mono">
                <span className="text-gray-600">UPTIME</span>
                <span className="text-gray-400">99.98%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[99%] h-full bg-[#00f0ff]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center">
            <Shield className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white uppercase tracking-wider">Secure Node</span>
            <span className="text-[9px] font-mono text-gray-600">ID: 0x2A...F91</span>
          </div>
        </div>
      </div>
    </div>
  );
}
