"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import QuestionsList from "@/components/QuestionsList";
import questionsData from "@/data/questions-1201.json";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  const questions = questionsData;
  const categories = Array.from(new Set(questions.map((q) => q.category)));

  const handleRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setSelectedQuestionIndex(randomIndex);
  };

  const filteredQuestions = selectedCategory
    ? questions.filter((q) => q.category === selectedCategory)
    : questions;

  const displayedQuestions = selectedQuestionIndex !== null
    ? [questions[selectedQuestionIndex]]
    : filteredQuestions;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-[85%] md:max-w-[80%] lg:max-w-[50%] mx-auto space-y-8 py-4 sm:py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            setSelectedQuestionIndex(null);
          }}
          onRandomQuestion={handleRandomQuestion}
        />
        <QuestionsList
          questions={displayedQuestions}
          selectedQuestionIndex={selectedQuestionIndex}
        />
      </div>
    </main>
  );
}