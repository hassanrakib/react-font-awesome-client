import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <form className="shadow-inner flex items-center mt-8 border-2 border-blue-950 rounded-full max-w-3xl mx-auto focus-within:ring-offset-2 focus-within:ring focus-within:ring-blue-500">
        <FontAwesomeIcon className="ml-5 mr-2 text-xl text-blue-950" icon="fa-solid fa-magnifying-glass" />
        <input className="outline-0 bg-transparent p-4 grow placeholder:text-gray-500" type="search" placeholder="Search 26,233 icons..." />
    </form>
  )
};

export default Search;
