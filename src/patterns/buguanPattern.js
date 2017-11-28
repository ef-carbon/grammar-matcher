/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG0NDS6',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'buguan',
  structures: ['不管 + Situation + Subj. + (都 / 也) + Result'],
  description:
    '不管 (bùguǎn) is more informal than 无论, but it is used in more or less the same way. As with other constructions, 都 and 也 can be used in the second part of the sentence to emphasize the action or decision will not change.',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(不管)[^都也]+((?:(?:都|也)?))/)]),
  examples: [
    {
      zh: '不管你信不信，反正我信！',
      en: "It doesn't matter if you believe or not, I believe it anyway.",
      src: allSetSrc,
    },
    {
      zh: '不管我是在英国还是不在英国，我都习惯每天吃英式早餐。',
      en:
        "It doesn't matter if I'm in England or not, I'm always used to eating English breakfasts.",
      src: allSetSrc,
    },
    {
      zh: '为了你，不管让我付出什么代价，我都觉得值得。',
      en:
        "For you, it doesn't matter how much you make me invest in our friendship, I will still think you're worth it.",
      src: allSetSrc,
    },
  ],
};
