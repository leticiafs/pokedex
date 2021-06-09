import { useEffect, useState } from "react";
import axios from "axios";




const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
      axios
      .get(url)
      .then((response) => {
          setData(response.data);
      })
      .catch((error) => {
          console.log(error);
          alert("Erro! Por favor, tente novamente");
      });
    }, [url]);

    return data;
};

export default useRequestData;