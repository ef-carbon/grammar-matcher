const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matchingHelpers');

const coursewareSrc = {
  type: 'courseware',
  url:
    'https://admin.hello.ef.com/courseware/section/4680d7bf-b149-4725-87d9-54405d201d13',
  name: 'EF Hello Courseware',
};

module.exports = {
  id: 'ifWill',
  structures: ['If ... will ...', 'If ... can ...'],
  description:
    'Use a first conditional statement to communicate what will result if some event happens. First conditional sentences have two clauses. One clause has the word if + a condition. The second clause is the result clause. It has a verb in the future with the modal will. You can also use modals like can in the result clause.',
  sources: [coursewareSrc],
  match: (sentence) =>
    mergeLocMatchGroups([
      regexMatchLocs(sentence.text, /\b(if)\b[^.]+\b(\w+'ll)\b/),
      regexMatchLocs(sentence.text, /\b(if)\b[^.]+\b(will)\b/),
      regexMatchLocs(sentence.text, /\b(if)\b[^.]+\b(won't)\b/),
      regexMatchLocs(sentence.text, /\b(if)\b[^.]+\b(can)\b/),
    ]),
  examples: [
    {
      en: 'If I am late, I will call you.',
      src: coursewareSrc,
    },
    {
      en: 'If we buy an electric car, it will help the environment.',
      src: coursewareSrc,
    },
    {
      en: 'If the city changes to natural gas, air quality will improve.',
      src: coursewareSrc,
    },
    {
      en: 'If you buy an electric car, you will save money on gas',
      src: coursewareSrc,
    },
    {
      en: "If I buy an electric car, I won't have money for food",
      src: coursewareSrc,
    },
    {
      en: 'If I save my money, I can buy an electric car next year.',
      src: coursewareSrc,
    },
    {
      en: 'If factories stop using coal, they can decrease pollution.',
      src: coursewareSrc,
    },
  ],
};
