
function CartDiv({cartItems, changeCartItem}) {

    const cartItemTag = cartItems.map((item) => {
        const product = item.product;
        const qty = item.qty;

        return (
            <li key={product.pid} className='m-2 p-2 '>
                {product.pname}: {qty} :  {product.price * qty}
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => changeCartItem(product.pid, 1)}>+</button>

                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => changeCartItem(product.pid, -1)}>-</button>
            </li>
        )
    })

    return (
        <div className="bg-blue-400 w-full h-full" >
            <ul>
                {cartItemTag}
            </ul>
        </div>
    );
}

export default CartDiv;