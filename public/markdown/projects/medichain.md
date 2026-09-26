# MediChain

Blockchain-powered telemedicine access log. Every view of a health record is logged on-chain so patients and doctors share one auditable truth.

## Problem it solves

Teleconsultations scatter records across apps with no clear trail of who accessed what. MediChain makes access visible and permission-aware.

## How it works

1. Doctor or patient uploads a record reference; file goes to IPFS, hash goes on-chain.
2. Solidity access control grants view rights by identity.
3. Every read or share emits an on-chain event.
4. React frontend shows the full history per record.

## Tech stack

- Solidity smart contracts for access log and permissions
- React + Firebase for app layer and auth
- IPFS for content-addressed record storage

## Key features

- Identity-aware record sharing
- Immutable consultation audit trail
- Lightweight hashes on-chain, files off-chain
