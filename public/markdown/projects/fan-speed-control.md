# Fan Speed Control

Room cooling that follows temperature without a remote.

## Problem it solves

Fixed fan speeds waste power or leave rooms warm. This loop matches airflow to heat.

## How it works

1. DHT11 reports ambient temperature to ATmega328P.
2. Firmware maps temperature bands to PWM duty.
3. Fan ramps smoothly instead of jumping steps.

## Tech stack

- ATmega328P, DHT11, PWM drive, C firmware

## Key features

- Smooth closed-loop control
- Quiet and power-saving
- Simple reliable build
