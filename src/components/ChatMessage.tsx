import { cn } from "@/lib/utils";
import { Message } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  
  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-lg px-4 py-2",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
}