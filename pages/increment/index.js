import { useSelector, useDispatch } from "react-redux";
import { incremented } from "../../store/reducers/counter";

export default function IncrementPage() {
    const counterState = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <center>
                <h1>Increment Page</h1>
                <h1>{counterState}</h1>
                <button onClick={() => dispatch(incremented())}>
                    Increment
                </button>
            </center>
        </>
    );
}
