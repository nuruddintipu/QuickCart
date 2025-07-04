import {useState} from "react";
import orderService from "../services/orderService.jsx";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {clearCart} from "../features/cartSlice.jsx";

const initialFormState = {
    name: "",
    email: "",
    address: ""
};

const useCheckout = (handleClose) => {
    const dispatch = useDispatch();
    const[formState, setFormState] = useState( initialFormState );
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            await orderService.placeOrder();
            toast.success("Order successfully placed");
            dispatch(clearCart());
            setFormState(initialFormState);
            handleClose();
        } catch (error) {
            toast.error("Order failed. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return { formState, loading, handleChange, handleSubmit };
};

export default useCheckout;