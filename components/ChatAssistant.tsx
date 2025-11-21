import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Lumi, Alex's AI assistant. Ask me anything about his work or availability.", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getChatResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] glass-panel rounded-2xl flex flex-col shadow-2xl animate-float border border-indigo-500/30 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-indigo-900/20 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Lumi AI</h3>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-slate-800/50 text-slate-200 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tl-none border border-white/5">
                  <Loader2 size={16} className="animate-spin text-indigo-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about skills, rates..."
                className="flex-1 bg-slate-900/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-indigo-500/50 transition-all hover:scale-110 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-bounce" />}
      </button>
    </div>
  );
};
