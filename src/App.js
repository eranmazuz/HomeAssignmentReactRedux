import Header from "./Components/header";
import CartScreen from "./Screens/cartScreen";
import {useSelector} from "react-redux";
import OrderScreen from "./Screens/orderScreen";

function App() {
    const finishOrder = useSelector(state => state.cart.finishOrder)

    return (
    <>
      <Header/>
        { !finishOrder && <CartScreen/>}
        { finishOrder  && <OrderScreen/>}
    </>
  );
}

export default App;
