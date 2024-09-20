import {useState} from "react";


const useKiosk = () => {

    const [cartItems, setCartItems] = useState([])

    const changeCartItem = (pid, amount) => {

        const target = cartItems.find(item =>  item.product.pid === parseInt(pid))

        if(!target) {
            return
        }
        target.qty += amount

        if(target.qty <= 0){
            const filtered = cartItems.filter(item => item.product.pid !== parseInt(pid))
            setCartItems([...filtered])
            return
        }

        setCartItems([...cartItems])

    }

    const addToCart = (product) => {

        const target = cartItems.find( item => {
            const p = item.product
            const result  = p.pid === product.pid
            return result ? p: null
        } )

        if(!target){
            console.log("undefined... add " + product)
            setCartItems([...cartItems,{product:product, qty:1}])
        }else {
            //있다면 target의 수량을 변경한다.
            target.qty += 1
            setCartItems([...cartItems])
        }

    }

    return {cartItems, changeCartItem, addToCart}
}

export default useKiosk