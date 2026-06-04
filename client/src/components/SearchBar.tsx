import {
  useState,
  useEffect,
} from "react";

import {
  getGitHubSuggestions,
} from "../api/githubApi";

interface SearchBarProps {
  onSearch: (
    username: string
  ) => void;

  loading: boolean;
}

function SearchBar({
  onSearch,
  loading,
}: SearchBarProps) {

  const [username, setUsername] =
    useState("");

  const [
    suggestions,
    setSuggestions,
  ] = useState<string[]>([]);

  useEffect(() => {

    if (
      username.trim().length < 3
    ) {

      setSuggestions([]);

      return;

    }

    const timer =
      setTimeout(
        async () => {

          try {

            const data =
              await getGitHubSuggestions(
                username
              );

            setSuggestions(
              data
            );

          } catch {

            setSuggestions([]);

          }

        },
        500
      );

    return () =>
      clearTimeout(timer);

  }, [username]);

  const handleSubmit = (
    value?: string
  ) => {

    const searchValue =
      value || username;

    if (
      !searchValue.trim()
    ) {
      return;
    }

    onSearch(
      searchValue.trim()
    );

    setSuggestions([]);

    setUsername("");

  };

  return (

    <div className="max-w-5xl mx-auto mb-14">

      {/* Heading */}

      <div className="text-center mb-10">

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-indigo-50
            border
            border-indigo-100
            text-indigo-600
            text-sm
            font-medium
            mb-5
          "
        >
          🚀 Explore GitHub Profiles
        </div>

        <h1
          className="
            text-5xl
            md:text-6xl
            font-black
            text-slate-900
            tracking-tight
          "
        >
          Discover Developers
        </h1>

        <p
          className="
            text-slate-500
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          "
        >
          Search GitHub users and explore
          repositories, stars, languages
          and coding activity.
        </p>

      </div>

      {/* Search Box */}

      <div className="relative">

        <div
          className="
            bg-white
            rounded-[32px]
            border
            border-slate-200
            shadow-[0_20px_70px_rgba(0,0,0,0.08)]
            p-3
            flex
            flex-col
            md:flex-row
            items-center
            gap-3
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-slate-100
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            🔍
          </div>

          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            onKeyDown={(e) => {

              if (
                e.key === "Enter"
              ) {

                handleSubmit();

              }

            }}
            className="
              flex-1
              w-full
              bg-transparent
              outline-none
              text-lg
              px-2
              py-4
              placeholder:text-slate-400
            "
          />

          <button
            onClick={() =>
              handleSubmit()
            }
            disabled={loading}
            className="
              w-full
              md:w-auto
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-purple-600
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              disabled:opacity-50
              disabled:hover:scale-100
            "
          >
            {loading
              ? "Searching..."
              : "Explore"}
          </button>

        </div>

        {/* Suggestions */}

        {suggestions.length > 0 && (

          <div
            className="
              absolute
              top-full
              left-0
              right-0
              mt-4
              bg-white
              rounded-3xl
              border
              border-slate-200
              shadow-[0_25px_80px_rgba(0,0,0,0.12)]
              overflow-hidden
              z-50
            "
          >

            <div
              className="
                px-6
                py-4
                border-b
                bg-slate-50
                text-sm
                font-semibold
                text-slate-500
              "
            >
              Suggested Users
            </div>

            {suggestions.map(
              (
                suggestion
              ) => (

                <button
                  key={suggestion}
                  onClick={() =>
                    handleSubmit(
                      suggestion
                    )
                  }
                  className="
                    w-full
                    flex
                    items-center
                    gap-4
                    px-6
                    py-4
                    text-left
                    hover:bg-slate-50
                    transition-all
                    border-b
                    border-slate-100
                    last:border-b-0
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-500
                      to-purple-500
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    {suggestion
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>

                    <p
                      className="
                        font-semibold
                        text-slate-800
                      "
                    >
                      {suggestion}
                    </p>

                    <p
                      className="
                        text-sm
                        text-slate-400
                      "
                    >
                      GitHub User
                    </p>

                  </div>

                </button>

              )
            )}

          </div>

        )}

      </div>

    </div>

  );
}

export default SearchBar;