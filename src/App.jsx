import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const App = () => {
  const menu = [
    {
      title: "Bread Basket",
      description: "Assortment of fresh baked fruit breads and muffins 5.50",
    },
    {
      title: "Honey Almond Granola with Fruits",
      description:
        "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
    },
    {
      title: "Belgian Waffle",
      description: "Vanilla flavored batter with malted flour 7.50",
    },
    {
      title: "Scrambled eggs",
      description:
        "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
    },
    {
      title: "Blueberry Pancakes",
      description: "With syrup, butter and lots of berries 8.50",
    },
  ];

  const initialData = {
    name: "",
    people: "",
    date: new Date().toISOString().slice(0, -8),
    message: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleFormData = ({ field, value }) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <header className="py-2 px-5 flex justify-between items-center shadow-lg text-sm fixed top-0 w-full bg-white z-20">
        <Link smooth to={"/#home"} className="link">
          Gourmet au Catering
        </Link>
        <nav className="hidden md:block">
          <Link smooth to={"/#about"} className="link">
            About
          </Link>
          <Link smooth to={"/#menu"} className="link">
            Menu
          </Link>
          <Link smooth to={"/#contact"} className="link">
            Contact
          </Link>
        </nav>
      </header>
      <main>
        <section id="home">
          <div className="max-w-[1600px] mx-auto">
            <div className="relative">
              <img
                src="https://www.w3schools.com/w3images/hamburger.jpg"
                alt="food"
                className="w-full bg-cover"
              />
              <h1 className="tracking-maximum text-4xl absolute bottom-0 py-8 px-6 text-gray-500">
                Le Catering
              </h1>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row py-20 border-b">
            <div className="w-full px-8 relative white-layover">
              <img
                src="https://www.w3schools.com/w3images/tablesetting2.jpg"
                alt="food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:max-w-[50%] px-8 text-center py-4">
              <h2 className="tracking-maximum text-4xl pb-8">About Catering</h2>
              <h4 className="py-4 tracking-maximum">Tradition since 1889</h4>
              <p className="text-lg text-left mb-4">
                The Catering was founded in blabla by Mr. Smith in lorem ipsum
                dolor sit amet, consectetur adipiscing elit consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute iruredolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.We only use
                seasonal ingredients.
              </p>
              <p className="text-lg text-left relative white-layover">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod temporincididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </section>
        <section id="menu">
          <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row py-20 border-b">
            <div className="md:w-1/2 w-full px-8 text-center py-4">
              <h2 className="tracking-maximum text-4xl pb-16">Our Menu</h2>
              {menu.map((item, index) => {
                return (
                  <div className="text-left mb-16" key={index}>
                    <h3 className="tracking-maximum text-xl mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="px-8 relative white-layover">
              <img
                src="https://www.w3schools.com/w3images/tablesetting.jpg"
                alt="food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="w-full max-w-[1100px] mx-auto py-20 px-8">
            <h2 className="tracking-maximum text-4xl mb-16">Contact</h2>
            <p className="text-sm mb-4">
              We offer full-service catering for any event, large or small. We
              understand your needs and we will cater the food to satisfy the
              biggerst criteria of them all, both look and taste. Do not
              hesitate to contact us.
            </p>
            <p className="text-gray-500 font-semibold mb-4">
              Catering Service, 42nd Living St, 43043 New York, NY
            </p>
            <p className="text-sm mb-4">
              You can also contact us by phone 00553123-2323 or email
              catering@catering.com, or you can send us a message here:
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="p-2 border-b mb-8 w-full placeholder:text-gray-500"
                value={formData.name}
                onChange={(e) =>
                  handleFormData({ field: "name", value: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="How many people"
                className="p-2 border-b mb-8 w-full placeholder:text-gray-500"
                value={formData.people}
                onChange={(e) =>
                  handleFormData({ field: "people", value: e.target.value })
                }
              />
              <input
                type="datetime-local"
                placeholder="Name"
                className="p-2 border-b mb-8 w-full placeholder:text-gray-500"
                value={formData.date}
                onChange={(e) =>
                  handleFormData({ field: "date", value: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Message \ Special requirements"
                className="p-2 border-b mb-8 w-full placeholder:text-gray-500"
                value={formData.message}
                onChange={(e) =>
                  handleFormData({ field: "message", value: e.target.value })
                }
              />
              <button className="uppercase bg-gray-100 py-2 px-4 hover:bg-gray-300">
                send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="text-center py-12 bg-gray-100">
        <p>
          Powered by{" "}
          <a
            href={"https://www.w3schools.com/w3css/default.asp"}
            target="_blank"
            className="underline"
          >
            w3.css
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
