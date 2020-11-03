import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../index';

describe('Layout', () => {
    it('must render without errors', () => {
        const wrapper = renderer.create(<Layout />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('should display the layout with grid, header, main, footer.', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find(`[data-test='layout-grid-component']`).exists()).toBeTruthy();
        expect(wrapper.find(`[data-test='layout-header-component']`).exists()).toBeTruthy();
        expect(wrapper.find(`[data-test='layout-main-component']`).exists()).toBeTruthy();
        expect(wrapper.find(`[data-test='layout-footer-component']`).exists()).toBeTruthy();
    });
});
