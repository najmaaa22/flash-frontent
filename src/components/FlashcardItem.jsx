const FlashcardItem = ({ flashcard, isFlipped, onFlip }) => {
    return (
        <div
            className={`flashcard ${isFlipped ? "flashcard--flipped" : ""}`}
            onClick={onFlip}
        >
            <div className="flashcard__inner">
                <div className="flashcard__face flashcard__front">

                    <div className="flashcard__badge">QUESTION</div>

                    <h2 className="flashcard__question">
                        {flashcard.question}
                    </h2>

                    <p className="flashcard__hint">
                        Hint: Think carefully before flipping the card
                    </p>

                </div>
                <div className="flashcard__face flashcard__back">

                    <div className="flashcard__badge answer">ANSWER</div>

                    <h2 className="flashcard__answer">
                        {flashcard.answer}
                    </h2>

                </div>

            </div>
        </div>
    );
};

export default FlashcardItem;