import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { MESSAGES_PENDING, MESSAGES_FETCHED } from '../actions'
import {
  reducer,
  messagesPending,
  messagesFetched,
  fetchMessages,
} from './messages'
import { getMessages, getMembers } from '../data/index.js'

jest.mock('../data/index.js')

const mockStore = configureMockStore([thunk])

describe('The messages reducer', () => {
  it('should return the intial state if passed no arguments', () => {
    expect(reducer()).toEqual({})
  })
  it('should return the passed state unmodified if it is not also passed an action', () => {
    const state = {}
    expect(reducer(state)).toBe(state)
  })
  it('should return a state with status set to PENDING if the action is MESSAGES_PENDING', () => {
  	const state = {};
  	const action = messagesPending()
  	expect(reducer(state, action)).toEqual({
  		status: 'PENDING'
  	})
  })
  it('should return a state with status set to fetched and some messages if the action is MESSAGES_FETCHED', () => {
  	const messages = {};
  	const state = {};
  	const action = messagesFetched(messages);
  	expect(reducer(state, action)).toEqual({
  		status: 'FETCHED',
  		messages
  	})
  })
})

describe('The messagesPending action creator', () => {
  it('should return an action representing a pending status', () => {
    expect(messagesPending()).toEqual({
      type: MESSAGES_PENDING,
    })
  })
})

describe('The messagesFetched action creator', () => {
  it('should return an action representing a fetched status with the fetched messages', () => {
    const messages = {}
    expect(messagesFetched(messages)).toEqual({
      type: MESSAGES_FETCHED,
      messages,
    })
  })
})

describe('The fetchMessages thunk', () => {
  it('should dispatch the correct actions, load data and join', async () => {
    const store = mockStore()
    const messages = [{
      userId: 'foo'
    }];
    const members = [{
      id: 'foo'
    }];
    getMessages.mockReturnValueOnce(messages)
    getMembers.mockReturnValueOnce(members)

    await store.dispatch(fetchMessages())

    expect(store.getActions()).toEqual([
      {
        type: 'MESSAGES_PENDING',
      },
      {
        type: 'MESSAGES_FETCHED',
        messages: [{
          userId: 'foo',
          member: {
            id: 'foo'
          }
        }]
      },
    ])
    expect(getMessages).toHaveBeenCalledTimes(1)
    expect(getMembers).toHaveBeenCalledTimes(1)
  })
})
