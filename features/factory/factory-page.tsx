import { ModuleLanding } from "@/components/module-landing";
import { getModule } from "@/lib/modules";

export function FactoryPage() {
  return <ModuleLanding moduleConfig={getModule("factory")} />;
}
