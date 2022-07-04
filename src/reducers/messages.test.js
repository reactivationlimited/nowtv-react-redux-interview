import messagesReducer from './messages';

describe('The messages reducer', () =>{
	it('should return the intial state if passed no arguments', () => {
		expect(messagesReducer()).toEqual({});
	});
	it('should return the passed state unmodified if it is not also passed an action', () => {
		const state = {};
		expect(messagesReducer(state)).toBe(state);
	});
});
