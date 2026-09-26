# O.A.S.I.S

Spectrum intercept simulator where a learning agent hunts frequency-hopping emitters.

## Problem it solves

Blind scanning wastes time against agile radios. OASIS tests whether memory-based RL can dwell smarter.

## How it works

1. Custom POMDP environment emits ScanningRadar, FrequencyAgile, Periodic, and CW signals across 32 bands with Neyman-Pearson detections.
2. Agent sees a 7-dim observation and chooses scan, dwell, or jump.
3. Dueling Double DQN with LSTM and sequence replay learns temporal hopping patterns.

## Tech stack

- Python, PyTorch, NumPy
- Dueling Double DQN + LSTM, custom RF env

## Key features

- Realistic emitter mix with noise
- Recurrent policy beats blind sweep
- Clean agent.py plus rf_environment.py split
