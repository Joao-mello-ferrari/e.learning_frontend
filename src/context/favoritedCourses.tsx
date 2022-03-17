import { createContext, useContext, useState } from 'react'

interface FavoritedCoursesContextData{
  favoriteCourses: number[];
  removeCourse: (id:number) => void;
  addCourse: (id:number) => void;
}

interface FavoritedCoursesProviderProps{
  children: React.ReactNode;
}

const FavoritedCoursesContext = createContext({} as FavoritedCoursesContextData);

export function FavoritedCoursesProvider({ children }:FavoritedCoursesProviderProps){
  const [favorites, setFavorites] = useState(()=>{
    if(typeof window !== 'undefined'){
      const favorites = localStorage.getItem('@favorites');
      const parsedFavorites = JSON.parse(favorites);
  
      if(parsedFavorites) return parsedFavorites;
      localStorage.setItem('@favorites','[]');
      return [];
    }

    return [];
  })

  function removeCourse(id: number){
    const newFavorites = favorites.filter((courseId:number)=>courseId !== id);
    setFavorites(newFavorites);
    localStorage.setItem('@favorites', JSON.stringify(newFavorites));
  }

  function addCourse(id: number){
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem('@favorites', JSON.stringify(newFavorites));
  }
  
  return(
    <FavoritedCoursesContext.Provider value={{ 
      favoriteCourses:favorites,
      removeCourse,
      addCourse
    }}>
      { children }
    </FavoritedCoursesContext.Provider>
  )
}

export function useFavorites(){
  return useContext(FavoritedCoursesContext);
}