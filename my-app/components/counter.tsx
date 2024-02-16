"use client";
import { decrement, increment, incrementAmount} from "@/app/state/counter/counterSlice";
import { RootState } from "@/app/state/store";;
import { useDispatch, useSelector } from "react-redux";

const Counter = () => { 
  const count = useSelector((state: RootState ) => state.counter.value);
  const dispatch = useDispatch();
  return (
      <div className="m-3">
          <h1 className="text-center p-3"> {count} </h1>
          <button className="btn btn-outline btn-secondary p-2 m-3" onClick={() => dispatch( incrementAmount(10) )}> Increment Amount </button>
          <button className="btn btn-outline btn-secondary p-2 m-3" onClick={() => dispatch( decrement() )}> Decrement </button>
      </div>
  );
};

export default Counter;
