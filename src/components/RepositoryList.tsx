import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import { useEffect, useState } from "react";

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => {
          return <RepositoryItem repository={repo} key={repo.name} />;
        })}
      </ul>
    </section>
  );
}
