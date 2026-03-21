export default function VSCode() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#111315] text-[#e7e7e7]">
      <div className="mx-6 w-full max-w-2xl rounded-3xl border border-white/8 bg-white/4 p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1f4e79]/80 text-white shadow-lg shadow-black/30">
          <span className="i-mdi:hammer-wrench text-4xl" />
        </div>
        <div className="mt-6 text-xs uppercase tracking-[0.32em] text-[#7fb7ff]">
          Workspace Update
        </div>
        <h2 className="mt-4 text-4xl font-semibold text-white">Under Construction</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#b7bec7]">
          The VS Code workspace is being redesigned to match the rest of the macOS
          portfolio more cleanly. A better editor experience will be added in the next
          polish pass.
        </p>
        <div className="mt-8 grid gap-3 text-left text-sm text-[#d9dee3] sm:grid-cols-3">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#7a8591]">Status</div>
            <div className="mt-2 text-lg font-medium text-white">In progress</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#7a8591]">Focus</div>
            <div className="mt-2 text-lg font-medium text-white">Better visual polish</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#7a8591]">Next</div>
            <div className="mt-2 text-lg font-medium text-white">Real project workspace</div>
          </div>
        </div>
      </div>
    </div>
  );
}
