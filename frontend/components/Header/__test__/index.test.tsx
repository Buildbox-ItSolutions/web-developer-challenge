import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

jest.mock('next/image');

describe('Header', () => {
    it('must render without errors', () => {
        const wrapper = renderer.create(<Header />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('must display the logo ', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find(`[data-test='header-logo']`).exists()).toBeTruthy();
    });
});
