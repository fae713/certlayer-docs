---
id: architecture-overview
title: Architecture Overview
sidebar_label: Overview
sidebar_position: 1
---

# Architecture Overview

CertLayer is a GenLayer-powered infrastructure platform designed to monitor operational events, verify conditions, coordinate security monitoring, and execute automated settlement logic.

The system combines reliability enforcement, security detection, and automated financial execution into a single architecture.

## System Components

CertLayer consists of several interconnected components:

| Component | Description |
|---|---|
| Monitoring Engine | Continuously tracks operational signals and infrastructure metrics |
| Event Verification Layer | Confirms whether trigger conditions have occurred via decentralized validation |
| Trigger Engine | Evaluates predefined conditions and initiates settlement logic |
| Settlement Layer | Executes financial outcomes when trigger conditions are verified |
| Validator Network | Verifies infrastructure events in a decentralized manner |
| HackDetection Security Layer | Monitors suspicious transaction activity and enables coordinated security responses |
| Frontend Interfaces | User interfaces for protocols, administrators, and public users |
| API Services | Operational endpoints used by the frontend, workers, and integrated systems |
| Background Workers | Generates monitoring events and processes operational signals |
| GenLayer Intelligent Contracts | Anchors reliability events and security actions on-chain |

These components work together to monitor infrastructure performance, detect incidents, verify conditions, and enforce outcomes.

CertLayer operates on GenLayer, which enables intelligent contracts to verify events and maintain transparent reliability records on-chain.
