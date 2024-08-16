"use client";
import React, { useState, useEffect } from "react";

// Define the structure of the expected data
interface User {
  userID: number;
  name: string;
}

interface Document {
  id: number;
  userID: number;
  title: string;
  brief: string;
  status: string;
}

interface Data {
  user: User;
  document: Document;
}

// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setStatus("loading");
    fetch("https://your-restful-endpoint")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data: Data) => {
        setStatus("success");
        setData(data);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return {
    status,
    data,
  };
}

export default function Component() {
  const { status, data } = useFetchData();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return <p>There was an error fetching the data!</p>;
  }
  if (!data) {
    return null; // Handle case where data is null
  }

  const { user, document } = data;

  return (
    <>
      <div className="flex flex-col w-48 p-7 bg-slate-500">
        <h1 className="text-4xl">User</h1>
        <h1 className="text-4xl">{user.userID}</h1>
        <p className="text-sm">{user.name}</p>
      </div>
      <div className="flex flex-col w-48 p-7 bg-slate-500">
        <h1 className="text-4xl">Document</h1>
        <h1 className="text-4xl">{document.title}</h1>
        <p className="text-sm">{document.brief}</p>
        <p className="text-sm">{document.status}</p>
      </div>
    </>
  );
}
