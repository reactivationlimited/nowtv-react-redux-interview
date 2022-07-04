import { MESSAGES_PENDING, MESSAGES_FETCHED } from '../actions'
import { reducer, messagesPending, messagesFetched } from './messages'

describe('The messages reducer', () => {
  it('should return the intial state if passed no arguments', () => {
    expect(reducer()).toEqual({})
  })
  it('should return the passed state unmodified if it is not also passed an action', () => {
    const state = {}
    expect(reducer(state)).toBe(state)
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
