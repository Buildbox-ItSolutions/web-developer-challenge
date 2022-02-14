import {
  renderWithProviders,
  screen,
  waitFor,
} from '@/__tests__/utils';
import Avatar from '@/components/Avatar';

const DELAY = 0;
const LOAD_IMAGE = 'load';
const ERROR_IMAGE = 'error';
const originalImage = window.Image;
const src = 'https://jestjs.io/pt-BR/img/opengraph.png';
const name = 'Jest';

const mockImage = (loadState: 'load' | 'error') => {
  jest.useFakeTimers();
  (window.Image as unknown) = class {
    onload: () => void = () => {};
    onerror: () => void = () => {};
    src: string = '';
    constructor() {
      setTimeout(() => {
        switch (loadState) {
          case LOAD_IMAGE:
            this.onload();
            break;
          case ERROR_IMAGE:
            this.onerror();
            break;
          default:
            break;
        }
      }, DELAY);
      return this;
    }
  };
};

afterEach(() => {
  jest.useRealTimers();
});

afterAll(() => {
  window.Image = originalImage;
});

test('should render avatar image', () => {
  mockImage(LOAD_IMAGE);

  renderWithProviders(<Avatar src={src} name={name} />);

  const img = screen.getByRole('img');

  expect(img).toHaveAttribute('src', src);
  expect(img).toHaveAttribute('alt', name);
});

test('should render avatar placeholder when src is invalid', async () => {
  renderWithProviders(<Avatar src={undefined} name={name} />);

  expect(screen.getByText(/J/i)).toHaveTextContent(name[0]);
});
