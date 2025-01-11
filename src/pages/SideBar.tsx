
import { MessageCircle, Info, HelpCircle, Users, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "faq", label: "FAQ", icon: Info },
    { id: "tips", label: "Tips on Better Questions", icon: HelpCircle },
    { id: "mentors", label: "Mentors", icon: Users },
    { id: "qom", label: "Question of the Month", icon: Trophy },
  ];

  return (
    <div className="w-1/5 min-w-[200px] bg-sidebar border-r border-border">
      <nav className="p-4 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
              activeTab === tab.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
            )}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}