import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type FileId = "readme.md" | "tic-tac-toe.tsx" | "snake.tsx" | "package.json";
type ActivityId = "explorer" | "search" | "source" | "run" | "extensions";
type Player = "X" | "O";
type TicCell = Player | null;
type Direction = "up" | "down" | "left" | "right";
type IconName =
  | "files"
  | "search"
  | "source"
  | "run"
  | "extensions"
  | "account"
  | "settings"
  | "layout";

interface CodeFile {
  title: string;
  path: string;
  language: string;
  code: string;
}

interface SnakePoint {
  x: number;
  y: number;
}

interface TicTacToeResult {
  winner: Player | null;
  line: number[];
}

const fileOrder: FileId[] = ["readme.md", "tic-tac-toe.tsx", "snake.tsx", "package.json"];

const workspaceFiles: Record<FileId, CodeFile> = {
  "readme.md": {
    title: "README.md",
    path: "ritabrata-games/README.md",
    language: "Markdown",
    code: `# Ritabrata Mini Arcade

This workspace works like a tiny VS Code project.

## Games

- tic-tac-toe.tsx: play X against a simple blocker AI.
- snake.tsx: collect pixels, dodge walls, keep the score climbing.

Open a file from Explorer or from the tabs, then press Run Preview.
Snake also supports arrow keys and WASD while this window is open.`
  },
  "tic-tac-toe.tsx": {
    title: "tic-tac-toe.tsx",
    path: "ritabrata-games/src/games/tic-tac-toe.tsx",
    language: "TypeScript React",
    code: `type Player = "X" | "O";
type Cell = Player | null;

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function getWinner(board: Cell[]) {
  return wins.find(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

export function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));

  function play(index: number) {
    if (board[index] || getWinner(board)) return;
    const next = [...board];
    next[index] = "X";
    setBoard(next);
  }

  return <GameBoard cells={board} onPlay={play} />;
}`
  },
  "snake.tsx": {
    title: "snake.tsx",
    path: "ritabrata-games/src/games/snake.tsx",
    language: "TypeScript React",
    code: `type Direction = "up" | "down" | "left" | "right";

const grid = 13;
const start = [
  { x: 6, y: 6 },
  { x: 5, y: 6 },
  { x: 4, y: 6 }
];

function moveHead(head, direction: Direction) {
  if (direction === "up") return { ...head, y: head.y - 1 };
  if (direction === "down") return { ...head, y: head.y + 1 };
  if (direction === "left") return { ...head, x: head.x - 1 };
  return { ...head, x: head.x + 1 };
}

export function Snake() {
  const [snake, setSnake] = useState(start);
  const [direction, setDirection] = useState<Direction>("right");

  useInterval(() => {
    setSnake((body) => {
      const nextHead = moveHead(body[0], direction);
      return [nextHead, ...body.slice(0, -1)];
    });
  }, 150);

  return <PixelGrid snake={snake} />;
}`
  },
  "package.json": {
    title: "package.json",
    path: "ritabrata-games/package.json",
    language: "JSON",
    code: `{
  "name": "ritabrata-mini-arcade",
  "private": true,
  "scripts": {
    "dev": "vite --host",
    "play": "open vscode-preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "typescript": "^5.4.5",
    "vite": "^5.2.10"
  }
}`
  }
};

const ticTacToeWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const snakeGridSize = 13;
const initialSnake: SnakePoint[] = [
  { x: 6, y: 6 },
  { x: 5, y: 6 },
  { x: 4, y: 6 }
];

