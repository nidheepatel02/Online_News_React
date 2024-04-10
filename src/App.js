import { useState } from "react"
import Header from './components/Navbar/Header'
import News from './components/Home/News'
import NewsItem from "./components/Items/NewsItem";

const App = () => {
  const [items, Categories] = useState("general");
  return (
    <>
      <div>
        <Header Categories={Categories} />
        <News items={items} />
        <NewsItem />
      </div>
    </>
  )
}
export default App