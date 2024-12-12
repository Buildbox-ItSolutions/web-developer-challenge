import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../index';

const props = {
    profilePic: '/default-profile.png',
    message: 'hello',
    autor: 'Hudson',
    id: '1234'
};

describe('Card', () => {
    it('must render without errors', () => {
        const hendleDelete = jest.fn();
        const wrapper = renderer.create(<Card hendleDelete={hendleDelete} {...props} />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleDelete', () => {
        const hendleDelete = jest.fn();
        const wrapper = shallow(<Card hendleDelete={hendleDelete} {...props} />);

        wrapper.find(`[data-test='card-delete-button']`).simulate('click');

        expect(hendleDelete).toHaveBeenCalled();
    });

    it('should display the author and the message', () => {
        const hendleDelete = jest.fn();
        const wrapper = shallow(<Card hendleDelete={hendleDelete} {...props} />);

        expect(wrapper.find(`[data-test='card-author']`).text()).toEqual('Hudson');
        expect(wrapper.find(`[data-test='card-message']`).text()).toEqual('hello');
    });
});
