"use client";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavbarComponent";
import Footer from "../../components/FooterComp";
import Card from "../../components/Card";
import Search from "../../components/SearchComponent"; // Import corrected Search component
import { useState } from "react";


const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const handleSearch = (term: string) => {
    // Function to handle search term changes
    setSearchTerm(term);
    // console.log(searchTerm, "=======");
    // Implement additional logic here, like fetching filtered data based on the search term
  };

  return (
    <>
    
      <NavBar />
      <div className="flex flex-row gap-4 justify-center">
        {/* Pass the handleSearch function to Search component */}
        <Search onSearch={handleSearch} />
      </div>
      {/* Add other components */}
      <Card name={searchTerm} />
      <Footer />
    </>
  );
};

export default ProductPage;
