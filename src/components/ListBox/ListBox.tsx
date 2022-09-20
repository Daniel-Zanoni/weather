import { useState } from 'react';
import { ContainerStyle } from './styles';

interface repositoriesProps {
    id: string;
    name: string;
    description: string;
    owner: {
        avatar_url: string
    }
}

export function ListBox() {
    const [repositories, setRepositories] = useState<repositoriesProps[]>([]);

    fetch('https://api.github.com/users/diego3g/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));

    return (
        <ContainerStyle>
            {repositories.map(repos => {
                return (
                    <div className="box" key={repos.id}>
                        <img src={repos.owner.avatar_url} alt="Icon SVG" className="box-image" />
                        <h2>{repos.name}</h2>
                        <p>{repos.description ? `${repos.description}` : 'Repositório sem descrição'}</p>
                    </div>
                );
            })}
        </ContainerStyle>
    );
};