import {useContext} from "react";
import {ConstApi} from "../context/context"


const Basket = () => {
  const {order, handleClose, total} = useContext(ConstApi)
  let sum = total
    .map((el) => el.price * el.count)
    .reduce((amount, item) => item + amount, 0)
    .toFixed(2);

  let tips = parseInt(sum * 0.3);
  let nums = Number(sum);
  let payment = (nums + tips).toFixed(2);

  return (
    <aside >
      <h3 className="text-order">Your Order</h3>

      {order.length === "" &&
        <div> Basket is empty</div>}
      {order.map(el =>
      (<div key={el.id}><h4><u>{el.title}</u></h4>
        <h4>{el.count * el.price}</h4>
        <h4> qty: {el.count}</h4>
      </div>

      ))}
      <h5 className="textOrder ">Total: ${sum}</h5>
      <h5 className="textOrder ">Tips: ${tips}</h5>
      <h4 className="textOrder ">Check: ${payment}</h4>

      <button className="btn-basket" onClick={handleClose}>Payment</button>
    </aside >
  )
}
export default Basket

