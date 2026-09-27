import { useEffect, useState } from "react";

const profileUrl = "https://github.com/Ritabrata777";

interface Day {
  date: string;
  count: number;
  level: number;
}

const color = (l: number) =>
  l === 0
    ? "bg-[#161b22]"
    : l === 1
      ? "bg-[#0e4429]"
      : l === 2
        ? "bg-[#006d32]"
        : l === 3
          ? "bg-[#26a641]"
          : "bg-[#39d353]";

export default function GitHub() {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState(372);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/Ritabrata777?y=last")
      .then((r) => r.json())
      .then((j) => {
        if (j?.contributions) setDays(j.contributions);
        if (j?.total?.lastYear) setTotal(j.total.lastYear);
      })
      .catch(() => {});
  }, []);

  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  return (
    <div className="flex h-full w-full flex-col bg-[#0d1117] text-[#e6edf3]">
      <div className="flex items-center gap-2 border-b border-[#21262d] px-4 py-2 text-xs">
        <img src="img/icons/github.png" alt="" className="size-5 object-contain" draggable={false} />
        <span className="font-semibold">Ritabrata777</span>
        <button
          type="button"
          onClick={() => window.open(profileUrl, "_blank", "noopener,noreferrer")}
          className="ml-auto rounded-md bg-[#238636] px-2 py-1 text-xs font-semibold text-white hover:bg-[#2ea043]"
        >
          Open on GitHub
        </button>
      </div>

      <div className="flex flex-1 gap-4 overflow-auto p-4">
        <div className="w-52 shrink-0">
          <img
            src="img/ui/avatar.jpg"
            alt="Ritabrata Majumdar"
            className="size-40 rounded-full border border-[#30363d] object-cover"
            draggable={false}
          />
          <div className="mt-3 text-lg font-bold leading-tight">Ritabrata Majumdar</div>
          <div className="text-sm text-[#8b949e]">Ritabrata777 · he/him</div>
          <div className="mt-3 text-xs leading-5">
            Bridging the gap between Hardware (IoT) and Blockchain (Web3). Engineering trustless infrastructure with
            AI-driven insights. ECE Undergrad @ HITK'28
          </div>
          <div className="mt-3 rounded-md border border-[#30363d] bg-[#21262d] py-1 text-center text-xs font-semibold">
            Edit profile
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="rounded-xl border border-[#30363d] p-4">
            <div className="text-xs text-[#8b949e]">Ritabrata777 / README.md</div>
            <div className="mt-2 rounded-lg bg-gradient-to-r from-[#1c4a5a] to-[#0d1117] p-6 text-center text-3xl font-bold text-[#79c0ff]">
              Ritabrata Majumdar
            </div>
            <div className="mt-3 text-sm">I'm Ritabrata Majumdar, a Blockchain Enthusiast & ECE Student.</div>
            <div className="mt-2 text-sm italic text-[#8b949e]">"Bringing ideas to life through innovation and code."</div>
          </div>

          <div className="mt-4 rounded-xl border border-[#30363d] p-4">
            <div className="text-sm">
              {days.length ? `${total} contributions in the last year` : "Loading contributions…"}
            </div>
            <div className="mt-3 overflow-x-auto">
              <div className="flex gap-1">
                <div className="flex w-7 flex-col gap-1 text-[10px] text-[#8b949e]">
                  <span className="h-2.5">Mon</span>
                  <span className="h-2.5" />
                  <span className="h-2.5">Wed</span>
                  <span className="h-2.5" />
                  <span className="h-2.5">Fri</span>
                  <span className="h-2.5" />
                  <span className="h-2.5" />
                </div>
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((d) => (
                      <span
                        key={d.date}
                        title={`${d.date}: ${d.count}`}
                        className={`h-2.5 w-2.5 rounded-[2px] border border-[#ffffff10] ${color(d.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-[#8b949e]">
                <span>Live from github-contributions-api</span>
                <span className="flex items-center gap-1">
                  Less
                  {[0, 1, 2, 3, 4].map((l) => (
                    <span key={l} className={`h-2.5 w-2.5 rounded-[2px] ${color(l)}`} />
                  ))}
                  More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
