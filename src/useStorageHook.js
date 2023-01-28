import { useEffect, useState } from "react";

const useStorageHook = (textRef) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("list");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (data.length) {
      localStorage.setItem("list", JSON.stringify(data));
      textRef.current.value = "";
    }
  }, [data]);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, textRef.current.value];
    });
  };

  return { data, onHandleSubmit };
};

export default useStorageHook;
