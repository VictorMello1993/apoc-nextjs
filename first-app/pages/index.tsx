import { GetServerSideProps, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

export default function Home({repositories, date}: any) {
  

  
  // Execução CSR (Client Side Rendering)
  // O conteúdo HTML é carregado somente após o usuário ter acessado o site para depois ir para o backend buscar os dados com fetch
  // const [repositories, setRepositories] = useState<string[]>(([]));
  // useEffect(() => {
  //   fetch('https://api.github.com/users/VictorMello1993/repos')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const repositoryNames = data.map((item: any) => item.name);

  //     setRepositories(repositoryNames);
  //   })
  // })

  return (
    <>
      <h1>{date}</h1>
      <ul>
      {repositories.map((repo: any) => (
        <li key={repo}>{repo}</li>
      ))}
      </ul>
    </>
  )
}

//Execução via SSR (Server Side Rendering) com Next => Todo o conteúdo é carregado no lado do servidor (backend)
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('https://api.github.com/users/VictorMello1993/repos');

//   const data = await response.json();
//   const repositoryNames = data.map((item: any) => item.name)

//   return {
//     props: {
//       repositories: repositoryNames,
//       date: new Date().toISOString()
//     }
//   }
// }

// Execução via SSG
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/VictorMello1993/repos');

  const data = await response.json();
  const repositoryNames = data.map((item: any) => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString()
    },
    // Mantendo o site cacheado por 4 horas
    revalidate: 60 * 60 * 4,
  }
}
    
      
    