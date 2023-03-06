import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {
    const[home,setHome]=useState([])
    const fetData= async() => {
        const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        setHome(data.meals)
    }
    useEffect(() => {
        fetData()
    },[])
  return (
    <div className="flex flex-wrap justify-center gap-10 my-10">
        {home?.map((Dish) => (
          <Card
            key={Dish?.idMeal}
            image={Dish?.strMealThumb}
            name={Dish?.strMeal}
            id={Dish?.idMeal}
          />
        ))}
      </div>
  )
}

export default Home