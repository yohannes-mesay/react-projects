import { createContext, useEffect, useState, useContext } from "react";
const CititesContext = createContext();
const BASE_URL = "http://localhost:9000";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("there is  problem in fetching the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("there is  problem in loading the data...");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CititesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CititesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CititesContext);
  if (context === undefined)
    throw new Error("CititesContext used outside of CititesProvider");
  return context;
}
export { CitiesProvider, useCities };
