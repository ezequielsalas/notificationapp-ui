import React from 'react';

const NotificationLogs = ({ logs }) => {
  return (
	<div className="table-responsive">
	  <table className="table table-striped">
		<thead>
		  <tr>
			<th>ID</th>
			<th>Category Type</th>
			<th>Status</th>
			<th>User ID</th>
			<th>Notification Type</th>
			<th>Timestamp</th>
		  </tr>
		</thead>
		<tbody>
		  {logs.map(log => (
			<tr key={log.id}>
			  <td>{log.id}</td>
			  <td>{log.category_type}</td>
			  <td>{log.status}</td>
			  <td>{log.user_id}</td>
			  <td>{log.notification_type}</td>
			  <td>{log.timestamp}</td>
			</tr>
		  ))}
		</tbody>
	  </table>
	</div>
  );
};

export default NotificationLogs;