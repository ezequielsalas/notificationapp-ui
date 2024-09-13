import React, { useState } from 'react';

const MessageForm = ({ onSend }) => {
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        onSend({ category, body });
        setCategory('');
        setBody('');
    };

    const handleClear = () => {
        setCategory('');
        setBody('');
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Send Message</h5>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        value={category}
                        placeholder='e.g. Sports, Finance, Movies'
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-primary me-2" onClick={handleSend}>Send</button>
                <button className="btn btn-secondary" onClick={handleClear}>Clear</button>
            </div>
        </div>
    );
};

export default MessageForm;