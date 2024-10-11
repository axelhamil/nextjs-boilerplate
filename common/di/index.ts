import { Container } from "inversify";

import { DI_RETURN_TYPES, DI_SYMBOLS } from "@/common/di/types";
import { env } from "@/common/env";

const ApplicationContainer = new Container({
  defaultScope: "Singleton",
});

export const initializeContainer = () => {};

export const destroyContainer = () => {};

if (env.NODE_ENV !== "test") {
  initializeContainer();
}

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}
