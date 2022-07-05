import React from 'react';
import { shallow } from 'enzyme';

import { Messages } from './messages'


const messages = [
  {
    "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
    "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "timestamp": "2017-02-09T04:27:38Z",
    "member": {
    	"email": 'foo@bar.test',
    	"avatar": 'mugshot@bar.test',
    }
  },
  {
    "id": "b03569ae-ccbf-4975-8040-4daba638b407",
    "userId": "16373df5-da0a-4074-8295-f916b94269f4",
    "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    "timestamp": "2016-11-09T05:04:58Z",
    "member": null
  }
];

describe('The Messages component', () => {
	describe('when the status is PENDING', () => {
		const wrapper = shallow(<Messages status="PENDING" messages={messages}/>)

		it('should render a loading message', () => {
			expect(wrapper.contains('Loading messages')).toBe(true);
		})
		it('should not render messages', () => {
			for(let message of messages) {
				expect(wrapper.contains(message.message)).toBe(false);
			}
		})
		it('should match a snapshot', () => {
			expect(wrapper).toMatchSnapshot()
		})
	})
	describe('when the status is FETCHED', () => {
		const wrapper = shallow(<Messages status="FETCHED" messages={messages}/>)

		it('should not render a loading message', () => {
			expect(wrapper.contains('Loading messages')).toBe(false);
		})
		it('should render messages', () => {
			for(let message of messages) {
				expect(wrapper.contains(message.message)).toBe(true);
				const member = message.member
				if(member?.email) {
  		 		expect(wrapper.exists(`div[title="${member?.email}"]`)).toBe(true);
				}
				if(member?.avatar) {
  		 		expect(wrapper.exists(`img[href="${member?.avatar}"]`)).toBe(true);
				}
			}
		})
		it('should match a snapshot', () => {
			expect(wrapper).toMatchSnapshot()
		})
	})
})