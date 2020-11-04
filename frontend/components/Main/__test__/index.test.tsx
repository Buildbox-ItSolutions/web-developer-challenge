import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../index';

describe('Main', () => {
    it('must render without errors', () => {
        const wrapper = renderer.create(<Main />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('must display a publisher component ', () => {
        const wrapper = shallow(<Main />);

        expect(wrapper.find(`[data-test='publisher-component']`).exists()).toBeTruthy();
    });
});
