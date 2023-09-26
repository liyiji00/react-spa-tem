import Header from "~/components/Header"
import Demo from "~/components/Demo"

import "./App.scss"

export default () => {
  return (
    <>
      <Header />
      <div className="max-w-800px box-border mx-auto p4">
        <Demo />
      </div>
    </>
  )
}
