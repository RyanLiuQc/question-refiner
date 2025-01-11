
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    expertise: "Machine Learning",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    expertise: "Software Architecture",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    expertise: "Web Development",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
];

export function Index4() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChatClick = (mentorName: string) => {
    navigate('/dashboard', { 
      state: { 
        activeTab: 'chat',
        mentorId: mentorName 
      }
    });
    toast({
      title: "AI Assistant",
      description: "You are now chatting with an AI assistant who will assess your question",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Our Mentors</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="border rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleChatClick(mentor.name)}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Mentor
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Index4;