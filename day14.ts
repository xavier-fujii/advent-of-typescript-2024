type PerfReview<T> = T extends AsyncGenerator<infer U, void, unknown>
  ? U
  : never;
