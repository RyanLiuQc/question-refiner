import { useState, useRef, useEffect } from "react";
import { Message, getChatResponse } from "@/lib/utils";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { useToast } from "@/components/ui/use-toast";

const INITIAL_MESSAGE: Message = {
  role: "system",
  content: `If question seems to be asking for definition
Then answer with definition

If question seem to consist of multiple questions
Then split the questions and ask user for specific questions that wants to be asked

If the question consists of multiple parts, 
then ask a context specific question to the user for them to specify what they want to know

If question is too broad, general, or too philosophic
Then ask for specifications about the subject 

If question is objective, easily answered, non opinionated
Then reformulate the question to reword it to fit the mentor

If question is non specific for a mentor of their specific job, non job experience related
Then discard question, question should not be asked

If question is in FAQ section
Then give the answer directly from FAQ

Else user is eligible to ask this question to mentor
Let user know that their question was sent to the mentor

at the end suggest a better way to formulate the question`
};

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const newMessages = [...messages, userMessage];
      const response = await getChatResponse(newMessages);
      
      if (response) {
        const assistantMessage: Message = {
          role: "assistant",
          content: response
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response from AI. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">AI Question Gatekeeper</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.slice(1).map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <TypingIndicator />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>

      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
}