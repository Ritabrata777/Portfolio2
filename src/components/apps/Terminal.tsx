import React from "react";
import { terminal } from "~/configs";
import type { TerminalData } from "~/types";

interface TerminalState {
  rmrf: boolean;
  content: JSX.Element[];
}

const COMMANDS = ["cd", "ls", "cat", "clear", "help"];

const HowDare = ({ setRMRF }: { setRMRF: (value: boolean) => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black text-white flex-center"
      onClick={() => setRMRF(false)}
    >
      <div className="text-center space-y-4">
        <div className="text-4xl font-semibold">HOW DARE YOU!</div>
        <div className="text-green-400">rm -rf / is disabled on this portfolio.</div>
        <div className="text-sm text-white/70">Click anywhere to return to Terminal.</div>
      </div>
    </div>
  );
};

export default class Terminal extends React.Component<{}, TerminalState> {
  private history: string[] = [];
  private curHistory = 0;
  private curInputTimes = 0;
  private curDirPath: string[] = [];
  private curChildren = terminal as TerminalData[];

  componentDidMount() {
    this.reset();
    this.generateInputRow(this.curInputTimes);
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      content: [],
      rmrf: false
    };
  }

  reset = () => {
    const terminalNode = document.querySelector("#terminal-content") as HTMLElement | null;
    if (terminalNode) terminalNode.innerHTML = "";
  };

  addRow = (row: JSX.Element) => {
    if (this.state.content.find((item) => item.key === row.key)) return;
    this.setState((prev) => ({ content: [...prev.content, row] }));
  };

  getCurDirName = () => {
    if (this.curDirPath.length === 0) return "~";
    return this.curDirPath[this.curDirPath.length - 1];
  };

  getCurChildren = () => {
    let children = terminal as TerminalData[];
    for (const name of this.curDirPath) {
      const target = children.find((item) => item.title === name && item.type === "folder");
      children = target?.children || [];
    }
    return children;
  };

  cd = (args?: string) => {
    if (args === undefined || args === "~") {
      this.curDirPath = [];
      this.curChildren = terminal;
      return;
    }

    if (args === ".") return;

    if (args === "..") {
      if (this.curDirPath.length === 0) return;
      this.curDirPath.pop();
      this.curChildren = this.getCurChildren();
      return;
    }

    const target = this.curChildren.find((item) => item.title === args && item.type === "folder");
    if (!target) {
      this.generateResultRow(
        this.curInputTimes,
        <span>{`cd: no such file or directory: ${args}`}</span>
      );
      return;
    }

    this.curDirPath.push(target.title);
    this.curChildren = target.children || [];
  };

  ls = () => {
    const result = this.curChildren.map((item) => (
      <span
        key={`terminal-result-ls-${this.curInputTimes}-${item.id}`}
        className={item.type === "file" ? "text-white" : "text-purple-300"}
      >
        {item.title}
      </span>
    ));

    this.generateResultRow(
      this.curInputTimes,
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-y-1">{result}</div>
    );
  };

  cat = (args?: string) => {
    const file = this.curChildren.find((item) => item.title === args && item.type === "file");

    if (!file) {
      this.generateResultRow(
        this.curInputTimes,
        <span>{`cat: ${args}: No such file or directory`}</span>
      );
      return;
    }

    this.generateResultRow(this.curInputTimes, <span>{file.content}</span>);
  };

  clear = () => {
    this.curInputTimes += 1;
    this.reset();
  };

  help = () => {
    this.generateResultRow(
      this.curInputTimes,
      <ul className="list-disc ml-6 pb-1.5">
        <li>
          <span className="text-red-400">ls</span> - See files and directories in the
          current directory
        </li>
        <li>
          <span className="text-red-400">cd {"<dir>"}</span> - Move into a directory,
          use {"\"cd ..\""} to go up and {"\"cd ~\""} to return home
        </li>
        <li>
          <span className="text-red-400">cat {"<file>"}</span> - Open a text file
        </li>
        <li>
          <span className="text-red-400">clear</span> - Clear the screen
        </li>
        <li>
          <span className="text-red-400">help</span> - Display this help menu
        </li>
        <li>
          <span className="text-red-400">rm -rf /</span> - Absolutely not
        </li>
        <li>
          Press <span className="text-red-400">up / down</span> for history
        </li>
        <li>
          Press <span className="text-red-400">tab</span> for autocomplete
        </li>
      </ul>
    );
  };

  autoComplete = (text: string) => {
    if (!text) return text;

    const input = text.split(" ");
    const cmd = input[0];
    const args = input[1];

    if (args === undefined) {
      const guess = COMMANDS.find((item) => item.startsWith(cmd));
      return guess || text;
    }

    if (cmd === "cd" || cmd === "cat") {
      const type = cmd === "cd" ? "folder" : "file";
      const guess = this.curChildren.find(
        (item) => item.type === type && item.title.startsWith(args)
      );
      return guess ? `${cmd} ${guess.title}` : text;
    }

    return text;
  };

  runCommand = (inputText: string) => {
    if (!inputText) return;

    const input = inputText.split(" ");
    const cmd = input[0];
    const args = input.slice(1).join(" ");

    if (inputText.startsWith("rm -rf")) {
      this.setState({ rmrf: true });
      return;
    }

    if (cmd === "cd") {
      this.cd(args || undefined);
      return;
    }

    if (cmd === "ls") {
      this.ls();
      return;
    }

    if (cmd === "cat") {
      this.cat(args || undefined);
      return;
    }

    if (cmd === "clear") {
      this.clear();
      return;
    }

    if (cmd === "help") {
      this.help();
      return;
    }

    this.generateResultRow(this.curInputTimes, <span>{`zsh: command not found: ${cmd}`}</span>);
  };

  keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    const inputElement = document.querySelector(
      `#terminal-input-${this.curInputTimes}`
    ) as HTMLInputElement | null;

    if (!inputElement) return;

    const inputText = inputElement.value.trim();

    if (keyCode === "Enter") {
      if (inputText) this.history.push(inputText);
      inputElement.setAttribute("readonly", "true");

      this.runCommand(inputText);

      this.curHistory = this.history.length;
      this.curInputTimes += 1;
      this.generateInputRow(this.curInputTimes);
    } else if (keyCode === "ArrowUp") {
      if (this.history.length > 0) {
        if (this.curHistory > 0) this.curHistory -= 1;
        inputElement.value = this.history[this.curHistory] || "";
      }
    } else if (keyCode === "ArrowDown") {
      if (this.history.length > 0) {
        if (this.curHistory < this.history.length) this.curHistory += 1;
        inputElement.value = this.history[this.curHistory] || "";
      }
    } else if (keyCode === "Tab") {
      inputElement.value = this.autoComplete(inputText);
      e.preventDefault();
    }
  };

  focusOnInput = (id: number) => {
    const input = document.querySelector(`#terminal-input-${id}`) as HTMLInputElement | null;
    input?.focus();
  };

  generateInputRow = (id: number) => {
    const newRow = (
      <div key={`terminal-input-row-${id}`} className="flex">
        <div className="w-max hstack space-x-1.5">
          <span className="text-yellow-200">
            ritabrata@macbook-pro <span className="text-green-300">{this.getCurDirName()}</span>
          </span>
          <span className="text-red-400">{">"}</span>
        </div>
        <input
          id={`terminal-input-${id}`}
          className="flex-1 px-1 text-white outline-none bg-transparent"
          onKeyDown={this.keyPress}
          autoFocus={true}
        />
      </div>
    );

    this.addRow(newRow);
  };

  generateResultRow = (id: number, result: JSX.Element) => {
    const newRow = (
      <div key={`terminal-result-row-${id}`} className="break-all">
        {result}
      </div>
    );

    this.addRow(newRow);
  };

  render() {
    return (
      <div
        className="terminal font-terminal font-normal relative h-full bg-gray-800/90 overflow-y-scroll"
        onClick={() => this.focusOnInput(this.curInputTimes)}
      >
        {this.state.rmrf && (
          <HowDare setRMRF={(value: boolean) => this.setState({ rmrf: value })} />
        )}
        <div className="py-2 px-1.5">
          <span className="text-green-300">(^_^)/</span>: Welcome to Ritabrata's
          terminal. Type `help` to get started.
        </div>
        <div id="terminal-content" className="px-1.5 pb-2 text-white text-sm">
          {this.state.content}
        </div>
      </div>
    );
  }
}
