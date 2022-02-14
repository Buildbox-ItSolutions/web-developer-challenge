import React from 'react';

import Feed from '.';
import { render } from '@testing-library/react';

describe('Feed component', () => {
  it('', () => {
    const Component = () => <Feed />;

    const { debug } = render(<Component />);

    debug();
  });
});
