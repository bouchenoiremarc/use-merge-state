import { Test, suite } from "uvu"

type Describer = (test: Test) => Promise<void> | void

/**
 * Run multiple tests as a named suite.
 *
 * @param name - The name of the test suite.
 * @param callback - The test suite as a callback.
 */
export function describe(name: string, callback: Describer): void {
  const test = suite(name)
  callback(test)

  test.run()
}
