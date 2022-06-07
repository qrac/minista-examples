import { Head } from "minista"

import DemoReactArea from "../components/demo-react-area?ph"

const PageHome = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello!</h1>
      <DemoReactArea />
    </>
  )
}

export default PageHome
