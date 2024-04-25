"use client";

import React, { useState, useEffect } from "react";
import { useLayoutContext } from "@/context/LayoutContext";
import useChatGenAiAnsw from "@/components/ui/ChatBotGen";

interface Dialogue {
  question: string;
  answer: string;
}

const ChatBotGenPage = () => {
  const { chatAnswer, setBotAnswer } = useLayoutContext();
  const [inputValue, setInputValue] = useState<string>("");
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);

  const { answ, error } = useChatGenAiAnsw(chatAnswer);

  useEffect(() => {
    if (answ.length > 0) {
      setDialogues((prevDialogues) => [
        ...prevDialogues,
        { question: chatAnswer, answer: answ ? answ[answ.length - 1] : "Generating answer" },
      ]);
    } else {
      <p>Loading...</p>;
    }
  }, [answ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setBotAnswer(inputValue);
    setInputValue("");
  };

  return (
    <div className="text-black bg-white bg-opacity-10 p-5 rounded-20 relative h-[75vh] w-full flex flex-col justify-end gap-10 overflow-auto">
      <div className="flex flex-col max-h-[500px] overflow-y-auto gap-4 w-full">
        {dialogues.map((dialogue, index) => (
          <React.Fragment key={index}>
            <div className="flex bg-gold bg-opacity-80 flex-col rounded-lg p-4 max-w-[400px] self-end">
              <p className="text-[12px]">User</p>
              <span>{dialogue.question}</span>
            </div>
            <div className="flex bg-[#7E909A] flex-col rounded-lg p-4 max-w-[400px] self-start">
              <p className="text-[12px]">Gen AI</p>
              <span>{dialogue ? dialogue.answer : "Generating"}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center items-center w-full">
        <input
          type="text"
          className="border border-[#f1f1f1] p-4 h-9 rounded-5 w-full"
          value={inputValue}
          placeholder="Enter your question"
          onChange={handleInputChange}
        />
        <button className="bg-[#1C4E80] text-white rounded-10 p-2 ml-2" onClick={handleSubmit}>
          Ask
        </button>
      </div>
    </div>
  );
};

export default ChatBotGenPage;
