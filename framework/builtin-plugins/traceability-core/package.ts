import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "traceability-core",
  "kind": "plugin",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-plugin-traceability-core",
  "displayName": "Traceability & Dimensions Core",
  "domainGroup": "Operational Data",
  "defaultCategory": {
    "id": "business",
    "label": "Business",
    "subcategoryId": "traceability_dimensions",
    "subcategoryLabel": "Traceability & Dimensions"
  },
  "description": "Document lineage, correlation IDs, upstream/downstream references, reconciliation surfaces, and common operating dimensions for cross-plugin traceability.",
  "extends": [],
  "dependsOn": [
    "auth-core",
    "org-tenant-core",
    "role-policy-core",
    "audit-core",
    "workflow-core",
    "document-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "auth-core",
      "class": "required",
      "rationale": "Required for Traceability & Dimensions Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "org-tenant-core",
      "class": "required",
      "rationale": "Required for Traceability & Dimensions Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "role-policy-core",
      "class": "required",
      "rationale": "Required for Traceability & Dimensions Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "audit-core",
      "class": "required",
      "rationale": "Required for Traceability & Dimensions Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "workflow-core",
      "class": "required",
      "rationale": "Required for Traceability & Dimensions Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "document-core",
      "class": "required",
      "rationale": "Required for Traceability & Dimensions Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "optional",
      "rationale": "Recommended with Traceability & Dimensions Core for smoother production adoption and operator experience."
    },
    {
      "packageId": "procurement-core",
      "class": "optional",
      "rationale": "Recommended with Traceability & Dimensions Core for smoother production adoption and operator experience."
    },
    {
      "packageId": "inventory-core",
      "class": "optional",
      "rationale": "Recommended with Traceability & Dimensions Core for smoother production adoption and operator experience."
    },
    {
      "packageId": "accounting-core",
      "class": "optional",
      "rationale": "Recommended with Traceability & Dimensions Core for smoother production adoption and operator experience."
    },
    {
      "packageId": "manufacturing-core",
      "class": "capability-enhancing",
      "rationale": "Improves Traceability & Dimensions Core with deeper downstream automation, visibility, or workflow coverage."
    },
    {
      "packageId": "quality-core",
      "class": "capability-enhancing",
      "rationale": "Improves Traceability & Dimensions Core with deeper downstream automation, visibility, or workflow coverage."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "capability-enhancing",
      "rationale": "Improves Traceability & Dimensions Core with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "sales-core",
    "procurement-core",
    "inventory-core",
    "accounting-core"
  ],
  "capabilityEnhancingPlugins": [
    "manufacturing-core",
    "quality-core",
    "analytics-bi-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base"
  ],
  "standaloneSupported": true,
  "installNotes": [
    "Provides the shared lineage and reconciliation fabric; it is more valuable as more business domains are enabled."
  ],
  "optionalWith": [
    "sales-core",
    "procurement-core",
    "inventory-core",
    "accounting-core"
  ],
  "conflictsWith": [],
  "providesCapabilities": [
    "traceability.links",
    "traceability.dimensions",
    "traceability.reconciliation"
  ],
  "requestedCapabilities": [
    "ui.register.admin",
    "api.rest.mount",
    "data.write.traceability",
    "events.publish.traceability"
  ],
  "ownsData": [
    "traceability.links",
    "traceability.dimensions",
    "traceability.reconciliation",
    "traceability.snapshots"
  ],
  "extendsData": [],
  "publicCommands": [
    "traceability.links.record",
    "traceability.dimensions.publish",
    "traceability.reconciliation.queue",
    "traceability.links.hold",
    "traceability.links.release",
    "traceability.links.amend",
    "traceability.links.reverse"
  ],
  "publicQueries": [
    "traceability.document-graph",
    "traceability.reconciliation-summary"
  ],
  "publicEvents": [
    "traceability.link-recorded.v1",
    "traceability.dimension-published.v1",
    "traceability.reconciliation-queued.v1"
  ],
  "domainCatalog": {
    "erpnextModules": [
      "Stock",
      "Accounts",
      "Selling",
      "Buying",
      "Support"
    ],
    "erpnextDoctypes": [
      "Serial No",
      "Batch",
      "Stock Ledger Entry",
      "Stock Reservation Entry",
      "Delivery Note",
      "Purchase Receipt"
    ],
    "ownedEntities": [
      "Document Link",
      "Traceability Dimension",
      "Lineage Snapshot",
      "Reconciliation Surface",
      "Correlation Graph"
    ],
    "reports": [
      "Document Traceability Graph",
      "Reconciliation Queue Summary",
      "Serial or Batch Genealogy",
      "Downstream Failure Audit"
    ],
    "exceptionQueues": [
      "broken-lineage-links",
      "reconciliation-backlog",
      "missing-upstream-correlation"
    ],
    "operationalScenarios": [
      "lead-to-cash-lineage",
      "procure-to-pay-lineage",
      "plan-to-produce-genealogy"
    ],
    "settingsSurfaces": [
      "Stock Settings",
      "Accounts Settings",
      "Support Settings"
    ],
    "edgeCases": [
      "missing upstream references",
      "cyclic document linkage",
      "partial reconciliation across modules"
    ]
  },
  "slotClaims": [],
  "trustTier": "first-party",
  "reviewTier": "R1",
  "isolationProfile": "same-process-trusted",
  "compatibility": {
    "framework": "^0.1.0",
    "runtime": "bun>=1.3.12",
    "db": [
      "postgres",
      "sqlite"
    ]
  }
});
