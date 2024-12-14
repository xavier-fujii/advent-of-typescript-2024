interface Excuse<T extends Record<string, string>> {
  new (v: T): T extends Record<infer K extends string, infer V extends string>
    ? `${K}: ${V}`
    : never;
}
