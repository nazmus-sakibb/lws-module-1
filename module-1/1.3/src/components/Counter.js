import Button from "./Button";
import Count from "./Count";

const Counter = ({ increment, decrement, id, count }) => {

    return (
        <div>
            <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <Count count={count} />
                {/* <div class="text-2xl font-semibold" id="counter">{count}</div> */}
                <div class="flex space-x-3">
                    <Button handler={() => increment(id)}>increment</Button>
                    <Button handler={() => decrement(id)}>decrement</Button>
                </div>
            </div>
        </div>
    );
};

export default Counter;