import { getMessages} from './selectors'


describe('the getMessages selector', () => {
	it('should return the value of state.messages', () => {
		const messages = {};
		const state = {
			messages
		}
		expect(getMessages(state)).toBe(messages);
	})
})