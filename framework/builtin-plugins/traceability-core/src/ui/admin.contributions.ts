import {
  defineAdminNav,
  defineCommand,
  definePage,
  defineWorkspace,
  type AdminContributionRegistry
} from "@platform/admin-contracts";

import { BusinessAdminPage } from "./admin/main.page";

export const adminContributions: Pick<AdminContributionRegistry, "workspaces" | "nav" | "pages" | "commands"> = {
  workspaces: [
    defineWorkspace({
      id: "business-foundations",
      label: "Business Foundations",
      icon: "briefcase-business",
      description: "Canonical shared masters and governed reference data.",
      permission: "traceability.links.read",
      homePath: "/admin/business/traceability",
      quickActions: ["traceability-core.open.control-room"]
    })
  ],
  nav: [
    defineAdminNav({
      workspace: "business-foundations",
      group: "control-room",
      items: [
        {
          id: "traceability-core.overview",
          label: "Control Room",
          icon: "briefcase-business",
          to: "/admin/business/traceability",
          permission: "traceability.links.read"
        }
      ]
    })
  ],
  pages: [
    definePage({
      id: "traceability-core.page",
      kind: "dashboard",
      route: "/admin/business/traceability",
      label: "Traceability Control Room",
      workspace: "business-foundations",
      group: "control-room",
      permission: "traceability.links.read",
      component: BusinessAdminPage
    })
  ],
  commands: [
    defineCommand({
      id: "traceability-core.open.control-room",
      label: "Open Traceability & Dimensions Core",
      permission: "traceability.links.read",
      href: "/admin/business/traceability",
      keywords: ["traceability & dimensions core","business foundations","business"]
    })
  ]
};
