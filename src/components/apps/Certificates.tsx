const certs = [
  {
    title: "Solidity Smart Contract Development",
    org: "Cyfrin Updraft · Jul 2025 · JOM634NUM441",
    desc: "https://profiles.cyfrin.io/u/ritabrata070/achievements/solidity"
  },
  {
    title: "Blockchain Basics",
    org: "Cyfrin · Jun 2025 - Jun 2026 · BBCC-C6M4MMKVMHSTG",
    desc: "Blockchain fundamentals"
  },
  {
    title: "Mastercard - Cybersecurity Job Simulation",
    org: "Forage · Dec 2024 · kqDJjbJpSWn8XCqzw",
    desc: "Security fundamentals"
  },
  {
    title: "Tata Data Visualisation",
    org: "Forage · Dec 2024 · 4AM7DoLQjDW4xZnQZ",
    desc: "Empowering Business with Effective Insights"
  },
  {
    title: "What Is Generative AI?",
    org: "LinkedIn · Oct 2024",
    desc: "Generative AI Tools, Generative AI"
  },
  {
    title: "Introduction to Deep Learning",
    org: "Infosys Springboard · Oct 2024",
    desc: "Data Science"
  },
  {
    title: "Store Listing Certificate",
    org: "Google Play Academy · Oct 2024 - Oct 2027 · 118617067",
    desc: "Mobile Marketing, Google Play"
  }
];

export default function Certificates() {
  return (
    <div className="flex h-full w-full overflow-auto bg-[#edf5ff] text-[#1d2735]">
      <div className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(236,245,255,0.96)_48%,_rgba(219,233,248,0.94)_100%)] p-5 sm:p-6">
        <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-[#c8d9ee] bg-white/55 shadow-[0_28px_70px_rgba(33,72,118,0.12)] backdrop-blur-xl">
          <div className="flex items-center gap-3 border-b border-[#d8e4f3] px-5 py-4">
            <img
              src="img/icons/certificates-folder.svg"
              alt="Certificates"
              className="size-10 object-contain"
              draggable={false}
            />
            <div className="text-sm font-medium tracking-[0.08em] text-[#49627e]">
              Certificates
            </div>
          </div>

          <div className="grid flex-1 content-start gap-4 overflow-auto p-5 sm:grid-cols-2">
            {certs.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[#d8e4f3] bg-white p-4 shadow-sm"
              >
                <div className="text-sm font-bold text-[#1d2735]">{c.title}</div>
                <div className="mt-1 text-xs font-semibold text-[#49627e]">{c.org}</div>
                <div className="mt-2 text-xs text-[#5b7288]">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
