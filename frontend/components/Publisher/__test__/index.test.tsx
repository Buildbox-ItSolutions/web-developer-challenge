import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Publisher from '../index';

describe('Publisher', () => {
    it('must render without errors', () => {
        const handleSubmit = jest.fn();
        const wrapper = renderer.create(<Publisher handleSubmit={handleSubmit} />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('calls handleSubmit prop function when form is submitted', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<Publisher handleSubmit={handleSubmit} />);

        wrapper.find(`[data-test='publisher-form']`).simulate('submit');

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
