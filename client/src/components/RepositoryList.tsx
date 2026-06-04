import RepositoryCard from "./RepositoryCard";

import type {
  GitHubRepo,
} from "../types/github.types";

interface Props {
  repos: GitHubRepo[];
}

function RepositoryList({
  repos,
}: Props) {

  return (

    <div className="space-y-8">

      {/* Section Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Repositories
          </h2>

          <p className="text-slate-500 mt-1">
            Explore projects and source code
          </p>

        </div>

        <div
          className="
            px-4
            py-2
            rounded-full
            bg-indigo-50
            border
            border-indigo-100
            text-indigo-600
            font-semibold
          "
        >
          {repos.length} Results
        </div>

      </div>

      {/* Repository Grid */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {repos.map((repo) => (

          <div
            key={repo.id}
            className="
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >
            <RepositoryCard
              repo={repo}
            />
          </div>

        ))}

      </div>

    </div>

  );
}

export default RepositoryList;