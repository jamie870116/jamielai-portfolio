import React, { useState, useRef, useEffect } from 'react';
import '../css/Chatbot.css';
import OpenAI from "openai";
import SystemPrompt from './SystemPrompt';
import { MessageCircle, X } from 'lucide-react';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    // dangerouslyAllowBrowser: true
});

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);
    const abortControllerRef = useRef(null);

    const prompt = SystemPrompt;
    const gptModel = import.meta.env.VITE_MODEL;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setMessages(prevMessages => [...prevMessages,
            { role: 'assistant', content: `Navigating to ${sectionId} section...` }
            ]);
        } else {
            setMessages(prevMessages => [...prevMessages,
            { role: 'assistant', content: `Sorry, I couldn't find the ${sectionId} section.` }
            ]);
        }
    };

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userInput = input.trim().toUpperCase();
        const navigationCommands = {
            'PROJECTS': 'projects',
            'RESUME': 'resume',
            'EDUCATION': 'education'
        };

        setMessages(prevMessages => [...prevMessages, { role: 'user', content: input }]);
        setInput('');

        if (navigationCommands[userInput]) {
            scrollToSection(navigationCommands[userInput]);
            return;
        }

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        setIsLoading(true);
        const userMessage = { role: 'user', content: input };

        try {
            abortControllerRef.current = new AbortController();

            const messageHistory = [
                { role: 'system', content: prompt },
                ...messages,
                userMessage
            ];

            const completion = await openai.chat.completions.create({
                messages: messageHistory,
                model: gptModel,
            });

            const aiResponse = completion.choices[0].message;
            setMessages(prevMessages => [...prevMessages, aiResponse]);

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Request was aborted');
                return;
            }
            console.error('Error:', error);
            setMessages(prevMessages => [...prevMessages,
            { role: 'assistant', content: 'Sorry, something went wrong. Please try again later.' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating toggle button */}
            <button
                className={`chat-toggle-button ${isOpen ? 'chat-toggle-button-open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* Chat container */}
            {isOpen && (
                <div className="chatbot-overlay">
                    <div className="chatbot-container">
                        <div className="chatbot-header">
                            <h3>Chat Assistant</h3>
                            <button
                                className="close-button"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="chat-messages">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}
                                >
                                    {message.content}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message bot-message">
                                    <div className="loading-dots">Responding...</div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} className="chat-input-form">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask something..."
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;