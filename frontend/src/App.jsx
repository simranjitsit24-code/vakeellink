import React, { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import ChatInterface from './components/ChatInterface';
import LegalLibrary from './components/LegalLibrary';
import { History, Settings, Clock, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('search');

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return <ChatInterface />;
      case 'library':
        return <LegalLibrary />;
      case 'history':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center h-[60vh] text-center"
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">No Recent History</h2>
            <p className="text-muted-foreground max-w-sm">
              Your search history will appear here once you start querying the legal database.
            </p>
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="grid gap-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                      <input type="text" defaultValue="Kulwinder Kumar" className="w-full px-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <input type="email" defaultValue="kumar@vakeellink.ai" className="w-full px-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary/50" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-4 text-amber-500">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Security</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Manage your account security and password.</p>
                <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </DashboardLayout>
  );
}

export default App;
