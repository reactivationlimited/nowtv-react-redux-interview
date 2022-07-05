import React from 'react'
import { format } from 'date-fns'

export const Messages = ({ status, messages}) => {
	switch(status) {
		case 'PENDING': return <div>Loading messages</div>
		case 'FETCHED': return <div>{
			messages.map(({id, userId, message, timestamp, member}) => 
				<div title={member?.email} key={id}>
					<img href={member?.avatar} alt="" width="100" height="100"/>{format(new Date(timestamp), 'do MMM yyyy HH:MM')} {message}
				</div>
			)
		}</div>
		default: return null;
	}
}