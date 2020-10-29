const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matchingHelpers');

const coursewareSrc = {
  type: 'courseware',
  url:
    'https://admin.hello.ef.com/courseware/section/c1dd0824-2c66-4cdb-adc9-72096a0a3f10',
  name: 'EF Hello Courseware',
};

module.exports = {
  id: 'unlessWill',
  structures: ['unless ... will ...'],
  description:
    'Sentences with unless indicate something that will happen if another event does not happen. Use unless + a present tense clause. Then add a main clause with will.',
  sources: [coursewareSrc],
  match: (sentence) =>
    mergeLocMatchGroups([
      regexMatchLocs(sentence.text, /\b(unless)\b[^.]+\b(\w+'ll)\b/),
      regexMatchLocs(sentence.text, /\b(unless)\b[^.]+\b(will)\b/),
      regexMatchLocs(sentence.text, /\b(unless)\b[^.]+\b(won't)\b/),
    ]),
  examples: [
    {
      en: 'Unless the team can follow the schedule, development will fall behind.',
      src: coursewareSrc,
    },
    {
      en: "Unless we innovate constantly, we won't stay competitive.",
      src: coursewareSrc,
    },
    {
      en: "Unless I work hard, I'll lose my job.",
      src: coursewareSrc,
    },
  ],
};
