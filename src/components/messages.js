import React from 'react'

import { fetchMessages } from '../reducers/messages'

export const Messages = ({ status, messages}) => {
	switch(status) {
		case 'PENDING': return <div>Loading messages</div>
		case 'FETCHED': return <div>{messages}</div>
		default: return null;
	}
}