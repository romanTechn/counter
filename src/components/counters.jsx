import React, { useState } from "react";
import Counter from "./counter";

const initialState = [
  { value: 0, id: 1, name: "Ложка" },
  { value: 0, id: 2, name: "Вилка" },
  { value: 0, id: 3, name: "Тарелка" },
  { value: 0, id: 4, name: "Стартовый набор минималиста" },
  { value: 0, id: 5, name: "Ненужные вещи" },
];

const Counters = () => {
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: (counter.value += 1) }
          : counter
      )
    );
  };

  const handleDecrement = (counterId) => {
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: (counter.value += 1) }
          : counter
      )
    );
  };

  const handleReset = () =>
    setCounters(
      counters.map((c) => {
        c.value = 0;
        return c;
      })
    );

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
