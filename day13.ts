type Demand<T> = {
  // this make covairance to contravariance, or like exact type in flow
  demand: Exclude<T, unknown> extends T ? T : unknown;
};
