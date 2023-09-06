import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "@/redux/slice/apiSearchSlice"; // Import your fetchSearchResults action

export default function SearchBox() {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    dispatch(fetchSearchResults(newQuery))
      .unwrap()
      .then((data) => {
        console.log("Data---", data);
      })
      .catch((error) => {
        console.log("search api error", error);
      });
    // Call your API to fetch search suggestions here
    // You can use axios or fetch to make the API request
    // fetch(`/api/searchSuggestions?query=${newQuery}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data =>", data);
    //     setSuggestions(data.resultData);
    //   })
    //   .catch((error) =>
    //     console.error("Error fetching suggestions resultData:", error)
    //   );
  };

  const handleSelect = (selectedSuggestion) => {
    // Navigate to the next page with the selected suggestion
    router.push(`/details/${selectedSuggestion.id}`);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {suggestions?.map((suggestion) => (
          <li key={suggestion.id} onClick={() => handleSelect(suggestion)}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
