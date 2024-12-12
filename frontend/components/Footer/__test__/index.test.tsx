import 'jest-styled-components';

import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../index';

describe('Footer', () => {
    it('must render without errors', () => {
        const wrapper = renderer.create(<Footer />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});
