import { useEffect, useRef, useState } from "react";
import { Form, Link, useLocation, useParams } from "react-router-dom";
import { categories } from "../../util/categories";

const WordForm = (isEditing = false) => {
  const [selectCase, setSelectCase] = useState("Nominativ");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [isEdit, setIsEdit] = useState(isEditing);
  const [editingWord, setEditingWord] = useState({});
  const [articleName, setArticleName] = useState("");
  const [articleByCaseName, setArticleByCaseName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const { pathname } = useLocation();
  const params = useParams();
  const articleRef = useRef();
  const wordRef = useRef();
  const caseRef = useRef();
  const articleByCaseRef = useRef();
  const wordByCaseRef = useRef();
  const categoryRef = useRef();
  const pluralRef = useRef();
  const meaningRef = useRef();
  const exampleRef = useRef();
  const example_enRef = useRef();

  const articleChangeHandler = (e) => {
    setArticleName(e.target.value);
  };

  const caseChangeHandler = (e) => {
    setSelectCase(e.target.value);
  };

  const articleByCaseChangeHandler = (e) => {
    setArticleByCaseName(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    const selectedCategoryName = e.target.options[e.target.selectedIndex].text;
    setCategoryName(selectedCategoryName);
  };

  const fetchData = async () => {
    const wordId = params.id;

    const response = await fetch(
      `http://localhost:5000/api/get-word?id=${wordId}`
    );
    const data = await response.json();
    setEditingWord(data);
    setArticleName(data.article);
    setSelectCase(data.case_name);
    setArticleByCaseName(data.articleByCase);
    setCategoryName(data.category.slug);
  };

  useEffect(() => {
    if (pathname.includes("edit-word")) {
      setIsEdit(true);
      fetchData();
    } else {
      setIsEdit(false);
    }
  }, []);

  const regex = /^[a-zA-ZäöüßÄÖÜ ]+$/;

  const submitHandler = async (e) => {
    e.preventDefault();

    const article = articleRef.current.value;
    const word = wordRef.current.value;
    const case_name = caseRef.current.value;
    const articleByCase = articleByCaseRef.current.value;
    const wordByCase = wordByCaseRef.current.value;
    const category = categoryRef.current.value;
    const plural = pluralRef.current?.value;
    const meaning = meaningRef.current.value;
    const example = exampleRef.current?.value;
    const example_en = example_enRef.current?.value;

    if (word === "" || word.includes(" ")) {
      setError(true);
      setMessage("Please enter a valid word!");
      return;
    }

    if (meaning === "") {
      setError(true);
      setMessage("Please enter a valid meaning!");
      return;
    }

    if (!regex.test(word)) {
      setError(true);
      setMessage("Numbers and special characters are not allowed!");
      return;
    }

    if (case_name != "Nominativ") {
      if (wordByCase === "" || wordByCase.includes(" ")) {
        setError(true);
        setMessage("Please enter a valid word according to case!");
        return;
      }
      if (!regex.test(wordByCase)) {
        setError(true);
        setMessage("Numbers and special characters are not allowed!");
        return;
      }
    }

    setError(false);
    setMessage("");

    let data;
    if (isEdit) {
      data = {
        id: editingWord.id,
        article,
        word: word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        case_name,
        articleByCase,
        wordByCase:
          wordByCase.charAt(0).toUpperCase() +
          wordByCase.slice(1).toLowerCase(),
        category: { name: categoryName, slug: category },
        plural:
          plural.trim().length > 0
            ? plural.charAt(0).toUpperCase() + plural.slice(1).toLowerCase()
            : "",
        meaning,
        example,
        example_en,
      };
    } else {
      data = {
        id: `${word}-${case_name}`,
        article,
        word: word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        case_name,
        articleByCase: case_name == "Nominativ" ? article : articleByCase,
        wordByCase:
          wordByCase.charAt(0).toUpperCase() +
          wordByCase.slice(1).toLowerCase(),
        category: { name: categoryName, slug: category },
        plural:
          plural.trim().length > 0
            ? plural.charAt(0).toUpperCase() + plural.slice(1).toLowerCase()
            : "",
        meaning,
        example,
        example_en,
      };
    }

    const response = await fetch("http://localhost:5000/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    setMessage(responseData);

    if (responseData == null) {
      wordRef.current.value = "";
      pluralRef.current.value = "";
      meaningRef.current.value = "";
      wordByCaseRef.current.value = "";
      exampleRef.current.value = "";
      example_enRef.current.value = "";
      setMessage("Successfull!");
    }
  };
  return (
    <>
      <Form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center mt-0"
      >
        <h1 className="flex justify-center font-nanum font-bold text-3xl mb-2">
          {isEdit ? "Edit" : "Add"} Word
        </h1>
        {error && (
          <p className="flex justify-center text-rose-600 font-semibold bg-rose-100 rounded-lg p-2 my-2">
            {message}
          </p>
        )}
        {!error && message != null && (
          <p className="flex justify-center text-rose-600 font-semibold bg-rose-100 rounded-lg p-2 my-2">
            {message}
          </p>
        )}
        <div className="space-y-12 w-100">
          <div className="border-b border-neutral-900/10 pb-6">
            <div className="flex space-x-6 mb-2">
              <div className="flex-1 sm:col-span-3">
                <label
                  htmlFor="article"
                  className="block text-sm/6 font-medium text-neutral-900"
                >
                  Article <em className="text-neutral-400">(Nominativ)</em>
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="article"
                    name="article"
                    value={articleName}
                    onChange={articleChangeHandler}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                    ref={articleRef}
                  >
                    <option value="der">der</option>
                    <option value="die">die</option>
                    <option value="das">das</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 sm:col-span-4">
                <label
                  htmlFor="word"
                  className="block text-sm/6 font-medium text-neutral-900"
                >
                  Word
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-neutral-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                    <input
                      id="word"
                      name="word"
                      type="text"
                      defaultValue={isEdit ? editingWord.word : ""}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none sm:text-sm/6"
                      ref={wordRef}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3 mb-2">
              <label
                htmlFor="case"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Case
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="case"
                  name="case"
                  autoComplete="case"
                  onChange={caseChangeHandler}
                  value={selectCase}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                  ref={caseRef}
                >
                  <option value="Nominativ">Nominativ</option>
                  <option value="Akkusativ">Akkusativ</option>
                  <option value="Dativ">Dativ</option>
                  <option value="Genitiv">Genitiv</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`space-x-6 mb-2 ${
                selectCase == "Nominativ" ? "hidden" : "flex"
              }`}
            >
              <div className="flex-1 sm:col-span-3">
                <label
                  htmlFor="article"
                  className="block text-sm/6 font-medium text-neutral-900"
                >
                  Article by Case
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="articleByCase"
                    name="articleByCase"
                    value={articleByCaseName}
                    onChange={articleByCaseChangeHandler}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                    ref={articleByCaseRef}
                  >
                    <option value="der">der</option>
                    <option value="die">die</option>
                    <option value="das">das</option>
                    <option value="den">den</option>
                    <option value="dem">dem</option>
                    <option value="des">des</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 sm:col-span-4">
                <label
                  htmlFor="word"
                  className="block text-sm/6 font-medium text-neutral-900"
                >
                  Word by Case
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-neutral-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                    <input
                      id="wordByCase"
                      name="wordByCase"
                      type="text"
                      defaultValue={isEdit ? editingWord.wordByCase : ""}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none sm:text-sm/6"
                      ref={wordByCaseRef}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3 mb-2">
              <label
                htmlFor="category"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Category
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="category"
                  name="category"
                  {...(isEdit ? { value: categoryName } : { defaultValue: "" })}
                  onChange={categoryChangeHandler}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                  ref={categoryRef}
                >
                  {categories.map((category) => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="sm:col-span-4 mb-2">
              <label
                htmlFor="plural"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Plural
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-neutral-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                  <input
                    id="plural"
                    name="plural"
                    type="text"
                    defaultValue={isEdit ? editingWord.plural : ""}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none sm:text-sm/6"
                    ref={pluralRef}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mb-2">
              <label
                htmlFor="meaning"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Meaning
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-neutral-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                  <input
                    id="meaning"
                    name="meaning"
                    type="text"
                    defaultValue={isEdit ? editingWord.meaning : ""}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none sm:text-sm/6"
                    ref={meaningRef}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full mb-2">
              <label
                htmlFor="example"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Example
              </label>
              <div className="mt-2">
                <textarea
                  id="example"
                  name="example"
                  rows={2}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                  defaultValue={isEdit ? editingWord.example : ""}
                  ref={exampleRef}
                />
              </div>
            </div>
            <div className="col-span-full mb-2">
              <label
                htmlFor="example_en"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                Translated Example
              </label>
              <div className="mt-2">
                <textarea
                  id="example_en"
                  name="example_en"
                  rows={2}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                  defaultValue={isEdit ? editingWord.example_en : ""}
                  ref={example_enRef}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end w-full gap-x-6">
          <Link
            to="/dashboard/add-word"
            className="text-sm/6 font-semibold text-neutral-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="block px-8 py-2 rounded-full bg-rose-600 text-white text-2xl font-nanum font-semibold shadow-md hover:bg-rose-500 hover:text-shadow-lg hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200 border-8 border-double border-bground flex justify-center items-center cursor-pointer"
          >
            Save
          </button>
        </div>
      </Form>
    </>
  );
};

export default WordForm;
