import React from 'react';
import { Search, Book, History, Settings, Scale, Bell, User } from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'search', label: 'AI Search', icon: Search },
    { id: 'library', label: 'Legal Library', icon: Book },
    { id: 'history', label: 'History', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col p-6 fixed left-0 top-0 z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Scale className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent tracking-tight">
          VakeelLink
        </span>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-primary/10 text-primary shadow-sm" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "w-5 h-5",
                activeTab === item.id ? "text-primary" : "group-hover:text-foreground"
              )} />
              <span className="font-medium">{item.label}</span>
              {activeTab === item.id && (
                <div className="ml-auto w-1 h-4 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-border">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-muted/30">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            KK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">Kulwinder Kumar</p>
            <p className="text-xs text-muted-foreground">Pro Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
