export class Utils {
  public static readonly capitalize = (str: string): string => str.split(" ").map((e) => e.at(0)?.toUpperCase() + e.slice(1)).join(" ");
}