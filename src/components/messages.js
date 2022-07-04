import React from 'react'

export const Messages = ({ status, messages}) => {
	switch(status) {
		case 'PENDING': return <div>Loading messages</div>
		case 'FETCHED': return <div>{
			messages.map(({id, userId, message, timestamp}) => <div key={id}>{message}</div>)
		}</div>
		default: return null;
	}
}