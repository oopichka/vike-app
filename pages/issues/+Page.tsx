import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { usePageContext } from "~/renderer/usePageContext";
import { Issue, Paper } from "./+onBeforeRender";

function Page({
  pingData,
  currentIssue,
  fakePapers,
}: {
  pingData: any;
  currentIssue: Issue;
  fakePapers: Paper[];
}) {
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

export default Page;
