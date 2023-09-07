# jest-20-exitcode-repro

Reproduction of an inconsistency (bug?) in setting `process.exitCode` within
tested code in Node.js 18 vs. 20.

### To reproduce:

```sh
git clone https://github.com/garrettjstevens/jest-20-exitcode-repro.git
cd jest-20-exitcode-repro/
yarn
yarn jest
```
In Node.js 18, the output will be:

```
yarn run v1.22.19
$ /home/garrett/Playground/jest-20-exitcode-repro/node_modules/.bin/jest
 PASS  ./exitCode.test.js
  ✓ should exit without errors (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.244 s, estimated 1 s
Ran all test suites.
Done in 0.54s.
```

In Node.js 20, the output will be:

```
yarn run v1.22.19
$ /home/garrett/Playground/jest-20-exitcode-repro/node_modules/.bin/jest
 PASS  ./exitCode.test.js
  ✓ should exit without errors (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.139 s, estimated 1 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
