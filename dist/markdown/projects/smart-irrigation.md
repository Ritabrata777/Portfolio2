# Smart Irrigation System

Field watering that decides for itself when the soil is thirsty.

## Problem it solves

Timer-based watering wastes water or starves crops. Sensing plus logic waters only when needed.

## How it works

1. Soil moisture and DHT sensors report field state to Arduino.
2. Control logic compares thresholds and recent trends.
3. Relays drive pumps for precise durations, with manual override kept.

## Tech stack

- Arduino, soil + DHT sensors, relay pump control
- C++ firmware with AI-ML decision layer

## Key features

- Demand-based scheduling
- Low-cost parts for real fields
- Override for testing
