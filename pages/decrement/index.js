import { useSelector, useDispatch } from "react-redux";
import { decremented } from "../../store/reducers/counter";

export default function DecrementPage() {
    const counterState = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <center>
                <h1>Decrement Page</h1>
                <h1>{counterState}</h1>
                <button onClick={() => dispatch(decremented())}>
                    Decrement
                </button>
            </center>
        </>
    );
}