function Glyph({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-4 min-w-4 items-center justify-center font-mono text-[10px] font-semibold leading-none ${className}`}
    >
      {label}
    </span>
  );
}

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    files: (
      <>
        <path d="M6.5 3.5h6l3 3v10h-9z" />
        <path d="M12.5 3.5v3h3" />
        <path d="M4 6.5h-1.5v10h7v-1.5" />
      </>
    ),
    search: (
      <>
        <circle cx="8.5" cy="8.5" r="4.5" />
        <path d="m12 12 4 4" />
      </>
    ),
    source: (
      <>
        <circle cx="6" cy="5" r="2" />
        <circle cx="14" cy="15" r="2" />
        <circle cx="6" cy="15" r="2" />
        <path d="M6 7v6" />
        <path d="M8 5h2.5a3.5 3.5 0 0 1 3.5 3.5V13" />
      </>
    ),
    run: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="M8 6.5v7l5.5-3.5z" />
      </>
    ),
    extensions: (
      <>
        <path d="M7 3h4v4h4v4h-4v4H7v-4H3V7h4z" />
        <path d="M7 7h4v4H7z" />
      </>
    ),
    account: (
      <>
        <circle cx="10" cy="7" r="3" />
        <path d="M4 17a6 6 0 0 1 12 0" />
      </>
    ),
    settings: (
      <>
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 2.8v2" />
        <path d="M10 15.2v2" />
        <path d="M2.8 10h2" />
        <path d="M15.2 10h2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m13.7 13.7 1.4 1.4" />
        <path d="m15.1 4.9-1.4 1.4" />
        <path d="m6.3 13.7-1.4 1.4" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="4" width="14" height="12" rx="1.5" />
        <path d="M8 4v12" />
        <path d="M13 4v12" />
      </>
    )
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-5 w-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.45"
    >
      {paths[name]}
    </svg>
  );
}

function fileIcon(file: FileId) {
  if (file === "readme.md") {
    return <Glyph label="MD" className="text-[#66d9ef]" />;
  }

  if (file === "package.json") {
    return <Glyph label="{}" className="text-[#f1c40f]" />;
  }

  if (file === "snake.tsx") {
    return <Glyph label="SN" className="text-[#6ee7b7]" />;
  }

  return <Glyph label="TS" className="text-[#4fc1ff]" />;
}

function getTicTacToeResult(board: TicCell[]): TicTacToeResult {
  for (const line of ticTacToeWins) {
    const [a, b, c] = line;
    const winner = board[a];

    if (winner && winner === board[b] && winner === board[c]) {
      return { winner, line };
    }
  }

  return { winner: null, line: [] };
}

function getBestTicTacToeMove(board: TicCell[]): number {
  const empty = board
    .map((cell, index) => (cell ? -1 : index))
    .filter((index) => index !== -1);

  const findMove = (player: Player) =>
    empty.find((index) => {
      const test = [...board];
      test[index] = player;
      return getTicTacToeResult(test).winner === player;
    });

  return (
    findMove("O") ??
    findMove("X") ??
    (board[4] ? undefined : 4) ??
    empty.find((index) => [0, 2, 6, 8].includes(index)) ??
    empty[0] ??
    0
  );
}

function samePoint(a: SnakePoint, b: SnakePoint) {
  return a.x === b.x && a.y === b.y;
}

function makeFood(snake: SnakePoint[]): SnakePoint {
  const occupied = new Set(snake.map((point) => `${point.x}:${point.y}`));
  const free: SnakePoint[] = [];

  for (let y = 0; y < snakeGridSize; y += 1) {
    for (let x = 0; x < snakeGridSize; x += 1) {
      if (!occupied.has(`${x}:${y}`)) {
        free.push({ x, y });
      }
    }
  }

  return free[Math.floor(Math.random() * free.length)] ?? { x: 1, y: 1 };
}

function nextSnakeHead(head: SnakePoint, direction: Direction): SnakePoint {
  if (direction === "up") return { x: head.x, y: head.y - 1 };
  if (direction === "down") return { x: head.x, y: head.y + 1 };
  if (direction === "left") return { x: head.x - 1, y: head.y };
  return { x: head.x + 1, y: head.y };
}

function isOpposite(a: Direction, b: Direction) {
  return (
    (a === "up" && b === "down") ||
    (a === "down" && b === "up") ||
    (a === "left" && b === "right") ||
    (a === "right" && b === "left")
  );
}

function ActivityButton({
  active,
  icon,
  label,
  onClick
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`relative flex h-12 w-full items-center justify-center text-[21px] transition ${
        active ? "text-white" : "text-[#858585] hover:text-[#cfcfcf]"
      }`}
    >
      {active && <span className="absolute left-0 h-8 w-0.5 bg-white" />}
      {icon}
    </button>
  );
}

function ExplorerFile({
  file,
  active,
  depth = 0,
  onOpen
}: {
  file: FileId;
  active: boolean;
  depth?: number;
  onOpen: (file: FileId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(file)}
      className={`flex h-7 w-full min-w-0 items-center gap-2 px-2 text-left text-[13px] transition ${
        active ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]"
      }`}
      style={{ paddingLeft: `${8 + depth * 14}px` }}
    >
      <span className="shrink-0 text-base">{fileIcon(file)}</span>
      <span className="truncate">{workspaceFiles[file].title}</span>
    </button>
  );
}

function Sidebar({
  activeFile,
  activity,
  onOpen
}: {
  activeFile: FileId;
  activity: ActivityId;
  onOpen: (file: FileId) => void;
}) {
  if (activity === "search") {
    return (
      <aside className="vscode-scrollbar hidden w-52 shrink-0 overflow-auto border-r border-[#2b2b2b] bg-[#252526] text-[#cccccc] sm:block">
        <div className="px-4 py-3 text-[11px] uppercase tracking-wide text-[#bbbbbb]">Search</div>
        <div className="px-3">
          <div className="flex h-8 items-center gap-2 rounded bg-[#3c3c3c] px-2 text-xs text-[#969696]">
            <Glyph label="?" />
            <span>games, score, board</span>
          </div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="text-[#8f8f8f]">3 results in workspace</div>
            <button type="button" onClick={() => onOpen("tic-tac-toe.tsx")} className="block w-full rounded px-2 py-1.5 text-left hover:bg-[#2a2d2e]">
              getBestTicTacToeMove
            </button>
            <button type="button" onClick={() => onOpen("snake.tsx")} className="block w-full rounded px-2 py-1.5 text-left hover:bg-[#2a2d2e]">
              nextSnakeHead
            </button>
            <button type="button" onClick={() => onOpen("readme.md")} className="block w-full rounded px-2 py-1.5 text-left hover:bg-[#2a2d2e]">
              Mini Arcade
            </button>
          </div>
        </div>
      </aside>
    );
  }

  if (activity === "run") {
    return (
      <aside className="vscode-scrollbar hidden w-52 shrink-0 overflow-auto border-r border-[#2b2b2b] bg-[#252526] text-[#cccccc] sm:block">
        <div className="px-4 py-3 text-[11px] uppercase tracking-wide text-[#bbbbbb]">Run And Debug</div>
        <div className="px-3 text-xs">
          <div className="rounded border border-[#3d3d3d] bg-[#1e1e1e] p-3">
            <div className="font-medium text-white">Launch Preview</div>
            <p className="mt-2 leading-5 text-[#a9a9a9]">Pick a game file and use the live panel to play it.</p>
          </div>
          <button
            type="button"
            onClick={() => onOpen("tic-tac-toe.tsx")}
            className="mt-3 flex h-8 w-full items-center justify-center gap-2 rounded bg-[#0e639c] text-white hover:bg-[#1177bb]"
          >
            <Glyph label=">" />
            Tic Tac Toe
          </button>
          <button
            type="button"
            onClick={() => onOpen("snake.tsx")}
            className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded bg-[#0e639c] text-white hover:bg-[#1177bb]"
          >
            <Glyph label=">" />
            Snake
          </button>
        </div>
      </aside>
    );
  }

  if (activity === "source" || activity === "extensions") {
    return (
      <aside className="vscode-scrollbar hidden w-52 shrink-0 overflow-auto border-r border-[#2b2b2b] bg-[#252526] text-[#cccccc] sm:block">
        <div className="px-4 py-3 text-[11px] uppercase tracking-wide text-[#bbbbbb]">
          {activity === "source" ? "Source Control" : "Extensions"}
        </div>
        <div className="px-3 text-xs leading-5 text-[#a9a9a9]">
          <div className="rounded border border-[#3d3d3d] bg-[#1e1e1e] p-3">
            <div className="font-medium text-white">
              {activity === "source" ? "main" : "Arcade Kit"}
            </div>
            <p className="mt-2">
              {activity === "source"
                ? "2 playable files staged in the local workspace."
                : "Game preview, code tabs, terminal, and editor layout enabled."}
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="vscode-scrollbar hidden w-52 shrink-0 overflow-auto border-r border-[#2b2b2b] bg-[#252526] text-[#cccccc] sm:block">
      <div className="flex h-10 items-center justify-between px-4 text-[11px] uppercase tracking-wide text-[#bbbbbb]">
        <span>Explorer</span>
        <Glyph label="..." className="text-[#8f8f8f]" />
      </div>
      <div className="border-t border-[#303030]">
        <div className="flex h-7 items-center gap-1 px-2 text-[11px] font-semibold uppercase text-[#cccccc]">
          <Glyph label="v" />
          Ritabrata Games
        </div>
        <ExplorerFile file="readme.md" active={activeFile === "readme.md"} onOpen={onOpen} depth={1} />
        <div className="flex h-7 items-center gap-1 px-2 pl-6 text-[13px] text-[#cccccc]">
          <Glyph label="v" />
          <Glyph label="[]" className="text-[#dcb67a]" />
          src
        </div>
        <div className="flex h-7 items-center gap-1 px-2 pl-10 text-[13px] text-[#cccccc]">
          <Glyph label="v" />
          <Glyph label="[]" className="text-[#dcb67a]" />
          games
        </div>
        <ExplorerFile file="tic-tac-toe.tsx" active={activeFile === "tic-tac-toe.tsx"} onOpen={onOpen} depth={3} />
        <ExplorerFile file="snake.tsx" active={activeFile === "snake.tsx"} onOpen={onOpen} depth={3} />
        <ExplorerFile file="package.json" active={activeFile === "package.json"} onOpen={onOpen} depth={1} />
      </div>
    </aside>
  );
}

function Editor({
  activeFile,
  onOpen
}: {
  activeFile: FileId;
  onOpen: (file: FileId) => void;
}) {
  const file = workspaceFiles[activeFile];
  const lines = useMemo(() => file.code.split("\n"), [file.code]);

  return (
    <section className="flex min-h-0 min-w-0 flex-1 flex-col bg-[#1e1e1e]">
      <div className="vscode-scrollbar flex h-9 shrink-0 overflow-x-auto border-b border-[#252526] bg-[#252526]">
        {fileOrder.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => onOpen(tab)}
            className={`flex h-9 min-w-32 items-center gap-2 border-r border-[#1e1e1e] px-3 text-[13px] ${
              activeFile === tab
                ? "border-t border-t-[#007acc] bg-[#1e1e1e] text-white"
                : "bg-[#2d2d2d] text-[#969696] hover:text-[#dddddd]"
            }`}
          >
            <span className="text-base">{fileIcon(tab)}</span>
            <span className="truncate">{workspaceFiles[tab].title}</span>
            {activeFile === tab && <Glyph label="x" className="text-[#cccccc]" />}
          </button>
        ))}
      </div>
      <div className="flex h-7 shrink-0 items-center gap-1 border-b border-[#2b2b2b] bg-[#1e1e1e] px-4 text-xs text-[#858585]">
        <span>{file.path.split("/")[0]}</span>
        <Glyph label=">" />
        <span>{file.path.split("/").slice(1, -1).join(" / ") || "root"}</span>
        <Glyph label=">" />
        <span className="text-[#cccccc]">{file.title}</span>
      </div>
      <div className="vscode-scrollbar min-h-0 flex-1 overflow-auto font-mono text-[12px] leading-5">
        <div className="min-w-max py-3">
          {lines.map((line, index) => (
            <div key={`${activeFile}-${index}`} className="group flex min-h-5 hover:bg-[#2a2d2e]/60">
              <span className="w-12 shrink-0 select-none pr-4 text-right text-[#858585] group-hover:text-[#c6c6c6]">
                {index + 1}
              </span>
              <code className="whitespace-pre pr-8 text-[#d4d4d4]">{line || " "}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TicTacToeGame() {
  const [board, setBoard] = useState<TicCell[]>(() => Array<TicCell>(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const result = useMemo(() => getTicTacToeResult(board), [board]);
  const isDraw = !result.winner && board.every(Boolean);

  useEffect(() => {
    if (xTurn || result.winner || isDraw) return;

    const timer = window.setTimeout(() => {
      const move = getBestTicTacToeMove(board);
      setBoard((current) => {
        if (current[move] || getTicTacToeResult(current).winner) {
          return current;
        }

        const next = [...current];
        next[move] = "O";
        return next;
      });
      setXTurn(true);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [board, isDraw, result.winner, xTurn]);

  const play = (index: number) => {
    if (!xTurn || board[index] || result.winner || isDraw) return;

    const next = [...board];
    next[index] = "X";
    setBoard(next);
    setXTurn(false);
  };

  const reset = () => {
    setBoard(Array<TicCell>(9).fill(null));
    setXTurn(true);
  };

  const status = result.winner
    ? `${result.winner === "X" ? "You" : "AI"} won`
    : isDraw
      ? "Draw game"
      : xTurn
        ? "Your move"
        : "AI thinking";

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#181818] text-[#d4d4d4]">
      <div className="flex shrink-0 items-center justify-between border-b border-[#2b2b2b] px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-white">Tic Tac Toe</div>
          <div className="text-xs text-[#8f8f8f]">You are X. The preview plays the compiled component.</div>
        </div>
        <button type="button" onClick={reset} className="rounded bg-[#0e639c] px-3 py-1.5 text-xs text-white hover:bg-[#1177bb]">
          Reset
        </button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 p-4">
        <div className="text-xs uppercase tracking-[0.16em] text-[#8f8f8f]">{status}</div>
        <div className="grid grid-cols-3 gap-2">
          {board.map((cell, index) => {
            const winning = result.line.includes(index);

            return (
              <button
                type="button"
                key={index}
                onClick={() => play(index)}
                className={`flex h-16 w-16 items-center justify-center rounded border text-3xl font-semibold transition sm:h-18 sm:w-18 ${
                  winning
                    ? "border-[#6ee7b7] bg-[#0f513f] text-white"
                    : "border-[#3a3a3a] bg-[#252526] text-[#d4d4d4] hover:border-[#007acc] hover:bg-[#2a2d2e]"
                }`}
              >
                {cell}
              </button>
            );
          })}
        </div>
        <div className="grid w-full max-w-xs grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded border border-[#333] bg-[#202020] p-2">
            <div className="text-[#8f8f8f]">Player</div>
            <div className="mt-1 font-semibold text-[#4fc1ff]">X</div>
          </div>
          <div className="rounded border border-[#333] bg-[#202020] p-2">
            <div className="text-[#8f8f8f]">Mode</div>
            <div className="mt-1 font-semibold text-white">AI</div>
          </div>
          <div className="rounded border border-[#333] bg-[#202020] p-2">
            <div className="text-[#8f8f8f]">File</div>
            <div className="mt-1 font-semibold text-[#6ee7b7]">tsx</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SnakeGame() {
  const [snake, setSnake] = useState<SnakePoint[]>(() => [...initialSnake]);
  const [food, setFood] = useState<SnakePoint>(() => makeFood(initialSnake));
  const [direction, setDirection] = useState<Direction>("right");
  const [nextDirection, setNextDirection] = useState<Direction>("right");
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const changeDirection = useCallback((wanted: Direction) => {
    setRunning(true);
    setNextDirection((current) => (isOpposite(wanted, current) ? current : wanted));
  }, []);

  const reset = useCallback(() => {
    const start = [...initialSnake];
    setSnake(start);
    setFood(makeFood(start));
    setDirection("right");
    setNextDirection("right");
    setRunning(false);
    setGameOver(false);
    setScore(0);
  }, []);

  useEffect(() => {
    const keyMap: Record<string, Direction | undefined> = {
      arrowup: "up",
      w: "up",
      arrowdown: "down",
      s: "down",
      arrowleft: "left",
      a: "left",
      arrowright: "right",
      d: "right"
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const wanted = keyMap[event.key.toLowerCase()];
      if (!wanted) return;
      event.preventDefault();
      changeDirection(wanted);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [changeDirection]);

  useEffect(() => {
    if (!running || gameOver) return;

    const timer = window.setInterval(() => {
      setSnake((current) => {
        const activeDirection = nextDirection;
        const head = nextSnakeHead(current[0], activeDirection);
        const hitWall = head.x < 0 || head.x >= snakeGridSize || head.y < 0 || head.y >= snakeGridSize;
        const eating = samePoint(head, food);
        const bodyToCheck = eating ? current : current.slice(0, -1);
        const hitSelf = bodyToCheck.some((point) => samePoint(point, head));

        setDirection(activeDirection);

        if (hitWall || hitSelf) {
          setRunning(false);
          setGameOver(true);
          return current;
        }

        const next = eating ? [head, ...current] : [head, ...current.slice(0, -1)];

        if (eating) {
          setFood(makeFood(next));
          setScore((value) => {
            const nextScore = value + 1;
            setBest((currentBest) => Math.max(currentBest, nextScore));
            return nextScore;
          });
        }

        return next;
      });
    }, 155);

    return () => window.clearInterval(timer);
  }, [food, gameOver, nextDirection, running]);

  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${snakeGridSize}, minmax(0, 1fr))`
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#181818] text-[#d4d4d4]">
      <div className="flex shrink-0 items-center justify-between border-b border-[#2b2b2b] px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-white">Snake</div>
          <div className="text-xs text-[#8f8f8f]">Use arrows, WASD, or the controls.</div>
        </div>
        <button type="button" onClick={reset} className="rounded bg-[#0e639c] px-3 py-1.5 text-xs text-white hover:bg-[#1177bb]">
          Reset
        </button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 p-4">
        <div className="flex w-full max-w-72 items-center justify-between text-xs">
          <span className="rounded bg-[#252526] px-2 py-1 text-[#cccccc]">Score {score}</span>
          <span className="rounded bg-[#252526] px-2 py-1 text-[#cccccc]">Best {best}</span>
          <span className="rounded bg-[#252526] px-2 py-1 text-[#cccccc]">{gameOver ? "Crashed" : running ? direction : "Ready"}</span>
        </div>
        <div className="grid aspect-square w-full max-w-72 gap-1 rounded border border-[#333] bg-[#0f0f0f] p-2" style={gridStyle}>
          {Array.from({ length: snakeGridSize * snakeGridSize }, (_, index) => {
            const point = { x: index % snakeGridSize, y: Math.floor(index / snakeGridSize) };
            const snakeIndex = snake.findIndex((part) => samePoint(part, point));
            const isFood = samePoint(food, point);

            return (
              <div
                key={`${point.x}-${point.y}`}
                className={`rounded-[2px] ${
                  snakeIndex === 0
                    ? "bg-[#4fc1ff]"
                    : snakeIndex > 0
                      ? "bg-[#16825d]"
                      : isFood
                        ? "bg-[#f97316]"
                        : "bg-[#202020]"
                }`}
              />
            );
          })}
        </div>
        {gameOver && <div className="text-xs text-[#fca5a5]">Game over. Reset to compile a fresh run.</div>}
        <div className="grid grid-cols-3 gap-1">
          <span />
          <button type="button" onClick={() => changeDirection("up")} className="flex h-8 w-10 items-center justify-center rounded bg-[#2d2d2d] text-white hover:bg-[#3a3a3a]">
            <Glyph label="^" />
          </button>
          <span />
          <button type="button" onClick={() => changeDirection("left")} className="flex h-8 w-10 items-center justify-center rounded bg-[#2d2d2d] text-white hover:bg-[#3a3a3a]">
            <Glyph label="<" />
          </button>
          <button type="button" onClick={() => setRunning((value) => !value)} className="flex h-8 w-10 items-center justify-center rounded bg-[#0e639c] text-white hover:bg-[#1177bb]">
            <Glyph label={running ? "||" : ">"} />
          </button>
          <button type="button" onClick={() => changeDirection("right")} className="flex h-8 w-10 items-center justify-center rounded bg-[#2d2d2d] text-white hover:bg-[#3a3a3a]">
            <Glyph label=">" />
          </button>
          <span />
          <button type="button" onClick={() => changeDirection("down")} className="flex h-8 w-10 items-center justify-center rounded bg-[#2d2d2d] text-white hover:bg-[#3a3a3a]">
            <Glyph label="v" />
          </button>
          <span />
        </div>
      </div>
    </div>
  );
}

