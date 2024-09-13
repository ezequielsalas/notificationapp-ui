import React, { useState, useEffect } from 'react';
import NotificationLogs from './components/NotificationLogs';
import MessageForm from './components/MessageForm';
import API_BASE_URL from './config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const NotificationSwal = withReactContent(Swal)

const App = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/logs/`)
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error fetching logs:', error));
  }, []);

  const fetchLogs = () => {
    fetch(`${API_BASE_URL}/logs/`)
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error fetching logs:', error));
  };

  const handleSend = (message) => {
    fetch(`${API_BASE_URL}/send-notification/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Message sent:', data.detail);
        fetchLogs(); // Fetch logs after sending the message

        NotificationSwal.fire({
         title: <p>{data.detail || 'Notification sent successfully!'} </p>,

         confirmButtonText: 'Close',
         icon: 'success'
        })
      })
      .catch(error => {
        console.error('Error sending message:', error);
        NotificationSwal.fire({
          title: <p>{error}</p>,
          confirmButtonText: 'Close',
         icon: 'error'
        })
      });
  };

  return (
    <div className="container mt-5">
      <h1>Notification App</h1>
      <div className="row">
        <div className="col-md-8">
          <NotificationLogs logs={logs} />
        </div>
        <div className="col-md-4">
          <MessageForm onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default App;