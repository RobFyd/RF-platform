import { ModuleLanding } from "@/components/module-landing";
import { getModule } from "@/lib/modules";

export function FusionPage() {
  return <ModuleLanding moduleConfig={getModule("fusion")} />;
}
