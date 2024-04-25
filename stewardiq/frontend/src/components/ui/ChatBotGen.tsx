import OpenAI from "openai";
import { useEffect, useState } from "react";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const useChatGenAiAnsw = (chatAnswer: any) => {
  const [answ, setAnsw] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnswer = async () => {
      if (!chatAnswer || chatAnswer === "") {
        setError("Chat answer is empty or invalid");
        return;
      }

      try {
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "You are a chat assistant for StewardIQ, a company that provides data on expenses, revenues, and conducts comparisons with other data that will be added",
            },
            {
              role: "system",
              content:
                "Q: Let's get started. A:Sure, here is your active tasks: Create new POC for Terry, Update new props in Chat.tsx",
            },
            {
              role: "system",
              content:
                "Q: Let's start. A:Sure, here is your active tasks: Create new POC for Terry, Update new props in Chat.tsx",
            },
            {
              role: "system",
              content:
                "Q: What active tasks I have?. A:For now you active tasks are:  - Create new POC for Terry,  - Update new props in Chat.tsx",
            },

            {
              role: "system",
              content:
                "Q: When I need to finish 'Create new POC for Terry'?. A:Currently, the task 'Create new POC for Terry' completion time is scheduled for 2023-05-14. If there are any changes, I will definitely notify you about it!",
            },
            {
              role: "system",
              content:
                "Q: Can you add new task for me?. A:Sure, what task you wanna create, provide name, finish date and cost",
            },
            {
              role: "system",
              content: "Q: Task name: . A:Got it, for now you have tasks: ...",
            },
            { role: "user", content: chatAnswer },
          ],
          model: "gpt-3.5-turbo",
        });

        setAnsw((prevAnsw) => [...prevAnsw, completion.choices[0].message.content] as any);
        setError("");
      } catch (error) {
        console.error("Error calling OpenAI:", error);
        setError("Error fetching response from AI");
      }
    };

    fetchAnswer();
  }, [chatAnswer]);

  return { answ, error };
};

export default useChatGenAiAnsw;
