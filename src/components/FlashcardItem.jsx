const FlashcardItem = ({ flashcard, isFlipped, onFlip }) => {
    return (
        <div
            className="h-80 w-full max-w-2xl cursor-pointer [perspective:1200px] sm:h-96"
            onClick={onFlip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onFlip()}
        >
            <div
                className={`relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
            >
                {/* FRONT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-t-4 border-brand-primary bg-white p-8 text-center shadow-soft [backface-visibility:hidden] sm:p-10">
                    <span className="mb-4 rounded-full bg-brand-surfaceSoft px-3 py-1.5 text-xs font-bold tracking-widest text-brand-primary">
                        QUESTION
                    </span>

                    <h2 className="max-w-[90%] font-display text-xl font-extrabold text-brand-text sm:text-2xl">
                        {flashcard.question}
                    </h2>

                    <p className="mt-4 text-sm text-brand-muted">
                        Hint: Think carefully before flipping the card
                    </p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-t-4 border-brand-success bg-white p-8 text-center shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-10">
                    <span className="mb-4 rounded-full bg-brand-success/15 px-3 py-1.5 text-xs font-bold tracking-widest text-brand-success">
                        ANSWER
                    </span>

                    <h2 className="max-w-[90%] font-display text-xl font-extrabold text-brand-text sm:text-2xl">
                        {flashcard.answer}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default FlashcardItem;