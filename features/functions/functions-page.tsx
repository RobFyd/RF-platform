import { ModuleLanding } from "@/components/module-landing";
import { getModule } from "@/lib/modules";

export function FunctionsPage() {
  return <ModuleLanding moduleConfig={getModule("functions")} />;
}
