
# grammar-matcher
A tool to find grammar patterns from our courseware in 

## Running Grammar Matcher for development
If you want to contribute code to this repo you'll need to get the repo and tests running first. After you
clone this repo, run `yarn install` to get everything set up. 

This project requires the Stanford CoreNLP server to be running with Chinese enabled. The easiest way to do this is to use a pre-built docker image. The following command will bring up an Stanford CoreNLP server on port 9000 of your local computer: `docker run -p 9000:9000 --memory=4g frnkenstien/corenlp:latest`

Once you have a Stanford CoreNLP server running locally, you can run tests with `yarn test`. If all tests pass you should be good to go! It might take 2 tries to get the tests to pass after starting the Core NLP server since it takes a few minutes to load everything the first run.

## Adding/editing grammar patterns
You can scaffold a new grammar pattern by running `yarn gen-pattern <pattern-name>`. This will add a shell of
a grammar pattern and a test to `src/patterns`. If you fix a bug or improve an existing grammar pattern make sure to update the corresponding test case for the patten too!

