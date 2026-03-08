---
id: system-components
title: System Components
sidebar_label: System Components
sidebar_position: 2
---

# System Components

## Monitoring Engine

The monitoring engine continuously tracks operational signals and infrastructure metrics.

Examples of monitored signals include:

- Protocol uptime
- API response health
- Oracle update frequency
- Transaction failure rates
- Bridge activity anomalies

The monitoring engine collects and processes operational data that may indicate potential incidents.

## Event Verification Layer

When the monitoring engine detects a potential event, the event verification layer confirms whether the condition defined in a trigger has occurred.

Verification is performed through decentralized validation mechanisms.

Validators confirm:

- Whether the event occurred
- Whether trigger conditions are satisfied
- Whether settlement logic should be executed

This ensures that incidents cannot be arbitrarily triggered by a single party.

## Trigger Engine

The trigger engine evaluates predefined conditions defined by developers or protocols.

If the condition evaluates to true, the trigger engine initiates the associated settlement logic.

**Example trigger condition:**

```
if oracle_update_delay > 10 minutes
  trigger compensation
```

Triggers allow protocols to define automated operational guarantees.

## Settlement Layer

The settlement layer executes financial outcomes when trigger conditions are verified.

Examples of settlement actions include:

- Compensating affected users
- Executing insurance payouts
- Transferring penalty payments
- Distributing compensation pools

All settlement actions are executed automatically on-chain.

## Validator Network

The validator network verifies infrastructure events and ensures trigger conditions are evaluated in a decentralized manner.

Validators are responsible for:

- Verifying operational signals
- Validating trigger events
- Confirming settlement execution conditions

Validator participation ensures that reliability enforcement remains decentralized and transparent.
