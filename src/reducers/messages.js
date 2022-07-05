import { MESSAGES_PENDING, MESSAGES_FETCHED } from '../actions'
import { getMessages, getMembers } from '../data/index.js'

export const messagesPending = () => ({
  type: MESSAGES_PENDING,
})

export const messagesFetched = (messages) => ({
  type: MESSAGES_FETCHED,
  messages,
})

export const fetchMessages = () => async (dispatch) => {
  dispatch(messagesPending())

  // In a production app, I'd create another reducer etc. for members
  const [ messages, members ] = await Promise.all([getMessages(), getMembers()]);

  // I wouldn't join the data here in a production app, I'd use a selector or join on the server side
  messages.forEach(message => message.member = members.find(({id}) => id === message.userId))
  dispatch(messagesFetched(messages))
}

export const reducer = (state = {
  messages: []
}, action = {}) => {
  switch (action.type) {
  	case MESSAGES_PENDING: return {
      status: 'PENDING',
      messages: []
  	}
  	case MESSAGES_FETCHED: return {
  		...state,
  		status: 'FETCHED',
  		messages: action.messages
  	}
    default:
      return state
  }
}
