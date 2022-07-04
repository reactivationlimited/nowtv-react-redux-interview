import React from 'react';
import { shallow } from 'enzyme';

import { Messages } from './messages'

describe('The Messages component', () => {
	describe('when the status is PENDING', () => {
		const wrapper = shallow(<Messages status="PENDING" messages="data"/>)

		it('should render a loading message', () => {
			expect(wrapper.contains('Loading messages')).toBe(true);
		})
		it('should not render messages', () => {
			expect(wrapper.contains('data')).toBe(false);
		})
		it('should match a snapshot', () => {
			expect(wrapper).toMatchSnapshot()
		})
	})
	describe('when the status is FETCHED', () => {
		const wrapper = shallow(<Messages status="FETCHED" messages="messages"/>)

		it('should render messages', () => {
			expect(wrapper.contains('messages')).toBe(true);
		})
		it('should not render a loading message', () => {
			expect(wrapper.contains('Loading messages')).toBe(false);
		})
		it('should match a snapshot', () => {
			expect(wrapper).toMatchSnapshot()
		})
	})
})