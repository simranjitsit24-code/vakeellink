import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Paperclip, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const ChatInterface = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'ai', 
      text: "Hello! I'm your VakeelLink AI assistant. I have access to thousands of Indian legal documents, statutes, and case laws. How can I assist your research today?",
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSearch = async () => {
    if (!query.trim() || isLoading) return;
    
    const userMessage = { 
      id: Date.now(), 
      type: 'user', 
      text: query,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);
    
    // Simulate AI response for now
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        type: 'ai', 
        text: "Based on the Indian Penal Code and recent Supreme Court judgments, the matter you've described falls under Section 420 (Cheating). In 'State of Haryana v. Bhajan Lal', the court established guidelines for quashing such FIRs if the allegations don't constitute an offense. Would you like me to find specific precedents or draft a summary?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto relative">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto pb-32 pt-4 space-y-6 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex w-full gap-4",
                msg.type === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1",
                msg.type === 'ai' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
              )}>
                {msg.type === 'ai' ? <Bot size={18} /> : <User size={18} />}
              </div>
              
              <div className={cn(
                "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                msg.type === 'ai' 
                  ? "bg-card border border-border text-foreground rounded-tl-none" 
                  : "bg-primary text-primary-foreground rounded-tr-none"
              )}>
                {msg.text}
                <div className={cn(
                  "text-[10px] mt-2 opacity-50",
                  msg.type === 'user' ? "text-right" : "text-left"
                )}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Bot size={18} />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent pt-10">
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-xl focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/5 transition-all">
            <div className="flex items-center px-4 py-2 border-b border-border/50">
              <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                <Paperclip size={16} />
              </button>
              <div className="h-4 w-px bg-border mx-2" />
              <div className="flex gap-2">
                {['Legal Advice', 'Case Search', 'Statutes'].map(tag => (
                  <button key={tag} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-muted rounded hover:bg-primary/10 hover:text-primary transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-end gap-2 p-2">
              <textarea
                rows="1"
                placeholder="Ask VakeelLink anything about Indian Law..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-3 resize-none max-h-32 overflow-y-auto"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
              <div className="flex items-center gap-1 p-1">
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors">
                  <Mic size={18} />
                </button>
                <button 
                  onClick={handleSearch}
                  disabled={!query.trim() || isLoading}
                  className={cn(
                    "p-2 rounded-xl transition-all",
                    query.trim() && !isLoading 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-muted-foreground mt-3 uppercase tracking-widest font-medium">
            AI-Powered Legal Intelligence • Verified against Indian Corpus
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
