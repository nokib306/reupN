import { useState } from 'react';
import { DragDropZone } from '../DragDropZone';
import { Terminal, ChevronDown, ChevronUp, Zap, Settings2, Activity, Cpu, Shield, Play, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

export default function ReEncode() {
  const [showLogs, setShowLogs] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('READY');

  const startProcessing = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setShowLogs(true);
    setProgress(0);
    setStatus('INITIALIZING');

    const steps = [
      { p: 10, s: 'ANALYZING SOURCE' },
      { p: 30, s: 'DECRYPTING METADATA' },
      { p: 50, s: 'APPLYING NEURAL BYPASS' },
      { p: 70, s: 'RE-ENCODING FRAMES' },
      { p: 90, s: 'FINALIZING WRAPPER' },
      { p: 100, s: 'COMPLETED' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setStatus(steps[currentStep].s);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setStatus('READY');
        }, 2000);
      }
    }, 1500);
  };

  // Mock FFmpeg logs for demonstration
  const mockLogs = `[ffmpeg] Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'input.mp4':
[ffmpeg]   Metadata:
[ffmpeg]     major_brand     : isom
[ffmpeg]     minor_version   : 512
[ffmpeg]     compatible_brands: isomiso2avc1mp41
[ffmpeg]     encoder         : Lavf58.76.100
[ffmpeg]   Duration: 00:03:45.12, start: 0.000000, bitrate: 2541 kb/s
[ffmpeg]   Stream #0:0(und): Video: h264 (High) (avc1 / 0x31637661), yuv420p, 1920x1080 [SAR 1:1 DAR 16:9], 2406 kb/s, 30 fps, 30 tbr, 90k tbn, 60 tbc (default)
[ffmpeg]   Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 128 kb/s (default)
[ffmpeg] Stream mapping:
[ffmpeg]   Stream #0:0 -> #0:0 (h264 (native) -> libx264 (libx264))
[ffmpeg]   Stream #0:1 -> #0:1 (aac (native) -> aac (native))
[ffmpeg] Press [q] to stop, [?] for help
[ffmpeg] frame=  123 fps= 41 q=28.0 size=    1024kB time=00:00:04.10 bitrate=2048.0kbits/s speed=1.37x    
[ffmpeg] frame=  256 fps= 42 q=28.0 size=    2048kB time=00:00:08.53 bitrate=1966.1kbits/s speed=1.40x    
[ffmpeg] frame=  389 fps= 43 q=28.0 size=    3072kB time=00:00:12.96 bitrate=1940.0kbits/s speed=1.43x    
[ffmpeg] frame=  512 fps= 43 q=28.0 size=    4096kB time=00:00:17.06 bitrate=1966.1kbits/s speed=1.43x    
[ffmpeg] frame=  645 fps= 44 q=28.0 size=    5120kB time=00:00:21.50 bitrate=1950.5kbits/s speed=1.46x    
[ffmpeg] frame=  778 fps= 44 q=28.0 size=    6144kB time=00:00:25.93 bitrate=1940.0kbits/s speed=1.47x    
[ffmpeg] frame=  911 fps= 45 q=28.0 size=    7168kB time=00:00:30.36 bitrate=1933.2kbits/s speed=1.50x    
[ffmpeg] frame= 1044 fps= 45 q=28.0 size=    8192kB time=00:00:34.80 bitrate=1928.3kbits/s speed=1.50x    
[ffmpeg] frame= 1177 fps= 45 q=28.0 size=    9216kB time=00:00:39.23 bitrate=1924.5kbits/s speed=1.50x    
[ffmpeg] frame= 1310 fps= 45 q=28.0 size=   10240kB time=00:00:43.66 bitrate=1921.5kbits/s speed=1.50x    
[ffmpeg] frame= 1443 fps= 46 q=28.0 size=   11264kB time=00:00:48.10 bitrate=1919.0kbits/s speed=1.53x    
[ffmpeg] frame= 1576 fps= 46 q=28.0 size=   12288kB time=00:00:52.53 bitrate=1916.8kbits/s speed=1.53x    
[ffmpeg] frame= 1709 fps= 46 q=28.0 size=   13312kB time=00:00:56.96 bitrate=1915.0kbits/s speed=1.53x    
[ffmpeg] frame= 1842 fps= 46 q=28.0 size=   14336kB time=00:01:01.40 bitrate=1913.4kbits/s speed=1.53x    
[ffmpeg] frame= 1975 fps= 46 q=28.0 size=   15360kB time=00:01:05.83 bitrate=1912.0kbits/s speed=1.53x    
[ffmpeg] frame= 2108 fps= 46 q=28.0 size=   16384kB time=00:01:10.26 bitrate=1910.8kbits/s speed=1.53x    
[ffmpeg] frame= 2241 fps= 46 q=28.0 size=   17408kB time=00:01:14.70 bitrate=1909.7kbits/s speed=1.53x    
[ffmpeg] frame= 2374 fps= 46 q=28.0 size=   18432kB time=00:01:19.13 bitrate=1908.7kbits/s speed=1.53x    
[ffmpeg] frame= 2507 fps= 46 q=28.0 size=   19456kB time=00:01:23.56 bitrate=1907.8kbits/s speed=1.53x    
[ffmpeg] frame= 2640 fps= 46 q=28.0 size=   20480kB time=00:01:28.00 bitrate=1907.0kbits/s speed=1.53x    
[ffmpeg] frame= 2773 fps= 46 q=28.0 size=   21504kB time=00:01:32.43 bitrate=1906.3kbits/s speed=1.53x    
[ffmpeg] frame= 2906 fps= 46 q=28.0 size=   22528kB time=00:01:36.86 bitrate=1905.6kbits/s speed=1.53x    
[ffmpeg] frame= 3039 fps= 46 q=28.0 size=   23552kB time=00:01:41.30 bitrate=1905.0kbits/s speed=1.53x    
[ffmpeg] frame= 3172 fps= 46 q=28.0 size=   24576kB time=00:01:45.73 bitrate=1904.5kbits/s speed=1.53x    
[ffmpeg] frame= 3305 fps= 46 q=28.0 size=   25600kB time=00:01:50.16 bitrate=1904.0kbits/s speed=1.53x    
[ffmpeg] frame= 3438 fps= 46 q=28.0 size=   26624kB time=00:01:54.60 bitrate=1903.5kbits/s speed=1.53x    
[ffmpeg] frame= 3571 fps= 46 q=28.0 size=   27648kB time=00:01:59.03 bitrate=1903.1kbits/s speed=1.53x    
[ffmpeg] frame= 3571 fps= 46 q=28.0 size=   27648kB time=00:01:59.03 bitrate=1903.1kbits/s speed=1.53x    
[ffmpeg] frame= 3704 fps= 46 q=28.0 size=   28672kB time=00:02:03.46 bitrate=1902.7kbits/s speed=1.53x    
[ffmpeg] frame= 3837 fps= 46 q=28.0 size=   29696kB time=00:02:07.90 bitrate=1902.3kbits/s speed=1.53x    
[ffmpeg] frame= 3970 fps= 46 q=28.0 size=   30720kB time=00:02:12.33 bitrate=1902.0kbits/s speed=1.53x    
[ffmpeg] frame= 4103 fps= 46 q=28.0 size=   31744kB time=00:02:16.76 bitrate=1901.7kbits/s speed=1.53x    
[ffmpeg] frame= 4236 fps= 46 q=28.0 size=   32768kB time=00:02:21.20 bitrate=1901.4kbits/s speed=1.53x    
[ffmpeg] frame= 4369 fps= 46 q=28.0 size=   33792kB time=00:02:25.63 bitrate=1901.1kbits/s speed=1.53x    
[ffmpeg] frame= 4502 fps= 46 q=28.0 size=   34816kB time=00:02:30.06 bitrate=1900.8kbits/s speed=1.53x    
[ffmpeg] frame= 4635 fps= 46 q=28.0 size=   35840kB time=00:02:34.50 bitrate=1900.6kbits/s speed=1.53x    
[ffmpeg] frame= 4768 fps= 46 q=28.0 size=   36864kB time=00:02:38.93 bitrate=1900.4kbits/s speed=1.53x    
[ffmpeg] frame= 4901 fps= 46 q=28.0 size=   37888kB time=00:02:43.36 bitrate=1900.2kbits/s speed=1.53x    
[ffmpeg] frame= 5034 fps= 46 q=28.0 size=   38912kB time=00:02:47.80 bitrate=1900.0kbits/s speed=1.53x    
[ffmpeg] frame= 5167 fps= 46 q=28.0 size=   39936kB time=00:02:52.23 bitrate=1899.8kbits/s speed=1.53x    
[ffmpeg] frame= 5300 fps= 46 q=28.0 size=   40960kB time=00:02:56.66 bitrate=1899.6kbits/s speed=1.53x    
[ffmpeg] frame= 5433 fps= 46 q=28.0 size=   41984kB time=00:03:01.10 bitrate=1899.4kbits/s speed=1.53x    
[ffmpeg] frame= 5566 fps= 46 q=28.0 size=   43008kB time=00:03:05.53 bitrate=1899.3kbits/s speed=1.53x    
[ffmpeg] frame= 5699 fps= 46 q=28.0 size=   44032kB time=00:03:09.96 bitrate=1899.1kbits/s speed=1.53x    
[ffmpeg] frame= 5832 fps= 46 q=28.0 size=   45056kB time=00:03:14.40 bitrate=1899.0kbits/s speed=1.53x    
[ffmpeg] frame= 5965 fps= 46 q=28.0 size=   46080kB time=00:03:18.83 bitrate=1898.8kbits/s speed=1.53x    
[ffmpeg] frame= 6098 fps= 46 q=28.0 size=   47104kB time=00:03:23.26 bitrate=1898.7kbits/s speed=1.53x    
[ffmpeg] frame= 6231 fps= 46 q=28.0 size=   48128kB time=00:03:27.70 bitrate=1898.6kbits/s speed=1.53x    
[ffmpeg] frame= 6364 fps= 46 q=28.0 size=   49152kB time=00:03:32.13 bitrate=1898.4kbits/s speed=1.53x    
[ffmpeg] frame= 6497 fps= 46 q=28.0 size=   50176kB time=00:03:36.56 bitrate=1898.3kbits/s speed=1.53x    
[ffmpeg] frame= 6630 fps= 46 q=28.0 size=   51200kB time=00:03:41.00 bitrate=1898.2kbits/s speed=1.53x    
[ffmpeg] frame= 6753 fps= 46 q=28.0 size=   52148kB time=00:03:45.12 bitrate=1898.0kbits/s speed=1.53x    
[ffmpeg] video:51312kB audio:3517kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.036481%`;

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Hybrid Engine <span className="text-[#00f0ff]">v10</span></h1>
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-3">
            <span>VISUAL EVASION</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>AI AUDIO (DEMUCS)</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>SEGMENT SWAP</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>TEMPLATE LAYOUTS</span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Engine Load</span>
            <span className="text-xs font-mono text-[#00ff9d]">12.4%</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Threads</span>
            <span className="text-xs font-mono text-[#00f0ff]">64/64</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Controls */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/20 to-[#ff2a5f]/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative glass-panel p-8 rounded-3xl space-y-8">
              <DragDropZone />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">Layout Configuration</label>
                  <Settings2 className="w-3 h-3 text-gray-700" />
                </div>
                <div className="relative group/select">
                  <select className="w-full bg-[#020408] border border-white/10 rounded-2xl p-5 text-sm font-bold text-white focus:outline-none focus:border-[#00f0ff]/50 transition-all cursor-pointer appearance-none">
                    <option>⚡ God Mode v2 (Lifetime Clean)</option>
                    <option>🤝 PT 2.0 (Partner Viral)</option>
                    <option>🚀 Extreme God Sci-Fi (ARRI ALEXA)</option>
                    <option>💪 EXTREME Arms (Viral Machine)</option>
                    <option>🎬 Compilation Mix (100K Strategy)</option>
                    <option>🛡️ Full Evasion (Max Stealth)</option>
                    <option>👻 Phantom Grade (10000-Year)</option>
                    <option>🎥 Cinema Bars (Widescreen)</option>
                    <option>📱 FB & IG Reels (No Flip)</option>
                    <option>📱 Shorts (9:16 Vertical)</option>
                    <option>📱 Reels Pro (needs reaction)</option>
                    <option>📺 Split-Screen (needs reaction)</option>
                    <option>🖼️ PiP Corner (needs reaction)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-gray-500 group-hover/select:text-[#00f0ff] transition-colors">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={startProcessing}
                  disabled={isProcessing}
                  className={clsx(
                    "w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all active:scale-[0.98] flex items-center justify-center gap-3",
                    isProcessing 
                      ? "bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed" 
                      : "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                  )}
                >
                  {isProcessing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                  {isProcessing ? `PROCESSING ${progress}%` : 'Initialize Hybrid Encoding'}
                </button>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[9px] font-black text-[#00f0ff] uppercase tracking-widest">{status}</span>
                      <span className="text-[9px] font-mono text-[#00f0ff]">{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Logs Section */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
            <button 
              onClick={() => setShowLogs(!showLogs)}
              className="flex items-center justify-between w-full p-6 text-left hover:bg-white/[0.02] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#00f0ff]/10 transition-colors">
                  <Terminal className="w-5 h-5 text-gray-500 group-hover:text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">FFmpeg Engine Diagnostics</h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Real-time kernel output</p>
                </div>
              </div>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-300", showLogs && "rotate-180")}>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </button>
            
            <AnimatePresence>
              {showLogs && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <div className="bg-[#020408] border border-white/5 rounded-2xl p-6 h-80 overflow-y-auto font-mono text-[11px] text-[#00ff9d]/70 leading-relaxed custom-scrollbar shadow-inner">
                      <pre className="whitespace-pre-wrap break-all">{mockLogs}</pre>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Stats & Info */}
        <div className="space-y-8">
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-[#ff2a5f]" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Module Status</span>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Neural Bypass', status: 'Online', color: 'text-[#00ff9d]' },
                { label: 'Audio Demucs', status: 'Standby', color: 'text-[#ffb000]' },
                { label: 'Metadata Scrub', status: 'Ready', color: 'text-[#00f0ff]' },
                { label: 'Segment Swap', status: 'Active', color: 'text-[#00ff9d]' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{stat.label}</span>
                  <span className={clsx("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Hardware Acceleration</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#00f0ff]/5 border border-[#00f0ff]/10">
              <p className="text-[11px] font-medium text-[#00f0ff] leading-relaxed">
                NVIDIA CUDA Core detection active. Parallel processing enabled for 4K rendering.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-dashed border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-gray-500" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Security Protocol</span>
            </div>
            <p className="text-[10px] font-medium text-gray-600 leading-relaxed italic">
              &quot;All processing is performed locally. No data is transmitted to external servers during the re-encoding phase.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
