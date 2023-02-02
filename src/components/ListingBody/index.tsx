import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";

export default function ListingBody() {
    return (
        <main>
            <section className="container">
                <FilterCard />
                <ListingCard />
            </section>
        </main>
    );
}