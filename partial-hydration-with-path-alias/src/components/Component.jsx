import { useState } from "react"

// Success
const Component = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
    </>
  )
}

export default Component

// Fail v2.6.1時点ではnamed exportしたものを?phで呼び出せないため
// export const Component = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
//     </>
//   )
// }
