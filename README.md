# Jest + Typescript + VSCode + Debug

Minimal setup to debug jest tests written in TypeScript using VS Code

## Setup

1. `mkdir debug-jest`
1. `cd debug-jest`
1. `npm init -y`
    1. Configure package json metadata 
1. `npm i typescript jest @test/jest ts-jest`
1. Create .gitignore and add ignore locations
1. `npx tsc --init`
    1. Change settings (outDir: `./build`)
    1. Setup package.scripts
1. Create src/index.ts
1. `npm start`
    1. Verify compiles and runs
1. Create src/index.test.ts
1. `npx ts-jest config:init`
1. `npm test`
    1. Verify tests are successful
1. `Add debug script`
    1. `"test:debug": "jest --runInBand"`
1. Set breakpoint in test and debug!
    1. Click "Debug" over package.scripts section

        ![image](https://user-images.githubusercontent.com/2856501/136639023-8dde6495-d683-41de-93f3-a75af8f94e3a.png)

    1. Select "test:debug"

        ![image](https://user-images.githubusercontent.com/2856501/136639033-831f85a2-060c-458d-a363-e1f80ad9f546.png)



## References

- https://jestjs.io/docs/cli#--init
- https://github.com/kulshekhar/ts-jest#getting-started
- https://github.com/github/gitignore/blob/master/Node.gitignore
