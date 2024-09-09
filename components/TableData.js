import React from "react";

export async function getStaticProps() {
  const res = await fetch("https://igcdssm.online/api/contact");
  const data = await res.json();
  console.log("hello");

  return {
    props: {
      data,
    },
    revalidate: 10, // Optional: Re-generate the page every 10 seconds
  };
}

const Page = ({ data }) => <Table1 data={data} />;
