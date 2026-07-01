    import {useEffect,useState} from "react";

    import api from "../services/api";

   import CategoryCard from "../components/CategoryCard";



    const CategoryListPage = ()=>{


    const [categories,setCategories]=useState([]);

    const [loading,setLoading]=useState(true);

    const [error,setError]=useState("");




    useEffect(()=>{


    const loadCategories=async()=>{


    try{


    const data = await api.getCategories();


    console.log("CATEGORY DATA:",data);


    setCategories(data);



    }catch(err){


    console.log(err);

    setError("Failed to load categoriess");


    }

    finally{

    setLoading(false);

    }


    };



    loadCategories();


    },[]);





    if(loading)

    return (

    <div className="loader">

    Loading categories...

    </div>

    );



    if(error)

    return (

    <div className="error">

    {error}

    </div>

    );




    return (

    <div className="page-container">



    <div className="page-heading">


    <p className="eyebrow">

    Flashcard deckss

    </p>



    <h1>

    Select a Category

    </h1>



    <p>

    Choose one topic and study the cards one by one.

    </p>


    </div>




    <div className="categories-grid">


    {

    categories.map(category=>(


    <CategoryCard

    key={category._id}

    category={category}


    />


    ))


    }



    </div>



    </div>


    )


    }



    export default CategoryListPage;