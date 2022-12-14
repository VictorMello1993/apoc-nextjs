import React from "react";
import { GetStaticPaths, GetStaticProps } from "next"

export default function BlogPost ({date}: any){
  return <h1>{date}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {      
      date: new Date().toISOString()
    },
    // Mantendo o site cacheado por 5 segundos
    revalidate: 5,
  }
}