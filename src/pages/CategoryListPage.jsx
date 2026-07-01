import { useEffect, useState } from "react";
import api from "../services/api";
import CategoryCard from "../components/CategoryCard";

const CategoryListPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await api.getCategories();
                console.log("CATEGORY DATA:", data);
                setCategories(data);
            } catch (err) {
                console.log(err);
                setError("Failed to load categories");
            } finally {
                setLoading(false);
            }
        };

        loadCategories();
    }, []);

    if (loading)
        return (
            <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-brand-surface p-8 text-center text-brand-muted shadow-soft">
                Loading categories...
            </div>
        );

    if (error)
        return (
            <div className="mx-auto mt-10 max-w-lg rounded-2xl bg-brand-surface p-8 text-center text-brand-danger shadow-soft">
                {error}
            </div>
        );

    return (
        <div className="mx-auto max-w-7xl rounded-2xl border border-black/[0.03] bg-brand-surface p-5 shadow-soft sm:p-6 lg:p-8">

            <div className="mb-5">
                <p className="mb-1 text-xs font-extrabold uppercase tracking-[2px] text-brand-accent">
                    Flashcard decks
                </p>

                <h1 className="font-display text-2xl font-extrabold text-brand-text sm:text-3xl">
                    Select a Category
                </h1>

                <p className="mt-1 text-sm text-brand-muted">
                    Choose one topic and study the cards one by one.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categories.map((category) => (
                    <CategoryCard key={category._id} category={category} />
                ))}
            </div>

        </div>
    )
}

export default CategoryListPage;