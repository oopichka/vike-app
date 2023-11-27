import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { usePageContext } from "~/renderer/usePageContext";
function Page() {
  return (
    <div className="issue-page">
      <h2 className="routing-link"> ISCA / Issue: Vol. #, No. #, September</h2>
      <div
        key={`${currentIssue.issueVol}-${currentIssue.issueNo}-${currentIssue.month}`}
      >
        <h1>
          Issue: Vol. {currentIssue.issueVol}, No. {currentIssue.issueNo},{" "}
          {currentIssue.month}
        </h1>
        <p className="editor-text">
          Editors: {currentIssue.editors.join(", ")}
        </p>
        <hr />
      </div>

      <div className="issues">
        {fakePapers.map((issue) => (
          <div key={issue.id} className="issue-box">
            <h3 className="title-text">{issue.title}</h3>
            <p className="author-text">Author: {issue.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Issue {
  issueVol: string;
  issueNo: string;
  month: string;
  editors: string[];
}
interface Paper {
  id: number;
  issueVol: string;
  issueNo: string;
  month: string;
  title: string;
  author: string;
  abstract: string;
  editors?: string[];
}

const currentIssue: Issue = {
  issueVol: "30",
  issueNo: "3",
  month: "September",
  editors: ["Ajay Bandi", "Mohammad Hossain", "Ying Jin"],
};

const fakePapers: Paper[] = [
  {
    id: 1,
    issueVol: "30",
    issueNo: "3",
    month: "September",
    title:
      "Object Recognition for Autonomous Vehicles from Combined Color and LiDAR Data",
    author: "Lian Kang, Pierre Payeur",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    issueVol: "30",
    issueNo: "3",
    month: "September",
    title: "Fake News Detection System using BERT and Boosting Algorithm",
    author: "Raquiba Sultana, Tetsuro Nishino",
    abstract:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    issueVol: "30",
    issueNo: "3",
    month: "September",
    title:
      "An Evaluation Framework to Ensure the Quality of the Conceptual Models of Business Processes in a Biodiesel Plant",
    author:
      "Narayan Debnath, Carlos Salgado, Mario Peralta, Daniel Riesco, Lorens Baigorria, and German Montejano",
    abstract:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    issueVol: "30",
    issueNo: "3",
    month: "September",
    title:
      "Secured Communication in Generalized Non DHT-based Pyramid Tree P2P Architecture",
    author:
      "Nick Rhimi, Indranil Roy, Ziping Liu, Bidyut Gupta, Narayan Debnath",
    abstract:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    issueVol: "30",
    issueNo: "3",
    month: "September",
    title:
      "Hybrid Remote Work Models in Project-Organized Small and Medium-Sized IT Companies",
    author: "Tomaz Kokot",
    abstract:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  //Fix so it only displays papers in current issue
  // {
  //   id: 6,
  //   issueVol: "28",
  //   issueNo: "3",
  //   month: "September",
  //   title: "Hybrid Remote Work Models in Project-Organized Small and Medium-Sized IT Companies",
  //   author: "Tomaz Kokot",
  //   abstract: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // }
  // Add more fake issues as needed
];

export default Page;
