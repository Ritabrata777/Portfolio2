# Secure Sensor Pipeline

Sensor-to-dashboard telemetry that stays trustworthy even on open networks.

## Problem it solves

Plain IoT packets can be sniffed or forged. This pipeline encrypts every reading and proves it on arrival.

## How it works

1. ESP32 samples sensors and draws randomness from esp_random TRNG.
2. Reading is encrypted with OTP mod-257 and tagged with HMAC-SHA256.
3. FastAPI verifies HMAC, rejects replays, and stores the point.
4. WebSocket dashboard plots live values with history. Simulator mode runs without hardware.

## Tech stack

- ESP32 Arduino firmware
- FastAPI, HMAC-SHA256, WebSocket
- Vanilla JS dashboard

## Key features

- Hardware-rooted one-time encryption
- Server-side verification and replay guard
- Live plus historical views
