import {
  createBusinessDomainStateStore,
  createBusinessOrchestrationState,
  createBusinessPluginService,
  type BusinessAdvancePrimaryRecordInput,
  type BusinessCreatePrimaryRecordInput,
  type BusinessFailPendingDownstreamItemInput,
  type BusinessReconcilePrimaryRecordInput,
  type BusinessReplayDeadLetterInput,
  type BusinessResolvePendingDownstreamItemInput
} from "@platform/business-runtime";

import { type ExceptionRecord, type PrimaryRecord, type SecondaryRecord } from "../model";

export type CreatePrimaryRecordInput = BusinessCreatePrimaryRecordInput;
export type AdvancePrimaryRecordInput = BusinessAdvancePrimaryRecordInput;
export type ReconcilePrimaryRecordInput = BusinessReconcilePrimaryRecordInput;
export type ResolvePendingDownstreamItemInput = BusinessResolvePendingDownstreamItemInput;
export type FailPendingDownstreamItemInput = BusinessFailPendingDownstreamItemInput;
export type ReplayDeadLetterInput = BusinessReplayDeadLetterInput;

function seedState() {
  return {
    primaryRecords: [
      {
        id: "traceability-core:seed",
        tenantId: "tenant-platform",
        title: "Traceability & Dimensions Core Seed Record",
        counterpartyId: "party:seed",
        companyId: "company:primary",
        branchId: "branch:head-office",
        recordState: "active",
        approvalState: "approved",
        postingState: "unposted",
        fulfillmentState: "none",
        amountMinor: 125000,
        currencyCode: "USD",
        revisionNo: 1,
        reasonCode: null,
        effectiveAt: "2026-04-23T00:00:00.000Z",
        correlationId: "traceability-core:seed",
        processId: "traceability-reconciliation:seed",
        upstreamRefs: [],
        downstreamRefs: [],
        updatedAt: "2026-04-23T00:00:00.000Z"
      }
    ] satisfies PrimaryRecord[],
    secondaryRecords: [] satisfies SecondaryRecord[],
    exceptionRecords: [] satisfies ExceptionRecord[],
    orchestration: createBusinessOrchestrationState()
  };
}

const store = createBusinessDomainStateStore({
  pluginId: "traceability-core",
  sqlite: {
    primaryTable: "traceability_core_primary_records",
    secondaryTable: "traceability_core_secondary_records",
    exceptionTable: "traceability_core_exception_records",
    dbFileName: "business-runtime.sqlite"
  },
  postgres: {
    schemaName: "traceability_core"
  },
  seedStateFactory: seedState
});

const service = createBusinessPluginService({
  pluginId: "traceability-core",
  displayName: "Traceability & Dimensions Core",
  primaryResourceId: "traceability.links",
  secondaryResourceId: "traceability.dimensions",
  exceptionResourceId: "traceability.reconciliation",
  createEvent: "traceability.link-recorded.v1",
  advanceEvent: "traceability.dimension-published.v1",
  reconcileEvent: "traceability.reconciliation-queued.v1",
  projectionJobId: "traceability.projections.refresh",
  reconciliationJobId: "traceability.reconciliation.run",
  advanceActionLabel: "Publish Common Dimension",
  orchestrationTargets: {
  "create": [],
  "advance": [
    "traceability.links.record"
  ],
  "reconcile": [
    "traceability.reconciliation.queue"
  ]
},
  store
});

export const {
  listPrimaryRecords,
  listSecondaryRecords,
  listExceptionRecords,
  listPublishedMessages,
  listPendingDownstreamItems,
  listDeadLetters,
  listProjectionRecords,
  getBusinessOverview,
  createPrimaryRecord,
  advancePrimaryRecord,
  reconcilePrimaryRecord,
  resolvePendingDownstreamItem,
  failPendingDownstreamItem,
  replayDeadLetter
} = service;
