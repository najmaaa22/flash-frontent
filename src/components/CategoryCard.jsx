import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card-ui">

            {/* TOP ROW */}
            <div className="card-top-row">

                <div className="icon-box">
                    {category.name?.charAt(0).toUpperCase()}
                </div>

                <span className="card-badge">
                    Flashcards
                </span>

            </div>

            {/* TITLE */}
            <h3 className="card-title-ui">
                {category.name}
            </h3>

            {/* SUB TEXT */}
            <p className="card-text-ui">
                Click to start studying this topic.
            </p>

            {/* BUTTON */}
            <Link
                to={`/study/${category._id}`}
                className="card-btn-ui"
            >
                Start Learning
            </Link>

        </div>
    );
};

export default CategoryCard;