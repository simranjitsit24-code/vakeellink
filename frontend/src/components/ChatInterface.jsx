import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Paperclip, Mic, ExternalLink, Quote, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { legalSearch } from '../services/api';

const Modal = ({ isOpen, onClose, title, content, metadata }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-card border border-border w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h3 className="text-xl font-bold text-primary">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                {metadata?.domain || 'Legal Document'} • {metadata?.year || 'N/A'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-tight text-muted-foreground">Legal Issue</h4>
              <p className="text-sm leading-relaxed">{metadata?.legal_issue || 'No specific issue listed.'}</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-tight text-muted-foreground">Acts & Sections</h4>
              <p className="text-sm leading-relaxed font-mono bg-muted/50 p-2 rounded border border-border">
                {metadata?.acts || 'N/A'} | {metadata?.sections || 'N/A'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-tight text-muted-foreground">Full Content</h4>
              <div className="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90 bg-muted/20 p-4 rounded-xl border border-border/50">
                {content}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border bg-muted/30 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Close Document
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ChatInterface = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedChunk, setSelectedChunk] = useState(null);
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

  const handleSearch = async (forcedQuery = null) => {
    const searchQuery = forcedQuery || query;
    if (!searchQuery.trim() || isLoading) return;
    
    const userMessage = { 
      id: Date.now(), 
      type: 'user', 
      text: searchQuery,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);
    
    try {
      const data = await legalSearch(searchQuery);
      
      const aiResponse = { 
        id: Date.now() + 1, 
        type: 'ai', 
        text: data.answer,
        chunks: data.chunks,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'ai',
        text: "I encountered an error while searching the legal database. Please ensure the backend server is running and try again.",
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    // Optionally trigger search immediately
    // handleSearch(tag);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto relative">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto pb-32 pt-4 space-y-6 scrollbar-hide px-2">
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
              
              <div className="max-w-[85%] space-y-2">
                <div className={cn(
                  "rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                  msg.type === 'ai' 
                    ? cn("bg-card border border-border text-foreground rounded-tl-none", msg.isError && "border-destructive/50 text-destructive") 
                    : "bg-primary text-primary-foreground rounded-tr-none"
                )}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  <div className={cn(
                    "text-[10px] mt-2 opacity-50",
                    msg.type === 'user' ? "text-right" : "text-left"
                  )}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {/* Citations/Sources */}
                {msg.chunks && msg.chunks.length > 0 && (
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1 px-2">
                      <Quote size={10} /> Legal Sources & Citations
                    </p>
                    {msg.chunks.map((chunk, idx) => (
                      <div key={idx} className="p-3 bg-muted/30 border border-border rounded-xl text-xs hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-primary truncate max-w-[200px]">
                            {chunk.metadata?.source || 'Legal Document'}
                          </span>
                          <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono">
                            Match: {(chunk.score * 100).toFixed(0)}%
                          </span>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 italic">"{chunk.text}"</p>
                        <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => setSelectedChunk(chunk)}
                            className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline"
                          >
                            View Full Text <ExternalLink size={10} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {['Legal Advice', 'Case Search', 'Statutes', 'Property', 'Criminal'].map(tag => (
                  <button 
                    key={tag} 
                    onClick={() => handleTagClick(tag)}
                    className="text-[10px] whitespace-nowrap font-semibold uppercase tracking-wider px-2 py-0.5 bg-muted rounded hover:bg-primary/10 hover:text-primary transition-colors"
                  >
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
                  onClick={() => handleSearch()}
                  disabled={!query.trim() || isLoading}
                  className={cn(
                    "p-2 rounded-xl transition-all",
                    query.trim() && !isLoading 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-muted-foreground mt-3 uppercase tracking-widest font-medium">
            AI-Powered Legal Intelligence • Verified against Indian Corpus
          </p>
        </div>
      </div>

      {/* Document Modal */}
      <Modal
        isOpen={!!selectedChunk}
        onClose={() => setSelectedChunk(null)}
        title={selectedChunk?.metadata?.source || 'Legal Document'}
        content={selectedChunk?.text}
        metadata={selectedChunk?.metadata}
      />
    </div>
  );
};

export default ChatInterface;
