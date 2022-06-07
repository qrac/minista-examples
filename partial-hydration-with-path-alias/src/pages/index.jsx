// Success
import Component from "../components/Component?ph"

// Fail?
//import Component from "~/components/Component"

// Fail v2.6.1時点では?phとnamed importは組み合わせられない
// import { Component } from "../components/Component?ph"
// import { Component } from "~/components/Component?ph"

const PageHome = () => {
  return (
    <>
      <Component />
    </>
  )
}

export default PageHome
