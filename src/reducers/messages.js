import { MESSAGES_PENDING, MESSAGES_FETCHED } from '../actions'
import { getMessages } from '../data/index.js'

export const messagesPending = () => ({
  type: 'MESSAGES_PENDING',
})

export const messagesFetched = (messages) => ({
  type: 'MESSAGES_FETCHED',
  messages,
})

export const reducer = (state = {}, action) => {
  switch (action) {
    default:
      return state
  }
}
