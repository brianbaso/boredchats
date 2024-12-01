import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: string;
  category: string;
  isSelected?: boolean;
}

export default function QuestionCard({ question, category, isSelected }: QuestionCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(question);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className={cn(
        "group w-full bg-card h-full rounded-lg shadow-sm border py-3 px-4 flex flex-col justify-between relative",
        "hover:bg-muted/60 transition-colors duration-200 cursor-pointer",
        isSelected && "border-primary ring-2 ring-primary ring-opacity-50"
      )}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleCopy();
        }}
        className="absolute bottom-3 right-3 text-muted-foreground group-hover:text-foreground flex items-center gap-2"
        title="Copy to clipboard"
      >
        {isCopied ? (
          <div className="text-green-500 flex items-center gap-1">
            <Check className="h-4 w-4" />
            <span className="text-xs">Copied!</span>
          </div>
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <p className="text-card-foreground">{question}</p>
      <div className="flex">
        <span className="text-xs text-muted-foreground px-3 py-1 mt-1 rounded-full border border-muted-foreground w-fit">{category}</span>
      </div>
    </div>
  );
}