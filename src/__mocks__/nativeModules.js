jest.mock('react-native-fs', () => {
  return {
    mkdir: jest.fn(() => Promise.resolve(true)),
  };
});
