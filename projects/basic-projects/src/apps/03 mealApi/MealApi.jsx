import styles from "./MealApi.module.css";
import { useEffect, useReducer } from "react";
import axios from "axios"

const fetchMeals = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    return res.data.meals;
}
const MealApi = () => {
    const mealReducer = (state, action) => {
        if (action.type === 'fetching') {
            return action.payload.data
        }
        return []
    }
    const [meals, dispatch] = useReducer(mealReducer, null)

    useEffect(() => {
        fetchMeals().then((data) => dispatch({ type: 'fetching', payload: {data} }))
    }, []);
    console.log(meals);
    return (
        <main className={`${styles.container}`}>
            
        </main>
    );
}

export default MealApi;