import React, { useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import './Chatbot.css';

const SUGGESTIONS = [
  "What does Gaurav do?",
  "Tell me about his Google work",
  "What are his top skills?",
  "Has he won any awards?",
];

const Chatbot = forwardRef(function Chatbot(_, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '> System online. I\'m Gaurav\'s AI assistant. Ask me anything about his experience, skills, or projects. 🚀',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (text) => {
    const userMessage = (text || '').trim();
    if (!userMessage) return;

    setShowSuggestions(false);
    setInput('');

    setMessages(prev => {
      const newMessages = [...prev, { role: 'user', content: userMessage }];
      // Fire the API call with the new messages
      doApiCall(newMessages);
      return newMessages;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doApiCall = async (allMessages) => {
    setIsLoading(true);
    try {
      const apiMessages = allMessages
        .filter((_, i) => i > 0 || allMessages[0].role === 'user')
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: '> Connection error. The system is temporarily offline. Try again or reach out to Gaurav directly on LinkedIn.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Expose method for the vibe bar to call
  useImperativeHandle(ref, () => ({
    sendFromOutside(text) {
      setIsOpen(true);
      // Small delay so the chat window opens before the message appears
      setTimeout(() => sendMessage(text), 150);
    },
  }), [sendMessage]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'chatbot-toggle--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <span className="chatbot-toggle__icon">✕</span>
        ) : (
          <span className="chatbot-toggle__icon">⌨</span>
        )}
        {!isOpen && <span className="chatbot-toggle__pulse"></span>}
      </button>

      {/* Chat window */}
      <div className={`chatbot ${isOpen ? 'chatbot--open' : ''}`} role="dialog" aria-label="Chat with Gaurav's AI assistant">
        {/* Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-left">
            <div className="chatbot__dots">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <span className="chatbot__title">gaurav_ai_v2.exe</span>
          </div>
          <div className="chatbot__header-right">
            <span className="chatbot__status">
              <span className="chatbot__status-dot"></span>
              ONLINE
            </span>
            <button className="chatbot__close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot__messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot__msg chatbot__msg--${msg.role}`}>
              {msg.role === 'assistant' && (
                <span className="chatbot__msg-label">{'>'} sys</span>
              )}
              {msg.role === 'user' && (
                <span className="chatbot__msg-label">{'>'} you</span>
              )}
              <div className="chatbot__msg-content">{msg.content}</div>
            </div>
          ))}

          {isLoading && (
            <div className="chatbot__msg chatbot__msg--assistant">
              <span className="chatbot__msg-label">{'>'} sys</span>
              <div className="chatbot__msg-content chatbot__typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}

          {showSuggestions && messages.length <= 1 && (
            <div className="chatbot__suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="chatbot__suggestion"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot__input-area">
          <span className="chatbot__input-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            className="chatbot__input"
            placeholder="Ask about Gaurav..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            aria-label="Type your message"
          />
          <button
            className="chatbot__send"
            onClick={() => sendMessage(input)}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            RUN
          </button>
        </div>
      </div>
    </>
  );
});

export default Chatbot;
