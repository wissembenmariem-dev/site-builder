import {
  Activity,
  Award,
  Boxes,
  ClipboardList,
  Cloud,
  Globe2,
  LifeBuoy,
  Network,
  ServerCog,
  ShieldCheck,
  Store,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  activity: Activity,
  award: Award,
  boxes: Boxes,
  clipboard: ClipboardList,
  cloud: Cloud,
  globe: Globe2,
  lifebuoy: LifeBuoy,
  network: Network,
  server: ServerCog,
  shield: ShieldCheck,
  store: Store,
  users: Users,
  workflow: Workflow,
  wrench: Wrench,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
