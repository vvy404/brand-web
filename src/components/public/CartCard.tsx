import CartItem from "./CartItem";
import { CartItemType } from "@/lib/globalts";
const cartArray = [
    {
        id: 1,
        imgSrc: '/a.jpeg',
        title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
        price: '1000 SEK',
        madeof: 'cotton',
        size: '40',
        color: 'beige',
        quantity: 1,
        totalPrice: '1000 SEK',
    },
    {
        id: 2,
        imgSrc: '/a.jpeg',
        title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
        price: '1000 SEK',
        madeof: 'cotton',
        size: '40',
        color: 'beige',
        quantity: 1,
        totalPrice: '1000 SEK',
    },
    {
        id: 3,
        imgSrc: '/a.jpeg',
        title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
        price: '1000 SEK',
        madeof: 'cotton',
        size: '40',
        color: 'beige',
        quantity: 1,
        totalPrice: '1000 SEK',
    },
    {
        id: 4,
        imgSrc: '/a.jpeg',
        title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
        price: '1000 SEK',
        madeof: 'cotton',
        size: '40',
        color: 'beige',
        quantity: 1,
        totalPrice: '1000 SEK',
    },
    {
        id: 5,
        imgSrc: '/a.jpeg',
        title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
        price: '1000 SEK',
        madeof: 'cotton',
        size: '40',
        color: 'beige',
        quantity: 1,
        totalPrice: '1000 SEK',
    },
]

interface CartCardProps {
  list: CartItemType[]
}

const CartCard : React.FC<CartCardProps> = ({list = []}) => {
    return (
        <div className="text-[#1b1b1b]">
            <div className="text-sm">SHOPPING BAG ITEMS</div>
            <div className="h-1 mt-1 pb-2 border-t border-solid border-gray-200"></div>
            <div>
                {
                    list.map(i => {
                        return (
                            <div key={i.id}>
                                <CartItem cartitem={i}></CartItem>
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