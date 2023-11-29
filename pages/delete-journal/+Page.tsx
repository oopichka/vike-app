import React from "react"
import { Button } from "~/components/ui/button"

export default Page

// import { PageProps, homeProps } f

const currentIssue = [
  {
    issueVol: "30",
    issueNo: "3",
    month: "September",
    editors: ["Ajay Bandi", "Mohammad Hossain", "Ying Jin"],
  },
]

const fakeIssues = [
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
]

function Page() {
  return (
    <>
      <div className="delete-journal">
        <h1>Welcome to delete page</h1>

        {currentIssue.map((currIssue) => (
          <div key={`${currIssue.issueVol}-${currIssue.issueNo}`}>
            <h1>
              Current Issue: Vol. {currIssue.issueVol}, No. {currIssue.issueNo},{" "}
              {currIssue.month}
            </h1>
            <Button className="switch-issue"> Switch Issues </Button>
            <hr />
          </div>
        ))}
        <h2> Your papers in this issue:</h2>
        {/* <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          type="button"
        >
          Dropdown button{" "}
          <svg
            aria-hidden="true"
            className="dropdown-button"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div id="dropdown">
          <ul aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Earnings</a>
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </div> */}
        <div className="issues">
          {fakeIssues.map((issue) => (
            <div key={issue.id} className="issue-box">
              <h3 className="title-text">{issue.title}</h3>
              <p className="author-text">Author: {issue.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
