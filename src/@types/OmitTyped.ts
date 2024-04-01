type OmitTyped<T, K extends keyof T> = Omit<T, K>;

export type { OmitTyped as Omit };
