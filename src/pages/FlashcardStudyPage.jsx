import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import FlashcardItem from "../components/FlashcardItem";

const FlashcardStudyPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCards = async () => {
            try {
                const data = await api.getFlashcardsByCategory(categoryId);
                console.log("FLASHCARD DATA:", data);
                setFlashcards(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        loadCards();
    }, [categoryId]);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => {
            if (prev < flashcards.length - 1) {
                return prev + 1;
            }
            return prev;
        });
    };

    const handlePrevious = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleFinish = () => {
        navigate("/");
    };

    if (loading)
        return (
            <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-brand-surface p-8 text-center text-brand-muted shadow-soft">
                Loading flashcards...
            </div>
        );

    if (flashcards.length === 0)
        return (
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-black/[0.03] bg-brand-surface p-10 text-center shadow-soft">
                <h2 className="font-display text-xl font-extrabold text-brand-text">
                    No flashcards found for this category.
                </h2>
                <button
                    className="mt-4 rounded-lg bg-brand-primary px-5 py-2.5 font-bold text-white transition-colors hover:bg-brand-primaryDark"
                    onClick={() => navigate("/")}
                >
                    Back to Categories
                </button>
            </div>
        );

    const isLastCard = currentIndex === flashcards.length - 1;

    return (
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border border-black/[0.03] bg-brand-surface p-6 shadow-soft sm:p-10">

            {/* HEADER */}
            <div className="flex w-full items-center justify-between">
                <button
                    className="rounded-lg bg-slate-100 px-4 py-2.5 font-bold text-brand-text transition-colors hover:bg-slate-200"
                    onClick={() => navigate("/")}
                >
                    ← Back
                </button>

                <div className="rounded-full bg-brand-surfaceSoft px-4 py-2 text-sm font-bold text-brand-iconText">
                    Card {currentIndex + 1} of {flashcards.length}
                </div>
            </div>

            {/* FLASHCARD */}
            <FlashcardItem
                flashcard={flashcards[currentIndex]}
                isFlipped={isFlipped}
                onFlip={handleFlip}
            />

            {/* CONTROLS */}
            <div className="flex w-full max-w-xs justify-center gap-3">
                <button
                    className="flex-1 rounded-lg bg-slate-100 px-4 py-3 font-bold text-brand-text transition-colors enabled:hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={currentIndex === 0}
                    onClick={handlePrevious}
                >
                    Previous
                </button>

                {!isLastCard ? (
                    <button
                        className="flex-1 rounded-lg bg-brand-primary px-4 py-3 font-bold text-white transition-colors enabled:hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={!isFlipped}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className="flex-1 rounded-lg bg-brand-primary px-4 py-3 font-bold text-white transition-colors enabled:hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={!isFlipped}
                        onClick={handleFinish}
                    >
                        Finish
                    </button>
                )}
            </div>

            <p className="text-sm text-brand-muted">
                Click the card to reveal the answer before moving.
            </p>

        </div>
    );
};

export default FlashcardStudyPage;