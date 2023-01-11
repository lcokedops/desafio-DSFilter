import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import ListingCard from "./components/ListingCard";

export default function App() {

  return (
    <>
      <Header />
      <section className="container">
        <FilterCard />
        <ListingCard />
      </section>
    </>

  )
}
