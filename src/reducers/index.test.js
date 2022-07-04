import { createRootReducer } from '.';


const mockHistory = {};
const state = createRootReducer(mockHistory)();

describe('the root reducer', () => {
	it('should return a state with messages property', () => {
		expect(state).toHaveProperty('messages');
	})
})