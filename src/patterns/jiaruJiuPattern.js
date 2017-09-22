/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGHNDX4',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'jiaruJiu',
  name: '假如 + Statement + 就 + Result',
  description:
    '"假如⋯⋯，就⋯⋯" (jiǎrú..., jiù...) is yet another way to express "If..., then..." in Chinese, but it is much more formal than 要是 or 如果 are (in both written and spoken Chinese).',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(假如)[^就]+(就)/)]);
  },
  examples: [
    {
      zh: '假如你的成绩再好一点儿，你就能申请北大了。',
      en:
        'If your grades come up a little more, then you can apply to Beijing University.',
      src: allSetSrc,
    },
    {
      zh: '假如我是你，我就戒烟。',
      en: 'If I were you, I would give up smoking.',
      src: allSetSrc,
    },
    {
      zh: '假如你的女朋友不爱你，你们就分手吧。',
      en: "If your girlfriend doesn't love you, then you should break up.",
      src: allSetSrc,
    },
  ],
};