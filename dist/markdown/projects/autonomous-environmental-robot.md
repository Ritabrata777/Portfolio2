# Autonomous Environmental Robot

Rover that patrols, senses, and maps its surroundings alone.

## Problem it solves

Manual air and site surveys are slow. A self-driving monitor collects geotagged data continuously.

## How it works

1. ESP32-CAM drives, avoids obstacles, and captures frames.
2. MQ-135 measures air quality while Neo-6M GPS tags each sample.
3. Telemetry streams back for live mapping.

## Tech stack

- ESP32-CAM, GPS Neo-6M, MQ-135
- Motor drivers, avoidance logic

## Key features

- Autonomous patrol loop
- Photo plus air plus location logging
- Field-ready sensing pack
