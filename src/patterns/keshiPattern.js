/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGUD81S',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'keshi',
  name: 'Statement， 可是 / 但是 + [Contrary Statement]',
  description:
    'Using "but" in Chinese is really simple to learn. It involves the two words 可是 (kěshì) and 但是 (dànshì). Make no "buts" about it; you\'ll understand it in no time!',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /((?:可是|但是))/)]);
  },
  examples: [
    {
      zh: '我喜欢他，可是他不喜欢我。',
      en: "I like him, but he doesn't like me.",
      src: allSetSrc,
    },
    {
      zh: '我很想去，但是我太忙了。',
      en: 'I really want to go, but I am too busy.',
      src: allSetSrc,
    },
    {
      zh: '中文很有意思，但是也很难。',
      en: 'Chinese is very interesting, but it is also very hard.',
      src: allSetSrc,
    },
    {
      zh: '我喜欢这件衬衫，可是太贵了。',
      en: 'I like this shirt, but it is too expensive.',
      src: allSetSrc,
    },
    {
      zh: '老板昨天给他打电话，可是他没接。',
      en: "The boss gave him a call yesterday, but he didn't answer.",
      src: allSetSrc,
    },
    {
      zh: 'iPhone很好，但是我没钱买。',
      en: "The iPhone is great, but I don't have the money to buy it.",
      src: allSetSrc,
    },
    {
      zh: '你们可以在这里看书，可是不可以说话。',
      en: "You can read books here, but you can't talk.",
      src: allSetSrc,
    },
    {
      zh: '你可以吃，但是不可以吃太多。',
      en: "You can eat, but you can't eat too much.",
      src: allSetSrc,
    },
    {
      zh: '他说五点来见我，但是他没来。',
      en: "He said he would come to see me at five, but he didn't.",
      src: allSetSrc,
    },
    {
      zh: '这个地方很漂亮，但是人太多了。',
      en: 'This place is beautiful, but there are too many people.',
      src: allSetSrc,
    },
  ],
};