import React from "react";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="">
      <PageTitle pageTitle="Dashboard" />
      <div className="row grid grid-cols-3 gap-5 mt-5 pr-3">
        <Card cardTitle="Total Products"/>
        <Card cardTitle="Total Users"/>
        <Card cardTitle="Total Client"/>
        <Card cardTitle="Total Projects"/>
        <Card cardTitle="Total Portfolio"/>
      </div>
    </div>
  );
}
