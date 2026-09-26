# Spectra Guard

Pointing, acquisition, and tracking console for a mobile free-space optical terminal.

## Problem it solves

A laser link from a moving vehicle shakes, drifts, and scintillates. Spectra Guard shows how estimation plus control can hold the link.

## How it works

1. Python engine simulates platform vibration, turbulence, and sensor frames.
2. EKF estimates true pointing error from noisy images.
3. PID drives the gimbal back to target.
4. FastAPI streams JPEG frames plus JSON state over WebSocket to a Next.js console with live plots and tuning sliders.

## Tech stack

- Python, FastAPI, NumPy, OpenCV
- Custom EKF, PID, turbulence models
- Next.js 14, React 18, Zustand, Framer-Motion, Tailwind

## Key features

- Real-time PAT loop visualization
- Tunable EKF and PID from the UI
- SIH ISRO build by Team Incu3bit
