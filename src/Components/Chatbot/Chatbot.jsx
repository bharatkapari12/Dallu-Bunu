import React, { useState, useRef, useEffect } from 'react';
import { FaComment } from 'react-icons/fa'; // Import an icon (you can change this)
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control chatbox visibility
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = () => {
    if (userInput.trim() === '') return;

    const userMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, userMessage]);
    setUserInput('');

    setTimeout(() => {
      const botReply = getBotReply(userMessage.text);
      setMessages([...messages, userMessage, botReply]);
    }, 500);
  };

  const getBotReply = (userMessage) => {
    // Basic reply logic (customize as needed)
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
      return { text: 'Hi there! 👋', sender: 'bot' };
    } else if (userMessage.includes('help')) {
      return {
        text: 'Sure, I can help you with that. What do you need assistance with?',
        sender: 'bot',
      };
    } else {
      return {
        text: "I'm not sure I understand. Could you please rephrase?",
        sender: 'bot',
      };
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-wrapper"> {/* Wrapper for icon and chatbox */}
      <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <FaComment size={24} /> {/* Replace with your desired icon */}
      </div>
      {isOpen && ( // Conditionally render chatbox
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h2>Chatbot</h2>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === 'user' ? 'user-message' : 'bot-message'
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleInputChange}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;