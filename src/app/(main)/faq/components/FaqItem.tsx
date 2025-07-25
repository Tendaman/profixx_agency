// components/FAQItem.tsx
import React from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b pb-4">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className="text-2xl text-gray-500 cursor-pointer">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p
          id={`faq-answer-${question}`}
          className="mt-3 text-gray-700 transition-all duration-300"
        >
          {answer}
        </p>
      )}
    </div>
  );
}
