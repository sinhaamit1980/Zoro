# Zoro

Installing packages and Running tests
================================
  

## Clone the project

```bash
git clone https://github.com/sinhaamit1980/Zoro.git
```

## Install NPM (if not installed)

Download and install Node from https://nodejs.org/en/download. 
This will also install the Node Package Manager (NPM).
 

## Running the tests

open the terminal and navigate to the directory where the project has been checked out(directory having package.json)
execute below command
```bash
npm test
```

## Running particular tagged test
modify the command for tests under Scripts section in package.json
For Example if we tag one test with @test1 and want to run this test only. Then pass this tag with -t paramter as explained below

```bash
  "scripts": {
    "test": "node ./node_modules/selenium-cucumber-js/index.js -d -t @test1 -t ~@in-progress -s ./features/step_definitions -p ./features/page_objects -r ./features/reports"
  },

```