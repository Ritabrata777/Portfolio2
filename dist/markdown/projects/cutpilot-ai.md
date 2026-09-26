# CutPilot AI

Premiere Pro assistant that watches your footage and drafts the cut.

## Problem it solves

Silence trimming and highlight hunting eat editing hours. CutPilot drafts a tight sequence first.

## How it works

1. Panel uploads clips through the Gemini Files API.
2. AI marks silences, repeats, and viral moments.
3. ExtendScript builds a new sequence with AutoCut edits applied.

## Tech stack

- Adobe CEP 11, ExtendScript JSX
- JavaScript + CSS panel, PowerShell installer

## Key features

- Silence and repeat removal
- Viral-moment assembly
- Non-destructive new-sequence output
