/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGN1JR5',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'expressingAgainInThePastWithYou',
  name: '又 + Verb + 了',
  description:
    'Whenever you want to express something like "you did it again!" in Chinese, you generally want to use 又 (yòu).',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(又)[^了]+(了)/),
      regexMatchLocs(text, /(又是)/),
      regexMatchLocs(text, /(又(?:要|可以|能))[^了]+(了?)/),
    ]);
  },
  examples: [
    {
      zh: '又下雨了！',
      en: 'It rains again!',
      src: allSetSrc,
    },
    {
      zh: '你又迟到了。',
      en: 'You came late again.',
      src: allSetSrc,
    },
    {
      zh: '我又写错了。',
      en: 'I wrote it wrong again.',
      src: allSetSrc,
    },
    {
      zh: '宝宝又哭了。',
      en: 'The baby is crying again.',
      src: allSetSrc,
    },
    {
      zh: '他又喝醉了？',
      en: 'He got drunk again?',
      src: allSetSrc,
    },
    {
      zh: '明天又是星期一！',
      en: 'Tomorrow will be Monday AGAIN!',
      src: allSetSrc,
    },
    {
      zh: '我又要迟到了。',
      en: "I'm going to be late again.",
      src: allSetSrc,
    },
    {
      zh: '今晚又要加班！',
      en: "Tonight we're going to work late again!",
      src: allSetSrc,
    },
    {
      zh: '老板请客，又可以吃大餐了！',
      en: 'The boss is going to treat us. We can have a big meal again!',
      src: allSetSrc,
    },
    {
      zh: '快过年了，我们又能拿压岁钱了！',
      en: 'CNY is coming soon. We can get our new year money again!',
      src: allSetSrc,
    },
  ],
};