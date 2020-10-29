const program = require('commander');
const { writeOutPattern, formatFullPatternName } = require('./scriptUtils');

const run = () => {
  program
    .usage('yarn run gen-pattern <pattern-name>')
    .option('-f, --force', 'Overwrite existing files')
    .parse(process.argv);

  const patternNameInput = program.args[0];

  if (!patternNameInput) {
    console.log('ERROR: Missing pattern name parameter');
    return;
  }

  const fullPatternName = formatFullPatternName(patternNameInput);
  const patternName = fullPatternName.replace(/Pattern$/, '');

  const mainTemplate = `
const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matchingHelpers');

const coursewareSrc = {
  type: 'courseware',
  url: 'https://admin.hello.ef.com/courseware/section/SECTION_ID',
  name: 'EF Hello Courseware',
};

module.exports = {
  id: '${patternName}',
  structures: ['FILL ME IN'],
  description: 'FILL ME IN',
  sources: [
    coursewareSrc,
  ],
  match: (sentence) => 
    mergeLocMatchGroups([
      regexMatchLocs(sentence.text, /\\b(unless)\\b[^.]+\\b(\\w+'ll)\\b/),
      regexMatchLocs(sentence.text, /\\b(unless)\\b[^.]+\\b(will)\\b/),
      regexMatchLocs(sentence.text, /\\b(unless)\\b[^.]+\\b(won't)\\b/),
    ]),
  examples: [
    {
      en: "I don't have any questions.",
      src: websiteSrc,
    },
  ],
};
  `;

  const testTemplate = `
const ${fullPatternName} = require('./${fullPatternName}');
const {
  assertAllExamplesMatch,
  assertNoneMatch,
  findLocsRegex,
  parseSentence,
} = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(${fullPatternName});
});

test("doesn't match negative examples", async () => {
  await assertNoneMatch(${fullPatternName}, [
    'this should not match',
    'MORE NEGATIVE EXAMPLES HERE',
  ]);
});
  `;

  writeOutPattern(fullPatternName, mainTemplate, testTemplate, program.force);
  console.log('Done! :D');
};
run();
