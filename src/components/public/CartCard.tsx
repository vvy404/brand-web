import CartItem from "./CartItem";
import { CartItemType } from "@/lib/globalts";

interface CartCardProps {
  list: CartItemType[];
  handleDeleteCartItem: (id: number) => void;
}

const CartCard: React.FC<CartCardProps> = ({
  list = [], 
  handleDeleteCartItem,
}) => {
  return (
    <div className="text-[#1b1b1b]">
      <div className="text-sm">SHOPPING BAG ITEMS</div>
      <div className="h-1 mt-1 pb-2 border-t border-solid border-gray-200"></div>
      <div>
        {
          list.map(i => {
            return (
              <div key={i.id}>
                <CartItem cartitem={i} handleDeleteCartItem={handleDeleteCartItem}></CartItem>
                <div className="h-1 mt-1 pb-2 border-t border-solid border-gray-200"></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CartCard;