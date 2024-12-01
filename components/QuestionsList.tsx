import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import QuestionCard from './QuestionCard';

interface Question {
    question: string;
    category: string;
}

interface QuestionsListProps {
    questions: Question[];
    selectedQuestionIndex: number | null;
}

export default function QuestionsList({ questions, selectedQuestionIndex }: QuestionsListProps) {
    const ITEMS_PER_PAGE = 20;
    const [displayedItems, setDisplayedItems] = useState(questions.slice(0, ITEMS_PER_PAGE));
    const [hasMore, setHasMore] = useState(questions.length > ITEMS_PER_PAGE);

    useEffect(() => {
        setDisplayedItems(questions.slice(0, ITEMS_PER_PAGE));
        setHasMore(questions.length > ITEMS_PER_PAGE);
    }, [questions]);

    const fetchMoreData = () => {
        const currentLength = displayedItems.length;
        const nextItems = questions.slice(
            currentLength,
            currentLength + ITEMS_PER_PAGE
        );

        setDisplayedItems([...displayedItems, ...nextItems]);

        if (displayedItems.length + nextItems.length >= questions.length) {
            setHasMore(false);
        }
    };

    if (selectedQuestionIndex !== null) {
        return (
            <div className="space-y-4">
                {questions.map((q, index) => (
                    <QuestionCard
                        key={index}
                        question={q.question}
                        category={q.category}
                        isSelected={selectedQuestionIndex === index}
                    />
                ))}
            </div>
        );
    }

    return (
        <InfiniteScroll
            dataLength={displayedItems.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 className="text-center py-4">Loading...</h4>}
            endMessage={
                <p className="text-center text-gray-500 py-4">
                    You've seen all the questions!
                </p>
            }
        >
            <div className="space-y-4">
                {displayedItems.map((q, index) => (
                    <QuestionCard
                        key={index}
                        question={q.question}
                        category={q.category}
                        isSelected={selectedQuestionIndex === index}
                    />
                ))}
            </div>
        </InfiniteScroll>
    );
}