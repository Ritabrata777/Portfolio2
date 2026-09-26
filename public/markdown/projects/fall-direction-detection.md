# Fall Direction Detection

Wearable safety net that knows not just that someone fell, but which way.

## Problem it solves

Fall alerts without direction slow down care. Direction tells responders what injury to expect.

## How it works

1. ESP32 streams accelerometer and gyroscope data.
2. TinyML model detects fall events on-device.
3. Classifier outputs forward, back, left, or right and triggers an IoT alert.

## Tech stack

- ESP32 + IMU, TinyML classifier
- Python training pipeline, IoT alerts

## Key features

- On-device low-latency inference
- Direction-aware notifications
- Tuned for elderly monitoring
