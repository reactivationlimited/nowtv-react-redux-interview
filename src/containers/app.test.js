import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './app'
import { getMessages } from '../selectors'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
}));
jest.mock('../selectors');


// quick and dirty workaround, really I dhould update the deps
// we should talk about the pros and cons of enzyme
const uglyEnzymeHookWorkaround = (component) => {
	const renderer = new ShallowRenderer();
	renderer.render(component);
	const output = renderer.getRenderOutput();
	return shallow(<div>{output}</div>);
}

describe('The App container', () => {
	it('should render a Messages component', () => {
		const wrapper = uglyEnzymeHookWorkaround(<App/>)
		getMessages.mockReturnValueOnce()

		expect(wrapper.exists('Messages')).toBe(true)
	})

});