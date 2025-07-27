'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Copy, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  copyStatus?: 'idle' | 'copied';
}

interface AIChatbotProps {
  apiKey?: string;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ apiKey }) => {
  const pathname = usePathname();
  
  // Chatbot'un görüneceği sayfalar
  const allowedPages = [
    '/',
    '/ankara-ceza-avukati',
    '/ankara-is-avukati',
    '/ankara-bosanma-avukati',
    '/ankara-trafik-kazasi-avukati',
    '/ankara-icra-avukati',
    '/ankara-miras-avukati',
    '/ankara-idare-avukati'
  ];

  // Blog detay sayfaları için regex kontrolü (blog listesi sayfası hariç)
  // Blog detay sayfaları direkt /{slug} formatında, /blog/{slug} değil
  const isBlogDetailPage = /^\/[^\/]+$/.test(pathname) && 
    !allowedPages.includes(pathname) && 
    !pathname.startsWith('/blog') &&
    !pathname.startsWith('/hizmetler') &&
    !pathname.startsWith('/hakkimizda') &&
    !pathname.startsWith('/iletisim') &&
    !pathname.startsWith('/ekip') &&
    !pathname.startsWith('/admin') &&
    !pathname.startsWith('/api');

  // Sadece izin verilen sayfalarda veya blog detay sayfalarında chatbot'u göster
  const shouldShowChatbot = allowedPages.includes(pathname) || isBlogDetailPage;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Merhaba! Ben Çavuş Hukuk Bürosu\'nun yapay zeka asistanıyım. Hukuki konularda size yardımcı olabilirim. Nasıl yardımcı olabilirim?',
      isUser: false,
      timestamp: new Date(),
      copyStatus: 'idle'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      copyStatus: 'idle'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // OpenAI API çağrısı
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date(),
        copyStatus: 'idle'
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);

    } catch (error) {
      console.error('Chatbot error:', error);
      
      // Hata durumunda fallback mesaj
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin veya bizimle iletişime geçin.',
        isUser: false,
        timestamp: new Date(),
        copyStatus: 'idle'
      };

      setMessages(prev => [...prev, errorResponse]);
      setIsLoading(false);
    }
  };

  const handleCopyMessage = async (messageId: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, copyStatus: 'copied' as const }
          : msg
      ));
      
      // 2 saniye sonra copyStatus'u resetle
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, copyStatus: 'idle' as const }
            : msg
        ));
      }, 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  // Sadece izin verilen sayfalarda chatbot'u render et
  if (!shouldShowChatbot) {
    return null;
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed z-50 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full p-5 shadow-xl transition-all duration-300 transform hover:scale-110 md:bottom-20 md:right-6 bottom-20 right-4 border-2 border-white"
          aria-label="Chatbot'u aç"
        >
          <Bot size={28} />
        </button>
      )}

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end p-4 md:p-6">
          <div className="absolute inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
          
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md h-96 md:h-[500px] flex flex-col mb-20 md:mb-0">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-red-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <span className="font-semibold">Hukuki Asistan</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-red-700 rounded transition-colors"
                aria-label="Chatbot'u kapat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-sm lg:max-w-md px-4 py-2 rounded-lg relative ${
                      message.isUser
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && (
                        <Bot size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString('tr-TR', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                          {!message.isUser && (
                            <button
                              onClick={() => handleCopyMessage(message.id, message.text)}
                              className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors"
                              aria-label="Mesajı kopyala"
                            >
                              {message.copyStatus === 'copied' ? (
                                <Check size={12} className="text-green-600" />
                              ) : (
                                <Copy size={12} className="text-gray-500" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      {message.isUser && (
                        <User size={16} className="text-white mt-1 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 max-w-xs md:max-w-sm lg:max-w-md px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} className="text-red-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Mesaj gönder"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot; 