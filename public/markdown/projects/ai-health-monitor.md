# AI-Powered Health Monitor (AURA)

Assistive health platform built as AURA Smart Glasses for visually impaired and daily-assistance users. Source lives in `aur/` on desktop.

## Tech Stack

- Next.js 15 control center + caregiver dashboard (`aur/frontend`)
- FastAPI backend with JWT, WebSockets, MongoDB Atlas, Gemini hooks (`aur/backend`)
- Raspberry Pi 5 device-agent for camera, mic, GPS, SOS, buzzer, vibration (`aur/device-agent`)
- ESP32-S3 migration path for firmware (Wi-Fi, register, telemetry, SOS)

## What it does

Glasses understand surroundings, detect objects, track location, send SOS alerts, and show live updates on user, caregiver, and admin dashboards. If Atlas, Gemini, Maps, or hardware are missing, it keeps running on polished simulation fallbacks for demos.

Flow: glasses hardware -> Pi agent or ESP32-S3 firmware -> FastAPI ingest (`/device/register`, `/device/telemetry`, `/alerts/create`) -> store and WebSocket broadcast -> dashboards.

## Pin diagram (`pins.txt` on desktop)

| Function | ESP32 pin |
|---|---:|
| Piezo heartbeat digital output | GPIO17 |
| OLED SDA | GPIO22 |
| OLED SCL | GPIO21 |
| MAX30102 SDA | GPIO22 |
| MAX30102 SCL | GPIO21 |
| MAX30102 interrupt | GPIO34 |
| MLX90614 SDA | GPIO22 |
| MLX90614 SCL | GPIO21 |
| AD8232 ECG output | GPIO36 |
| Button UP | GPIO33 |
| Button SELECT | GPIO32 |
| Buzzer | GPIO13 |
| Status LED | GPIO2 |
| 3.3 V supply | 3V3 |
| Ground | GND |

ESP32-S3 migration plan (`aur/yup.md`): SOS -> GPIO4, buzzer -> GPIO5, vibration -> GPIO6, GPS over UART, then camera/AI in phase two. First stabilize register, telemetry every 4-5s, SOS, and live dashboard before adding camera.

## Key points

- Full system: frontend, backend, and device firmware, not just a device
- Demo accounts: user, caregiver, admin with live tracking and SOS
- Pi agent today, ESP32-S3 firmware as the hardware path forward
