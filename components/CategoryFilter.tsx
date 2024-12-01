"use client";

import { cn } from "@/lib/utils";
import { FaRandom } from "react-icons/fa";


interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onRandomQuestion: () => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  onRandomQuestion,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          "h-[30px] px-4 rounded-full transition-colors",
          selectedCategory === null
            ? "bg-primary text-primary-foreground"
            : "bg-secondary hover:bg-secondary/80"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "h-[30px] px-4 rounded-full transition-colors",
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
      <button
        onClick={onRandomQuestion}
        className={cn(
          "h-[30px] px-4 rounded-full transition-colors flex items-center gap-2",
          "bg-gradient-to-r from-sky-400 to-pink-400 hover:from-sky-500 hover:to-pink-500 text-white"
        )}
      >
        <FaRandom className="h-4 w-4" />
        Random
      </button>
    </div>
  );
}