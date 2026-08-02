import { ModuleLanding } from "@/components/module-landing";
import { getModule } from "@/lib/modules";
import type { Language } from "@/lib/i18n";

export function FactoryPage({ language = "en" }: { language?: Language }) {
  return <ModuleLanding moduleConfig={getModule("factory", language)} language={language} />;
}
