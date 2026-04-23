import {
  advancePrimaryRecord,
  amendPrimaryRecord,
  createPrimaryRecord,
  placePrimaryRecordOnHold,
  reconcilePrimaryRecord,
  releasePrimaryRecordHold,
  reversePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type AmendPrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type PlacePrimaryRecordOnHoldInput,
  type ReconcilePrimaryRecordInput,
  type ReleasePrimaryRecordHoldInput,
  type ReversePrimaryRecordInput
} from "../services/main.service";

export const businessFlowDefinitions = [
  {
    "id": "traceability.links.record",
    "label": "Record Traceability Link",
    "phase": "create",
    "methodName": "recordTraceabilityLink"
  },
  {
    "id": "traceability.dimensions.publish",
    "label": "Publish Common Dimension",
    "phase": "advance",
    "methodName": "publishCommonDimension"
  },
  {
    "id": "traceability.reconciliation.queue",
    "label": "Queue Reconciliation Item",
    "phase": "reconcile",
    "methodName": "queueReconciliationItem"
  },
  {
    "id": "traceability.links.hold",
    "label": "Place Record On Hold",
    "phase": "hold",
    "methodName": "placeRecordOnHold"
  },
  {
    "id": "traceability.links.release",
    "label": "Release Record Hold",
    "phase": "release",
    "methodName": "releaseRecordHold"
  },
  {
    "id": "traceability.links.amend",
    "label": "Amend Record",
    "phase": "amend",
    "methodName": "amendRecord"
  },
  {
    "id": "traceability.links.reverse",
    "label": "Reverse Record",
    "phase": "reverse",
    "methodName": "reverseRecord"
  }
] as const;

export async function recordTraceabilityLink(input: CreatePrimaryRecordInput) {
  return createPrimaryRecord(input);
}

export async function publishCommonDimension(input: AdvancePrimaryRecordInput) {
  return advancePrimaryRecord(input);
}

export async function queueReconciliationItem(input: ReconcilePrimaryRecordInput) {
  return reconcilePrimaryRecord(input);
}

export async function placeRecordOnHold(input: PlacePrimaryRecordOnHoldInput) {
  return placePrimaryRecordOnHold(input);
}

export async function releaseRecordHold(input: ReleasePrimaryRecordHoldInput) {
  return releasePrimaryRecordHold(input);
}

export async function amendRecord(input: AmendPrimaryRecordInput) {
  return amendPrimaryRecord(input);
}

export async function reverseRecord(input: ReversePrimaryRecordInput) {
  return reversePrimaryRecord(input);
}
