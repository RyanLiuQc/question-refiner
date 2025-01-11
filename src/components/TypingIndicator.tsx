export function TypingIndicator() {
  return (
    <div className="flex gap-1 p-2">
      <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-bounce" />
    </div>
  );
}