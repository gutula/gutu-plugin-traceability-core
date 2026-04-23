export const scenarioDefinitions = [
  {
    "id": "lead-to-cash-lineage",
    "owningPlugin": "traceability-core",
    "workflowId": "traceability-reconciliation",
    "actionIds": [
      "traceability.links.record",
      "traceability.dimensions.publish",
      "traceability.reconciliation.queue",
      "traceability.links.hold",
      "traceability.links.release",
      "traceability.links.amend",
      "traceability.links.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "traceability.reconciliation.queue"
      ]
    }
  },
  {
    "id": "procure-to-pay-lineage",
    "owningPlugin": "traceability-core",
    "workflowId": "traceability-reconciliation",
    "actionIds": [
      "traceability.links.record",
      "traceability.dimensions.publish",
      "traceability.reconciliation.queue",
      "traceability.links.hold",
      "traceability.links.release",
      "traceability.links.amend",
      "traceability.links.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "traceability.reconciliation.queue"
      ]
    }
  },
  {
    "id": "plan-to-produce-genealogy",
    "owningPlugin": "traceability-core",
    "workflowId": "traceability-reconciliation",
    "actionIds": [
      "traceability.links.record",
      "traceability.dimensions.publish",
      "traceability.reconciliation.queue",
      "traceability.links.hold",
      "traceability.links.release",
      "traceability.links.amend",
      "traceability.links.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "traceability.reconciliation.queue"
      ]
    }
  }
] as const;
