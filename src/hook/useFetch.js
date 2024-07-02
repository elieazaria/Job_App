import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, {});
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return (
    <View>
      <Text>useFetch</Text>
    </View>
  );
};

export default useFetch;
