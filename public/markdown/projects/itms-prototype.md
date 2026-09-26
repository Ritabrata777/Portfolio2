# Indigenous ITMS Prototype

Contactless track monitoring for high-speed rail. Hardware senses, software filters, API serves.

## Problem it solves

At 200 km/h a train moves 0.25 m per frame. Vibration hides real defects. ITMS proves a 222 Hz pipeline can stay stable and report defects live.

## How it works

1. Synthetic rig mimics camera profile, SWIR LiDAR, IMU vibration, GNSS RTK, and wheel encoder on a shared clock.
2. Extended Kalman Filter smooths gauge, cross-level, alignment, and vertical profile.
3. Defect segmenter flags rail-head, fastening, sleeper, ballast, and crack events.
4. FastAPI exposes /health, /telemetry/latest, and history for dashboards. Low-cost Pi variant streams camera, 2D LiDAR, GPS, and ICM-20948 to remote compute for trolley demos.

## Tech stack

- Python 3.11, FastAPI, Uvicorn, NumPy
- EKF denoising, synthetic segmenter with YOLO path
- Raspberry Pi camera + 2D LiDAR + GPS + ICM-20948

## Key features

- 222 Hz edge-pipeline demo with CLI and API
- Stable estimates under vibration
- SIH25020 build with lab-ready Pi option
