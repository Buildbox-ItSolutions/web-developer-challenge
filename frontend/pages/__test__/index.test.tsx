import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../index';

describe('Index Page', () => {
    it('must render without errors', () => {
        const wrapper = renderer.create(<Index />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('should display Head and Layout.', () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find(`[data-test='index-head-component']`).exists()).toBeTruthy();
        expect(wrapper.find(`[data-test='index-layout-component']`).exists()).toBeTruthy();
    });
});
