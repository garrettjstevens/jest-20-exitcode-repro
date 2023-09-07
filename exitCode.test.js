test('should exit cleanly', async () => {
  expect(async () => {
    process.exitCode = 1
    throw new Error('foo')
  }).rejects.toThrow('foo')
})
