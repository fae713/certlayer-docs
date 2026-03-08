---
id: event-verification
title: Event Verification & Reliability
sidebar_label: Event Verification
sidebar_position: 1
---

# How Event Verification and Reliability Works on CertLayer

CertLayer automates operational enforcement through a four-stage process.

## Step 1 — Define Conditions

Developers or protocols define trigger conditions that should automatically execute actions.

**Example:**

```
if oracle_update_delay > 10 minutes
  trigger compensation
```

## Step 2 — Monitor Events

The monitoring engine continuously observes infrastructure signals and protocol activity.

## Step 3 — Verify Event

If a potential trigger event is detected, validators verify the event and confirm that the trigger condition has been satisfied.

## Step 4 — Execute Settlement

Once verified, CertLayer executes the predefined settlement logic automatically on-chain.
