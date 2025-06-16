import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import WordCard from "./WordCard";
import Search from "./Search";
import { categories } from "../util/categories";
import { articles } from "../util/articles";
import { cases } from "../util/cases";
import SortDropdown from "./SortDropdown";
import Loading from "./Loading";

const WordCollection = ({ isAdmin = false }) => {
  const [collection, setCollection] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState("all");
  const [selectedCase, setSelectedCase] = useState("all");
  const [categoryName, setCategoryName] = useState("");
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState();
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const { category } = useParams();

  const lastItemRef = useCallback(
    (node) => {
      if (isDataLoading) return;
      if (limit === null) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prev) => prev + limit);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isDataLoading, hasMore, limit]
  );

  useEffect(() => {
    if (offset === 0) return;
    fetchData();
  }, [offset]);

  useEffect(() => {
    setSearch(false);
    setSearchTerm("");
    setSelectedArticle("all");
    setSelectedCase("all");
    if (category !== undefined) {
      const selectedCategoryName = categories.map((c) => {
        if (c.slug === category) {
          return c.name;
        }
      });
      setCategoryName(selectedCategoryName);
    }
  }, [category]);

  const fetchData = async (isInitial = false) => {
    if (isInitial) {
      setIsLoading(true);
      setIsDataLoading(false);
    } else {
      setIsLoading(false);
      setIsDataLoading(true);
    }
    let url = `http://localhost:5000/api/collection?search=${searchTerm}&sortByArticle=${selectedArticle}&sortByCase=${selectedCase}&offset=${offset}`;
    if (category !== undefined) {
      url = `http://localhost:5000/api/category?category=${category}&search=${searchTerm}&sortByArticle=${selectedArticle}&sortByCase=${selectedCase}&offset=${offset}`;
    }
    const response = await fetch(url);
    const data = await response.json();

    if (isInitial) {
      setCollection(data.data);
    } else {
      setCollection((prev) => [...prev, ...data.data]);
    }

    setHasMore(data.hasMore);
    setLimit(data.limit);
    setIsLoading(false);
    setIsDataLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    setOffset(0);
    if (debouncedSearchTerm) {
      fetchData(true);
    } else {
      fetchData(true);
    }
  }, [category, selectedArticle, selectedCase, debouncedSearchTerm]);

  useEffect(() => {
    if (searchTerm.length > 0 && searchTerm.trim()) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [searchTerm]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const sortHandler = (article) => {
    if (selectedArticle == article) {
      return;
    }
    setOffset(0);
    setSearch(false);
    setSearchTerm("");
    setSelectedArticle(article);
    setCollection(collection);
  };

  const sortCaseHandler = (c) => {
    if (selectedCase == c) {
      return;
    }
    setOffset(0);
    setSearch(false);
    setSearchTerm("");
    setSelectedCase(c);
    setCollection(collection);
  };

  return (
    <section
      className={`max-w-4xl mx-auto ${
        isAdmin ? "" : "mt-50 md:mt-40"
      } min-h-screen/2  w-full px-6 ${isAdmin ? "py-0" : "md:py-10"}`}
    >
      <div
        className={`${
          !isAdmin && "sticky top-44"
        } flex flex-col md:flex-row items-end sm:flex-wrap border-b border-neutral-200 ${
          isAdmin ? "bg-neutral-100" : "bg-bground"
        } z-10 flex justify-end mb-4`}
      >
        <SortDropdown
          name="Article"
          list={articles}
          selected={selectedArticle}
          sortHandler={sortHandler}
        />
        <SortDropdown
          name="Case"
          list={cases}
          selected={selectedCase}
          sortHandler={sortCaseHandler}
        />
      </div>
      <div className="flex items-center justify-around mt-8 md:mt-2 mb-6">
        <h1
          className={`${
            isAdmin ? "mx-auto md:mx-0" : "mx-auto"
          } text-5xl font-bold font-nanum underline text-neutral-800`}
        >
          {search && <span className="font-nanum text-rose-600">Filtered</span>}{" "}
          {category ? categoryName : "Collection"}
        </h1>
        {isAdmin && (
          <Link
            to="/dashboard/add-word"
            className="hidden md:block px-6 py-2 rounded-full bg-rose-600 text-white text-2xl font-nanum font-semibold shadow-md hover:bg-rose-500 hover:text-shadow-lg hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 border-8 border-double border-bground flex justify-center items-center"
          >
            + Add Word
          </Link>
        )}
      </div>
      <Search value={searchTerm} onSearch={searchHandler} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className="space-y-3">
            {collection.map((word, i) => {
              if (i === collection.length - 1) {
                return (
                  <li ref={lastItemRef} key={i}>
                    <WordCard noun={word} isAdmin={isAdmin} />
                  </li>
                );
              }
              return (
                <li key={i}>
                  <WordCard noun={word} isAdmin={isAdmin} />
                </li>
              );
            })}
          </ul>
          {isDataLoading && <Loading />}
          {search && collection.length == 0 && (
            <span className="flex justify-center text-4xl font-bold my-10 font-nanum mx-auto text-rose-600">
              No data found
            </span>
          )}
        </>
      )}
    </section>
  );
};

export default WordCollection;
