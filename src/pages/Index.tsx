import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Info, HelpCircle, Users, Trophy } from "lucide-react";


const Index = () => {


  const navigate = useNavigate();

  const handleNavigation = (tab: string) => {
    navigate(tab, { state: { activeTab: tab } });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200">
      <div className="container mx-auto px-4">
        {/* Header with Sign In/Up */}
        <header className="py-4 flex justify-between items-center">
          <div></div>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => navigate('/sign-in')}>Sign In</Button>
            <Button onClick={() => navigate('/sign-up')}>Sign Up</Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
          <h1 
            className="text-4xl font-bold cursor-pointer hover:text-green-700 transition-colors"
            onClick={() => navigate('/')}
          >
            Gatekeeper
          </h1>
          <p className="text-xl italic text-muted-foreground">
            We help you to have better professional connections.
          </p>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            <Button onClick={() => handleNavigation('chat')} className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat
            </Button>
            <Button onClick={() => handleNavigation('faq')} className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              FAQ
            </Button>
            <Button onClick={() => handleNavigation('tips')} className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Tips
            </Button>
            <Button onClick={() => handleNavigation('mentors')} className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Mentors
            </Button>
            <Button onClick={() => handleNavigation('qom')} className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Questions of the Month
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;