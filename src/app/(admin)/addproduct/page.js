import React from 'react'
import AddProductcomponent from './addComponent'
const page = () => {
  return (
    <main className="flex  flex-col  justify-between">
      <div className="mt-5 ">
        <AddProductcomponent />
        {/* <h1>Add Product Page</h1> */}
      </div>
    </main>
  )
}

export default page
