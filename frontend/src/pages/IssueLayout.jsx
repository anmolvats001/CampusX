import React from "react";
import { Outlet } from "react-router-dom";
import Sider from "../components/Sider";
import IssueAdder from "../components/IssueAdder";

const IssuesLayout = () => {
  return (
    <>
      <Sider />
      <Outlet />      {/* This will load home / data pages */}
      <IssueAdder />
    </>
  );
};

export default IssuesLayout;
