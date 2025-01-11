import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `If question seems to be asking for definition
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

at the end suggeest a better way to formulate the question, also ask if the user wants to send the question anyway`;

export async function getOpenAIResponse(messages: Message[]): Promise<string> {
  try {
    const { data: { OPENAI_API_KEY } } = await supabase.functions.invoke('get-secret', {
      body: { secretName: 'OPENAI_API_KEY' }
    });

    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not found');
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`Failed to get response from AI: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    toast.error("Failed to get response from AI");
    console.error("OpenAI API Error:", error);
    return "I apologize, but I encountered an error. Please try again.";
  }
}
