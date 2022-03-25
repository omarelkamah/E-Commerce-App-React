import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import LogIn from './pages/logIn/LogIn'
import ProductList from './pages/productList/ProductList'
import ProductPage from './pages/productPage/ProductPage'
import Register from './pages/register/Register'
import Toper from './components/toper/Toper'
import Navbar from './components/navbar/Navbar'
import CheckOut from './pages/checkOut/CheckOut'
import WishList from './pages/wishList/WishList'

function App () {
  const [user, setUser] = useState(false)

  const [cartItems, setCartItems] = useState([])
  const [wishList, setWishList] = useState([])

  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id)

    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onAddToWishList = product => {
    const exist = wishList.find(x => x.id === product.id)

    if (exist) {
      setWishList(
        wishList.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setWishList([...wishList, { ...product, qty: 1 }])
    }
  }

  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id)

    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0)

  return (
    <BrowserRouter>
      <Toper />
      <Navbar user={user} cartItems={cartItems} wishList={wishList} />
      <Routes>
        <Route
          path='/'
          exact
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAdd={onAdd}
              user={user}
              onAddToWishList={onAddToWishList}
            />
          }
        />
        <Route
          path='/login'
          element={<LogIn user={user} setUser={setUser} />}
        />
        <Route path='/register' element={<Register />} />

        <Route
          path='/productlist'
          element={
            <ProductList
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAdd={onAdd}
              onAddToWishList={onAddToWishList}
            />
          }
        />
        <Route
          path='/productlist/:id'
          element={
            <ProductPage
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              wishList={wishList}
              itemsPrice={itemsPrice}
            />
          }
        />
        <Route
          path='/checkout'
          element={
            <CheckOut
              cartItems={cartItems}
              itemsPrice={itemsPrice}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
        <Route
          path='/wishlist'
          element={<WishList wishList={wishList} onAdd={onAdd} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
