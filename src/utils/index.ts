/**
 * 仅在dev环境下log
 */
export function devLog(...arg: any[]) {
  if (import.meta.env.DEV) {
    console.log(...arg)
  }
}

/**
 * @example return arg.filter(i => !!i).join(" ")
 */
export function classNames(...arg: (string | null | undefined)[]): string {
  return arg.filter(i => !!i).join(" ")
}
