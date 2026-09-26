# Gemini Animator

Type a motion idea, get an After Effects animation.

## Problem it solves

Setting up comps, layers, and keyframes for simple promos takes too long. This tool drafts the motion for you.

## How it works

1. Paste a Gemini key, pick Auto, Edit Active Comp, or Create New Comp.
2. Describe the bumper or reveal you want.
3. Gemini returns a strict JSON action plan.
4. Panel validates the plan and builds comps, text, solids, nulls, cameras, and presets like fadeUp, slideLeft, pop, drift, and pulse.

## Tech stack

- ExtendScript JSX ScriptUI panel
- CEP HTML/JS extension with signed ZXP
- Gemini 2.5 Flash, PowerShell helper, Node.js

## Key features

- Two installs: dockable script plus ZXP
- Safe plan validation with log warnings
- Cinematic presets out of the box
