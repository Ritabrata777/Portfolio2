# Mimo Studio

Native AI schematic studio. Describe a circuit in words, get a plan, a schematic proposal, and a BOM you can build from.

## Problem it solves

Starting a PCB from blank canvas is slow. Mimo turns intent into a typed starting point with exportable output.

## How it works

1. Prompt describes the goal, constraints, and parts on hand.
2. AI produces an engineering plan with block choices.
3. Native egui canvas renders schematic and BOM proposal.
4. One click exports KiCad-compatible files for layout and fab.

## Tech stack

- Rust 1.88, egui 0.29 / eframe canvas
- Axum backend, Postgres store
- MCP catalog, schematic-core crate, KiCad export

## Key features

- Prompt to plan to schematic loop
- Local workspace with reusable blocks
- Typed BOM with sourcing hints
