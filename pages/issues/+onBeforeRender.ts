/* eslint-disable promise/param-names */
// https://vike.dev/onBeforeRender
import type { OnBeforeRenderAsync } from "vike/types"
import { pinFunc } from "~/server/controllers/PingController"

export interface Issue {
  issueVol: string
  issueNo: string
  month: string
  editors: string[]
}
export interface Paper {
  id: number
  issueVol: string
  issueNo: string
  month: string
  title: string
  author: string
  abstract: string
  editors?: string[]
}

const currentIssue: Issue = {
  issueVol: "30",
  issueNo: "3",
  month: "September",
  editors: ["Ajay Bandi", "Mohammad Hossain", "Ying Jin"],
}

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
]

const onBeforeRender: OnBeforeRenderAsync = async (
  pageContext
): ReturnType<OnBeforeRenderAsync> => {
  //await sleep(700); // Simulate slow network
  return {
    pageContext: {
      pageProps: {
        // We remove data we don't need because we pass `pageContext.movies` to
        // the client; we want to minimize what is sent over the network.
        pingData: pinFunc(),
        currentIssue,
        fakePapers,
      },
      // The page's <title>
      title: "Issues",
    },
  }
}

function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds))
}

export default onBeforeRender
