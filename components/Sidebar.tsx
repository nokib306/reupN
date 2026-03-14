import { RefreshCw, Laptop, Infinity, Clapperboard, Download, Image as ImageIcon, Fingerprint, Flame, Wand2, Rocket, Search } from 'lucide-react';
import { clsx } from 'clsx';

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
    <div className="w-64 bg-[#0d1117] border-r border-white/5 flex flex-col h-full">
      <div className="p-6 flex items-center gap-2">
        <span className="text-xl font-bold tracking-wider text-[#00f0ff]">upNre26</span>
        <span className="text-[9px] px-2 py-0.5 border border-[#00f0ff]/30 rounded-full text-[#00f0ff] uppercase tracking-widest bg-[#00f0ff]/5">Command Center</span>
      </div>
      
      <div className="px-6 py-4 text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
        Tools
      </div>
      
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={clsx(
                "w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-[#1a2332] text-white border border-[#00f0ff]/20 shadow-[0_0_15px_rgba(0,240,255,0.05)]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={clsx("w-4 h-4", isActive ? "text-[#00f0ff]" : "text-gray-500")} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={clsx("text-[8px] px-1.5 py-0.5 border rounded tracking-wider uppercase font-bold", item.badgeColor)}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      
      <div className="p-6 text-[10px] font-mono text-gray-600 border-t border-white/5">
        upNre26 v10 • Hybrid Engine
      </div>
    </div>
  );
}
