import { useState, useReducer } from "react";
import { data, people } from "../../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./reducer";
import reducer from "./action";

const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearBtn = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([])
  };
  const resetBtn = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };
  console.log(state);
  return (
    <div>
      {state?.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length === 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetBtn}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearBtn}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
