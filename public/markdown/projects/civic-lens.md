# Civic Lens

Transparent grievance redressal where AI triage meets an immutable action log.

## Problem it solves

Civic complaints get lost, duplicated, or resolved without proof. Civic Lens tracks each complaint from photo to fix.

## How it works

1. Citizen files a complaint with photos and location.
2. AI classifies the category, checks duplicates with MiniLM embeddings, and YOLOv8n flags visible violations.
3. Officials update status; each action is hashed to Hardhat/Ethers.js contracts.
4. Citizen uploads photo Proof-of-Fix to close the loop. MapLibre shows ward-level progress.

## Tech stack

- Next.js 15 App Router, TypeScript, Tailwind + Shadcn
- Genkit + Google GenAI, sentence-transformers, OpenCV, scikit-learn, YOLOv8
- Solidity + Hardhat + Ethers.js, Firebase, Mongoose, SQLite, MapLibre

## Key features

- AI triage with duplicate detection
- Image-based violation detection
- On-chain action history with photo evidence
