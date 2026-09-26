# POLARIS-ICE

Water-ice mapper for the lunar south pole using Chandrayaan-2 radar and elevation.

## Problem it solves

Landing near ice without knowing where it is wastes a mission. POLARIS-ICE turns raw radar into go or no-go maps.

## How it works

1. Ingests DFSAR CPR strips and LDEM elevation GeoTIFFs.
2. Physics thresholds convert CPR plus slope and shadow into ice probability.
3. Sites are scored for ice richness, flatness, and sunlight.
4. A* plans a rover traverse that links high-value stops while avoiding hazards. HTML report captures maps and metrics.

## Tech stack

- Python, NumPy, SciPy, Rasterio / GDAL, Matplotlib
- DFSAR + LDEM inputs, A* planner

## Key features

- No ML training required
- Ranked landing candidates with reasons
- Rover path output for operations
- Bharatiya Antariksh Hackathon PS-08
