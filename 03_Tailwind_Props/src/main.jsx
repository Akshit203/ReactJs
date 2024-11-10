import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Demo from './Components/Demo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className='flex'/ >

    <div className='flex flex-row flex-wrap'>
      
    <Demo name1 = "Jacket" price = "$24" avl = "In stock" img1 = "/Jacket.jpg"/>
    <Demo name1 = "T-Shirts" price = "$4" avl = "Out of stock" img1 = "/T-shirts.jpg"/>
    <Demo name1 = "Jeans" price = "$12" avl = "In stock" img1 = "/Jeans1.jpeg"/>
    <Demo name1 = "T-Shirts" price = "$4" avl = "Out of stock" img1 = "/T-shirts.jpg"/>
    <Demo name1 = "Jacket" price = "$24" avl = "In stock" img1 = "/Jacket.jpg"/>

    </div>

  </React.StrictMode>,
)
