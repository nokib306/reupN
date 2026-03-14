import { useState } from 'react';
import { DragDropZone } from '../DragDropZone';
import { Terminal, ChevronDown, ChevronUp } from 'lucide-react';

export default function ReEncode() {
  const [showLogs, setShowLogs] = useState(false);

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
    <div className="max-w-4xl pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 tracking-wide text-white">Hybrid Engine v10</h1>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span>Visual Evasion + AI Audio (Demucs)</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>Segment Swap</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>Template Layouts</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>All content</span>
        </p>
      </div>
      
      <div className="space-y-8 border border-white/5 bg-[#0d1117]/30 p-8 rounded-2xl">
        <DragDropZone />
        
        <div>
          <label className="block text-xs font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">Layout Template</label>
          <div className="relative">
            <select className="w-full bg-[#0d1117] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 appearance-none transition-all cursor-pointer">
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
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <button 
            onClick={() => setShowLogs(!showLogs)}
            className="flex items-center justify-between w-full text-left bg-[#0d1117] border border-white/5 hover:border-white/10 p-4 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                <Terminal className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-300 tracking-wide">FFmpeg Engine Logs</h3>
                <p className="text-xs text-gray-500">Advanced diagnostic output</p>
              </div>
            </div>
            {showLogs ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
          </button>
          
          {showLogs && (
            <div className="mt-4 bg-[#05090f] border border-white/10 rounded-xl p-4 h-64 overflow-y-auto font-mono text-xs text-green-400/80 leading-relaxed custom-scrollbar shadow-inner">
              <pre className="whitespace-pre-wrap break-all">{mockLogs}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
