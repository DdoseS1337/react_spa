import { useParams } from "react-router-dom";
import { getFilteredCategories } from "../api";
import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";
import { useNavigate } from "react-router-dom";
function Category() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
