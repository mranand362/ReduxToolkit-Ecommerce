import Hero from "../common/Hero";
import Product from "../common/Product";

const Home = () => {
  return (
    <main className="w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="w-full">
        <Hero />
      </section>

      {/* PRODUCT SECTION */}
      <section className="w-full -mt-2 sm:-mt-4 md:-mt-6">
        <Product />
      </section>

    </main>
  );
};

export default Home;