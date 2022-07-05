import { getMessages} from './selectors'


describe('the getMessages selector', () => {
	it('should return the value of state.messages', () => {
		const messages = {
			messages: []
		};
		const state = {
			messages
		}
		expect(getMessages(state)).toEqual(messages);
	})
	it.each([
		['', ''],
		['a', 'a'],
		['ab', 'ab'],
		['ba', 'ab'],
		['abc', 'abc'],
		['acb', 'abc'],
		['bac', 'abc'],
		['bca', 'abc'],
		['cab', 'abc'],
		['cba', 'abc']
	])('should sort messages lexically by timestamp', (unsorted, sorted) => {
		const messages = {
			messages: unsorted.split('').map(t => ({timestamp: t}))
		};
		const state = {
			messages
		}
		const sortedMessages = {
			messages: sorted.split('').map(t => ({timestamp: t}))
		};
		expect(getMessages(state)).toEqual(sortedMessages);
	})
})