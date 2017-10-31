/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGI9WXT',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'advancedYesnoQuestionsWithMa',
  name: 'Statement + 吗 ？',
  description:
    'The question particle 吗 (ma) is a very simple way to convert it into a "yes/no question," and beginners will learn not to use 吗 with other question words, because it\'s redundant. More advanced students, however, will note that 吗 has some more complicated structures that do involve combining it with question words in order to ask very specific types of confirming questions. Note that the following examples typically contains some kind of "verb of understanding" such as 知道 (zhīdào),了解 (liǎojiě), 明白 (míngbai), 认识 (rènshi), etc. Then "吗" (ma) can still be added at the end of the question, turning it into a kind of confirmation.',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(?:什么|谁|哪|多大).*(吗？)/)]),
  examples: [
    {
      zh: '你知道这是什么东西吗？',
      en: 'Do you know what this thing is?',
      src: allSetSrc,
    },
    {
      zh: '你知道他是谁吗？',
      en: 'Do you know who he is?',
      src: allSetSrc,
    },
    {
      zh: '你明白这是什么意思吗？',
      en: 'Do you understand the meaning of this?',
      src: allSetSrc,
    },
    {
      zh: '你明白他的问题是什么吗？',
      en: 'Do you understand what his question is?',
      src: allSetSrc,
    },
    {
      zh: '你知道他叫什么名字吗？',
      en: 'Do you what his name is?',
      src: allSetSrc,
    },
    {
      zh: '你知道王老师在哪里吗？',
      en: 'Do you know where Teacher Wang is?',
      src: allSetSrc,
    },
  ],
};
