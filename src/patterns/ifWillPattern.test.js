const ifWillPattern = require('./ifWillPattern');
const { assertAllExamplesMatch } = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(ifWillPattern);
});
