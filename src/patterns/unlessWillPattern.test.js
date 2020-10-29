const unlessWillPattern = require('./unlessWillPattern');
const { assertAllExamplesMatch } = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(unlessWillPattern);
});
