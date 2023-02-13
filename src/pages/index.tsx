import React from "react";

import { InferGetServerSidePropsType } from "next";
import { FilterProvider } from "../contexts/filter.context";

import { Home } from "../template/home";
import { api } from "../services/api";

export async function getServerSideProps() {
  const categories = await api.get("/pet/options");

  return {
    props: { categories: categories.data },
  };
}

type IHome = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function HomePage({ categories }: IHome) {
  return (
    <>
      <FilterProvider>
        <Home filters={categories} />
      </FilterProvider>
    </>
  );
}
