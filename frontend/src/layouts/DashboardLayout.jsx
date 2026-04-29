import React from 'react';
import Sidebar from '../components/Sidebar';
import { Bell, Search as SearchIcon } from 'lucide-react';

const DashboardLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-medium">Dashboard</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-sm font-semibold capitalize">{activeTab}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-10 pr-4 py-1.5 bg-muted/50 border border-transparent rounded-full text-sm focus:outline-none focus:bg-background focus:border-primary/50 transition-all w-64"
              />
            </div>
            
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </button>
            
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
              <span className="text-xs font-bold text-primary">KK</span>
            </div>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
