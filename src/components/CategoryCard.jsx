import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <div className="flex min-h-44 flex-col rounded-2xl border-2 border-brand-border bg-brand-cardBg p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:bg-brand-cardHover hover:shadow-card">

            <div className="flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-surfaceSoft font-display text-base font-extrabold text-brand-iconText">
                    {category.name?.charAt(0).toUpperCase()}
                </div>

                <span className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                    Flashcards
                </span>
            </div>

            <h3 className="mt-3 font-display text-lg font-extrabold text-brand-text">
                {category.name}
            </h3>

            <p className="mt-1 text-sm leading-snug text-brand-muted">
                Click to start studying this topic.
            </p>

            <Link
                to={`/study/${category._id}`}
                className="mt-auto w-max rounded-lg bg-brand-primary px-4 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-primaryDark"
            >
                Start Learning
            </Link>

        </div>
    );
};

export default CategoryCard;