function Preview({ activeFile }: { activeFile: FileId }) {
  return (
    <section className="flex min-h-0 min-w-0 flex-1 flex-col border-t border-[#2b2b2b] bg-[#181818] lg:border-l lg:border-t-0">
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-[#252526] bg-[#252526] px-3 text-xs text-[#cccccc]">
        <div className="flex items-center gap-2">
          <Glyph label="PV" className="text-[#4fc1ff]" />
          <span>Live Preview</span>
        </div>
        <div className="flex items-center gap-2 text-[#858585]">
          <span className="h-2 w-2 rounded-full bg-[#3fb950]" />
          <span>preview ready</span>
        </div>
      </div>
      <div className="min-h-0 flex-1">
        {activeFile === "tic-tac-toe.tsx" && <TicTacToeGame />}
        {activeFile === "snake.tsx" && <SnakeGame />}
        {activeFile === "readme.md" && (
          <div className="flex h-full flex-col justify-center p-6 text-sm leading-6 text-[#cccccc]">
            <div className="text-2xl font-semibold text-white">Mini Arcade</div>
            <p className="mt-3 max-w-md text-[#a9a9a9]">
              This VS Code-style workspace has real tabs, a file explorer, a terminal area, and playable previews.
            </p>
            <button type="button" className="mt-5 flex w-max items-center gap-2 rounded bg-[#0e639c] px-3 py-2 text-xs text-white">
              <Glyph label=">" />
              Open a game file to play
            </button>
          </div>
        )}
        {activeFile === "package.json" && (
          <div className="flex h-full flex-col justify-center p-6 text-sm text-[#cccccc]">
            <div className="text-xl font-semibold text-white">Project scripts ready</div>
            <div className="mt-4 rounded border border-[#333] bg-[#1e1e1e] p-4 font-mono text-xs leading-6">
              <div><span className="text-[#6ee7b7]">$</span> npm run dev</div>
              <div className="text-[#8f8f8f]">VITE v5 ready in 420 ms</div>
              <div><span className="text-[#6ee7b7]">$</span> npm run play</div>
              <div className="text-[#8f8f8f]">Live Preview attached</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TerminalPanel({ activeFile }: { activeFile: FileId }) {
  return (
    <section className="hidden h-28 shrink-0 border-t border-[#2b2b2b] bg-[#181818] md:block">
      <div className="flex h-8 items-center gap-5 border-b border-[#2b2b2b] px-4 text-[11px] uppercase tracking-wide text-[#8f8f8f]">
        <span className="border-b border-[#007acc] pb-2 text-[#cccccc]">Terminal</span>
        <span>Problems</span>
        <span>Output</span>
        <span>Debug Console</span>
      </div>
      <div className="px-4 py-2 font-mono text-xs leading-5 text-[#cccccc]">
        <div><span className="text-[#6ee7b7]">ritabrata@portfolio</span>:~/ritabrata-games$ npm run dev</div>
        <div className="text-[#8f8f8f]">compiled {workspaceFiles[activeFile].title} successfully - live preview is ready</div>
        <div><span className="text-[#6ee7b7]">ritabrata@portfolio</span>:~/ritabrata-games$ <span className="animate-pulse">_</span></div>
      </div>
    </section>
  );
}

export default function VSCode() {
  const [activeFile, setActiveFile] = useState<FileId>("tic-tac-toe.tsx");
  const [activity, setActivity] = useState<ActivityId>("explorer");
  const activeMeta = workspaceFiles[activeFile];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#1e1e1e] text-[#d4d4d4]">
      <header className="flex h-9 shrink-0 items-center justify-between border-b border-[#242424] bg-[#2b2b2b] px-3 text-xs text-[#cccccc]">
        <div className="hidden w-52 items-center gap-1 sm:flex">
          <button type="button" aria-label="Back" className="flex h-6 w-6 items-center justify-center rounded text-[#8f8f8f] hover:bg-[#3a3a3a] hover:text-white">
            <Glyph label="<" />
          </button>
          <button type="button" aria-label="Forward" className="flex h-6 w-6 items-center justify-center rounded text-[#8f8f8f] hover:bg-[#3a3a3a] hover:text-white">
            <Glyph label=">" />
          </button>
          <span className="ml-2 truncate text-[#a7a7a7]">ritabrata-games</span>
        </div>
        <button
          type="button"
          className="mx-auto flex h-6 w-full max-w-md items-center justify-center gap-2 rounded-md border border-[#505050] bg-[#383838] px-3 text-[#c9c9c9] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-[#424242]"
        >
          <Icon name="search" className="h-3.5 w-3.5 text-[#a8a8a8]" />
          <span className="truncate">ritabrata-games - Visual Studio Code</span>
        </button>
        <div className="hidden w-52 items-center justify-end gap-1 sm:flex">
          <button type="button" aria-label="Toggle sidebar" className="flex h-6 w-6 items-center justify-center rounded text-[#a7a7a7] hover:bg-[#3a3a3a] hover:text-white">
            <Icon name="layout" className="h-4 w-4" />
          </button>
          <button type="button" aria-label="More actions" className="flex h-6 w-6 items-center justify-center rounded text-[#a7a7a7] hover:bg-[#3a3a3a] hover:text-white">
            <Glyph label="..." />
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <nav className="flex w-12 shrink-0 flex-col items-center justify-between bg-[#333333]">
          <div className="w-full">
            <ActivityButton active={activity === "explorer"} label="Explorer" onClick={() => setActivity("explorer")} icon={<Icon name="files" />} />
            <ActivityButton active={activity === "search"} label="Search" onClick={() => setActivity("search")} icon={<Icon name="search" />} />
            <ActivityButton active={activity === "source"} label="Source Control" onClick={() => setActivity("source")} icon={<Icon name="source" />} />
            <ActivityButton active={activity === "run"} label="Run" onClick={() => setActivity("run")} icon={<Icon name="run" />} />
            <ActivityButton active={activity === "extensions"} label="Extensions" onClick={() => setActivity("extensions")} icon={<Icon name="extensions" />} />
          </div>
          <div className="w-full pb-2">
            <ActivityButton active={false} label="Accounts" onClick={() => setActivity("explorer")} icon={<Icon name="account" />} />
            <ActivityButton active={false} label="Manage" onClick={() => setActivity("extensions")} icon={<Icon name="settings" />} />
          </div>
        </nav>

        <Sidebar activeFile={activeFile} activity={activity} onOpen={setActiveFile} />

        <main className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
            <Editor activeFile={activeFile} onOpen={setActiveFile} />
            <Preview activeFile={activeFile} />
          </div>
          <TerminalPanel activeFile={activeFile} />
        </main>
      </div>

      <footer className="flex h-6 shrink-0 items-center justify-between bg-[#007acc] px-3 text-[11px] text-white">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex items-center gap-1"><Glyph label="git" /> main</span>
          <span className="hidden sm:inline">0 problems</span>
          <span className="truncate">{activeMeta.path}</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <span>{activeMeta.language}</span>
          <span>UTF-8</span>
          <span>Spaces: 2</span>
          <span>Prettier</span>
        </div>
      </footer>
    </div>
  );
}
