import { Trophy } from "lucide-react";

const topQuestions = [
  {
    id: 1,
    question: "How to implement authentication in a React application?",
    likes: 45,
    askedBy: "student123",
    answeredBy: "Dr. Sarah Chen",
  },
  {
    id: 2,
    question: "Best practices for scaling microservices?",
    likes: 38,
    askedBy: "developer456",
    answeredBy: "Prof. James Wilson",
  },
  {
    id: 3,
    question: "Understanding async/await in JavaScript",
    likes: 32,
    askedBy: "coder789",
    answeredBy: "Lisa Rodriguez",
  },
];

export function Index5() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Questions of the Month</h2>
      <div className="grid gap-6">
        {topQuestions.map((q, index) => (
          <div
            key={q.id}
            className="border rounded-lg p-6 flex items-start gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Trophy
                className={`w-6 h-6 ${
                  index === 0
                    ? "text-yellow-500"
                    : index === 1
                    ? "text-gray-400"
                    : "text-orange-500"
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">{q.question}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Asked by: {q.askedBy}</span>
                <span>Answered by: {q.answeredBy}</span>
                <span>{q.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index5;