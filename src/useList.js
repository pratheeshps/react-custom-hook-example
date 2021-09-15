import { useState } from "react";

function useList(initialValue) {
  const [list, setList] = useState(initialValue);

  function add(listItem) {
    setList((prev) => [listItem, ...prev]);
  }

  function push(listItem) {
    setList((prev) => [...prev, listItem]);
  }

  function remove(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function update(id, updatedList) {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...updatedList
        };
      }
      return item;
    });
    setList(newList);
  }

  function clear() {
    setList([]);
  }

  return { list, add, push, update, remove, clear };
}

export default useList;
