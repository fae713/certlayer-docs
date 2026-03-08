---
id: platform-infrastructure
title: Platform Infrastructure
sidebar_label: Platform Infrastructure
sidebar_position: 3
---

# Platform Infrastructure

In addition to the core reliability architecture, CertLayer includes a full operational platform for protocol management and security coordination.

## Frontend (`frontend/`)

The CertLayer frontend provides the user interface for protocols, administrators, and public users.

**Built using:**

- Next.js App Router
- TailwindCSS
- shadcn/ui
- wagmi wallet integration

**Main pages:**

| Route | Description |
|---|---|
| `/` | Landing page |
| `/signin` | Wallet authentication |
| `/dashboard` | Protocol operations and incident management |
| `/explorer` | Public reputation and reliability explorer |

## API (`api/`)

The API layer exposes operational endpoints used by the frontend, workers, and integrated systems.

**Key endpoint groups:**

| Group | Endpoints |
|---|---|
| Authentication | `/v1/auth/*` |
| Protocol management | `/v1/protocols/*` |
| Incident lifecycle management | `/v1/incidents/*`, `/v1/enforcement/*` |
| Commitment lifecycle | `/v1/commitments/*` |
| Security monitoring | `/v1/security/*` |
| Public reputation data | `/v1/public/reputation` |

The API layer enforces authentication, authorization, and workflow boundaries.

## Worker (`worker/`)

The worker service is a background monitoring process responsible for generating monitoring events and processing operational signals.

The worker:

- Monitors operational metrics
- Generates anomaly signals
- Submits monitoring events to the system

:::note
The current implementation simulates anomaly events and is primarily intended for development environments. Future versions will support production-grade monitoring pipelines.
:::

## Intelligent Contracts (`contracts/genlayer/`)

CertLayer uses intelligent contracts deployed on GenLayer to anchor operational state transitions and enforcement actions on-chain.

**Key contracts:**

- `reliability_contract.py`
- `hack_detection_contract.py`

These contracts manage:

- Incident state transitions
- Compensation settlement execution
- Security pause signals
- Reputation data recording

On-chain anchoring ensures transparency and auditability.
