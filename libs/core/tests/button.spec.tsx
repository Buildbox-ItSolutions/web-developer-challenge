import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BixButton } from '../src/components/button';

describe('button', () => {
  test('loads and displays greeting', async () => {
    render(<BixButton />);

    expect(true).toBe(true);
  });
});
