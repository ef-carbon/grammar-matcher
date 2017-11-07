/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGRBC43',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'yiwei',
  name: 'Subj. + 以为 ⋯⋯',
  description:
    'In English, the verb "to think" can imply that the belief is incorrect, e.g. in "I thought it was legal here." Chinese has a specific verb for this kind of mistaken belief: 以为 (yǐwéi). Literally these two characters mean "take to be," i.e. someone takes one thing to be something else.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(以为)/)]),
  examples: [
    {
      zh: '我以为他是英国人。',
      en: 'I thought he is British.',
      src: allSetSrc,
    },
    {
      zh: '我们以为只有家人知道。',
      en: 'We thought only family members know.',
      src: allSetSrc,
    },
    {
      zh: '我以为中国电影在美国很受欢迎。',
      en: 'I thought Chinese movies are very popular in the USA.',
      src: allSetSrc,
    },
    {
      zh: '所有人都以为你才二十岁！',
      en: "Everybody thought you're only twenty.",
      src: allSetSrc,
    },
    {
      zh: '我以为你们分手了。',
      en: 'I thought you guys broke up.',
      src: allSetSrc,
    },
    {
      zh: '我们都以为你生气了。',
      en: 'We all thought you were angry.',
      src: allSetSrc,
    },
    {
      zh: '老师以为学生都听懂了。',
      en: 'The teacher thought students all understood.',
      src: allSetSrc,
    },
    {
      zh: '大家都以为他是大老板。',
      en: "Everybody thought he's the big boss.",
      src: allSetSrc,
    },
    {
      zh: '她是你外婆？我以为是你妈妈。',
      en: "She's your grandma? I thought she's your mother.",
      src: allSetSrc,
    },
    {
      zh: '你怎么会去吃四川火锅？我以为你不爱吃辣。',
      en:
        "Why would you go to Sichuan hotpot? I thought you don't like eating spicy food.",
      src: allSetSrc,
    },
  ],
};