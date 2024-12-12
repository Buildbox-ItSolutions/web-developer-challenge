

import { LocalStorageAdapter } from "@/app/infra/cache/local-storage-adapter";

export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter()
