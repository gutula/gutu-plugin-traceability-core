import {
  advancePrimaryRecord,
  createPrimaryRecord,
  reconcilePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type ReconcilePrimaryRecordInput
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
