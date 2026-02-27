import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/axios";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 GET ALL PROPERTIES
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/properties");
      setProperties(data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 GET SINGLE PROPERTY (API CALL)
  const fetchPropertyById = async (id) => {
    try {
      setLoading(true);
      const { data } = await api.get(`/properties/${id}`);
      return data.data;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        loading,
        error,
        fetchPropertyById,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);