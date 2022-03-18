import React, { useEffect, useContext } from "react";
import { ConstApi } from './context/context'
import Categories from "./components/Categories";
import axios from "axios";
import Menu from './components/Menu'
import ModalPage from "./components/ModalPage";
import logo from './image/loading-food.gif';
import { FaSearch } from "react-icons/fa";
import { useSpeechContext } from "@speechly/react-client";
import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel } from "@speechly/react-ui";



function App() {
  const { menuItems, setMenuItems, selectedCategory, setSelectedCategory, filteredFoodList, setFilteredFoodList, isLoading, setIsLoading, search, setSearch, inputSearch, setInputSearch } = useContext(ConstApi)
  const { segment } = useSpeechContext()


  const getData = async () => {
    try {
      const api = await axios.get("https://mocki.io/v1/a017e031-466a-4a49-891e-85495999669c")
      setMenuItems(api.data)
      setFilteredFoodList(api.data)
    } catch (err) {
      console.log(err, "Something went wrong!")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
      setIsLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [selectedCategory])

  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];

  useEffect(() => {
    const searchFilter = filteredFoodList.filter(el => {
      if (search == "") {
        return el
      } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
        return el
      }
    })
    setInputSearch(searchFilter)
  }, [search])

  //console.log(inputSearch)


  useEffect(() => {
    if (segment) {
      segment.entities.forEach((element) => {
        if (element.type === "search") {
          setInputSearch(prev => ({ ...prev, value: element.value }))
        } else {
          setInputSearch(prev => ({ ...prev, type: element.value }))
        }
      })
    }
  }, [segment])

  return isLoading ?
    <div className="loading-page">
      <h3>Page is loading</h3>
      <img src={logo} alt='logo-food' style={{ width: '400px', height: '400px' }} />
    </div>
    :
    (
      <main>
        <header>
          <div className="basketIcon">

            <ModalPage />

          </div>

          <div className="searchDiv">
            <form onSubmit={(e) => e.preventDefault()} className="formInput">
              <FaSearch className="icon" />
              <input search={search} onChange={(e) => setSearch(e.target.value)} className="input-search" placeholder="search..." />
            </form>
          </div>


          {/*<Box>
            <PushToTalkButtonContainer>
              <PushToTalkButton />
              <ErrorPanel />
            </PushToTalkButtonContainer>
          </Box>*/}
        </header>

        <section className="menu-section">
          <div className="title">
            <h2>Our menu</h2>
          </div>

          <Categories categoryList={categoryList} setSelectedCategory={setSelectedCategory} />



          <div className="box-grid">
            {
              search.length > 1 ? (

                inputSearch.map(el =>

                  <Menu data={el} />
                )

              ) : (
                filteredFoodList.map(el =>

                  <Menu data={el} />
                )
              )
            }
          </div>
        </section>
        <>
          <PushToTalkButtonContainer>
            <PushToTalkButton />
            <ErrorPanel />
          </PushToTalkButtonContainer>
        </>
      </main>
    );
}

export default App;

