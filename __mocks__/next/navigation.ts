// __mocks__/next/router.ts
const useRouter = jest.fn();

// Default mock implementation
useRouter.mockImplementation(() => ({
  route: "/",
  pathname: "/",
  query: {},
  asPath: "/",
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  isFallback: false,
}));

export { useRouter };
