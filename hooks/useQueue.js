import { useState } from "react";

const useQueue = (initialState = []) => {
  const [queue, setQueue] = useState(initialState);

  const enqueue = (value) => {
    setQueue([...queue, value]);
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const [firstElement, ...newQueue] = queue;
      setQueue(newQueue);
      return firstElement;
    }
    return undefined;
  };

  return [queue, enqueue, dequeue];
};

export default useQueue;
