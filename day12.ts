type ParseInt<S extends string> = S extends `${infer C extends number}`
  ? C
  : never;

type Lower_Char =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
type Upper_Char =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
type Char = Lower_Char | Upper_Char;

type isEven<S extends string> = S extends ""
  ? true
  : S extends `${Char}${infer R}`
  ? isEven<R> extends true
    ? false
    : true
  : false;

type NaughtyOrNice<S extends string> = isEven<S> extends true
  ? "naughty"
  : "nice";

type FormatNames<T extends Array<[string, string, `${number}`]>> = {
  [P in keyof T]: {
    name: T[P][0];
    count: ParseInt<T[P][2]>;
    rating: NaughtyOrNice<T[P][0]>;
  };
};
