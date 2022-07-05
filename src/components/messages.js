import React from 'react'

export const Messages = ({ status, messages}) => {
	switch(status) {
		case 'PENDING': return <div>Loading messages</div>
		case 'FETCHED': return <div>{
			messages.map(({id, userId, message, timestamp, member}) => <div title={member?.email} key={id}><img href={member?.avatar} alt="" width="100" height="100"/>{message}</div>)
		}</div>
		default: return null;
	}
}