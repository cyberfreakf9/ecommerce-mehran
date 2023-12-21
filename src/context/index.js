'use client'
// import { createContext, useState } from 'react'
export const GlobalContext = createContext(null)
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
export const initialCheckoutFormData = {
  shippingAddress: {},
  paymentMethod: '',
  totalPrice: 0,
  isPaid: false,
  paidAt: new Date(),
  isProcessing: true,
}

const protectedRoutes = [
  'cart',
  'checkout',
  'account',
  'orders',
  'admin-view',
] /* car */

const protectedAdminRoutes = [
  '/admin-view',
  '/admin-view/add-product',
  '/admin-view/all-products',
]
export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false)
  const [pageLevelLoader, setPageLevelLoader] = useState(true)
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: '',
  })
  const [isAuthUser, setIsAuthUser] = useState(null)
  const [user, setUser] = useState(true)
  const [kset, setk] = useState()
  const [oder, setOrder] = useState({
    name: '',
    email: '',
    address: '',
    zip: '',
  })
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null)
  const [showCartModal, setShowCartModal] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [addresses, setAddresses] = useState([])
  const [addressFormData, setAddressFormData] = useState({
    fullName: '',
    city: '',
    country: '',
    postalCode: '',
    address: '',
  })
  const [checkoutFormData, setCheckoutFormData] = useState(
    initialCheckoutFormData
  )

  const [allOrdersForUser, setAllOrdersForUser] = useState([])
  const [orderDetails, setOrderDetails] = useState(null)
  const [allOrdersForAllUsers, setAllOrdersForAllUsers] = useState([])

  const router = useRouter()
  const pathName = usePathname()
  const [show, setShow] = useState(false)
  const [myCart, setMyCart] = useState({})
  const [total, setTotl] = useState(0)
  const [trendView, setTrendView] = useState(5)
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)
  const [isOrder, setisOrder] = useState(false)
  const [isPending, setisPending] = useState(false)
  const [isShip, setisShip] = useState(false)
  const [path, setPath] = useState()
  const saveCart = (newCart) => {
    localStorage.setItem('myCart', JSON.stringify(newCart))
    let subt = 0
    let keys = Object.keys(newCart)
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty
    }
    setTotl(subt)
  }
  const addToCart = (itemCode, qty, name, price) => {
    let newCart = myCart
    if (itemCode in myCart) {
      newCart[itemCode].qty = myCart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, name, price }
    }
    setMyCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setMyCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, name, price) => {
    let newCart = myCart
    if (itemCode in myCart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty
    }
    if (newCart[itemCode]['qty'] <= 0) {
      delete newCart[itemCode]
    }
    setMyCart(newCart)
    saveCart(newCart)
  }
  const removeCheck = () => {
    setMyCart({})
    localStorage.clear
  }
  const OrderFillInfo = (name, email, address, zip) => {
    // console.log(name, email, address, zip)
    oder.name = name
    oder.email = email
    oder.address = address
    oder.zip = zip
    // console.log(oder.name, oder.email, oder.address, oder.zip)
  }
  //////////////////////////////////
  useEffect(() => {
    if (Cookies.get('token') !== undefined) {
      setIsAuthUser(true)
      const userData = JSON.parse(localStorage.getItem('user')) || {}
      const getCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
      setUser(userData)
      setCartItems(getCartItems)
    } else {
      setIsAuthUser(false)
      setUser({}) //unauthenticated user
    }
  }, [Cookies])

  // useEffect(() => {
  //   if (
  //     pathName !== '/register' &&
  //     !pathName.includes('product') &&
  //     pathName !== '/' &&
  //     user &&
  //     Object.keys(user).length === 0 &&
  //     protectedRoutes.includes(pathName) > -1
  //   )
  //     router.push('/login')
  // }, [user, pathName])
  useEffect(() => {
    if (
      user !== null &&
      user &&
      Object.keys(user).length > 0 &&
      user?.role !== 'admin' &&
      protectedAdminRoutes.indexOf(pathName) > -1
    )
      router.push('/unauthorized-page')
  }, [user, pathName])
  return (
    <GlobalContext.Provider
      value={{
        show,
        setShow,
        trendView,
        setTrendView,
        myCart,
        setMyCart,
        total,
        setTotl,
        saveCart,
        addToCart,
        clearCart,
        removeFromCart,
        price,
        setPrice,
        qty,
        setQty,
        removeCheck,
        showNavModal,
        setShowNavModal,
        pageLevelLoader,
        setPageLevelLoader,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        componentLevelLoader,
        setComponentLevelLoader,
        currentUpdatedProduct,
        setCurrentUpdatedProduct,
        showCartModal,
        setShowCartModal,
        cartItems,
        setCartItems,
        addresses,
        setAddresses,
        addressFormData,
        setAddressFormData,
        checkoutFormData,
        setCheckoutFormData,
        allOrdersForUser,
        setAllOrdersForUser,
        orderDetails,
        setOrderDetails,
        allOrdersForAllUsers,
        setAllOrdersForAllUsers,
        kset,
        setk,
        OrderFillInfo,
        oder,
        setOrder,
        isOrder,
        setisOrder,
        isPending,
        setisPending,
        isShip,
        setisShip,
        path,
        setPath,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
