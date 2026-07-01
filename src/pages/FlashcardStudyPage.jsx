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

    const handleFinish = () => {
        navigate("/");
    };

    if (loading)
        return <div className="loader">Loading flashcards...</div>;

    if (flashcards.length === 0)
        return (
            <div className="page-container">
                <h2>No flashcards found for this category.</h2>
                <button className="btn" onClick={() => navigate("/")}>
                    Back to Categories
                </button>
            </div>
        );

    const isLastCard = currentIndex === flashcards.length - 1;

    return (
        <div className="page-container study-page">

            {/* HEADER */}
            <div className="study-header">
                <button className="btn secondary" onClick={() => navigate("/")}>
                    ← Back
                </button>

                <div className="progress">
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
            <div className="controls">

                {!isLastCard ? (
                    <button
                        className="btn primary"
                        disabled={!isFlipped}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className="btn primary"
                        disabled={!isFlipped}
                        onClick={handleFinish}
                    >
                        Finish
                    </button>
                )}

            </div>

            <p className="hint">
                Click the card to reveal the answer before moving.
            </p>

        </div>
    );
};

export default FlashcardStudyPage;