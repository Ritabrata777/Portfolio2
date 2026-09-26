# TollChain

Automatic tolling prototype that charges from RFID events without exposing driver identity.

## Problem it solves

Toll plazas need speed and privacy at once. TollChain explores RFID-triggered settlement with zero-knowledge identity.

## How it works

1. RFID reader emits a vehicle pass event.
2. Anon-Aadhaar proves the vehicle is authorized without revealing personal data.
3. Foundry contract settles the toll and logs it.
4. Scaffold-ETH 2 frontend shows passes and receipts.

## Tech stack

- Next.js + Scaffold-ETH 2
- Foundry + Solidity
- Anon-Aadhaar ZK identity

## Key features

- RFID flow to on-chain receipt
- Private identity verification
- Demo-ready local chain setup
