# Signal Analyzer

Workbench for unknown HF, VHF, and UHF signals from IQ or WAV files.

## Problem it solves

Raw captures mean nothing without demod and decode. This tool turns spectrum into a readable brief.

## How it works

1. Load IQ or WAV into the PyQt GUI with spectrum views.
2. Classifier guesses modulation, demod chain recovers audio and bits.
3. De-interleave plus reedsolo and LDPC decode cleans the payload.
4. AI brief explains signal type, content, and confidence.

## Tech stack

- Python, PyQt6, pyqtgraph
- NumPy, SciPy, scikit-learn, FEC libs

## Key features

- Guided classification to decode flow
- Visual spectrum and constellation views
- Exportable explainable report
