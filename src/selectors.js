export const getMessages = state => ({
	...state.messages,
	messages: state.messages.messages.slice(0).sort((left, right) => left.timestamp < right.timestamp ? -1 : left.timestamp === right.timestamp ? 0 : 1)
})
