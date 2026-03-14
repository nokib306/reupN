import { FolderUp } from 'lucide-react';

export function DragDropZone({ label, icon: Icon = FolderUp, description = "video here or tap to select" }: { label?: string, icon?: any, description?: string }) {
  return (
    <div className="border border-dashed border-white/10 rounded-xl bg-[#0d1117]/50 p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-[#0d1117] hover:border-[#00f0ff]/50 transition-colors group">
      <Icon className="w-10 h-10 text-[#ffb000] mb-4 group-hover:scale-110 transition-transform" />
      <div className="text-sm text-gray-400">
        <span className="text-[#00f0ff] font-medium">Drag & Drop</span> {description}
      </div>
    </div>
  );
}
