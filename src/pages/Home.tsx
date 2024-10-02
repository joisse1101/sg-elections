import { electionDates, electionYears } from "../assets/data/ElectionData"
import Counter from "../components/Counter"
import { timeDiff_ymd } from "../functions/date"

function Home() {
  const mostRecentElection = new Date(electionDates[Math.max(...electionYears)].endDate)
  const today = new Date()
  const timeDiff = timeDiff_ymd(today, mostRecentElection)

  function plural(str: string, val: number) {
    return val > 1 ? str + 's' : str
  }

  return (
    <>
      <div className="page">
        {Counter([
          {
            content: timeDiff[0],
            label: plural('Year', timeDiff[0])

          },
          {
            content: timeDiff[1],
            label: plural('Month', timeDiff[1])

          },
          {
            content: timeDiff[2],
            label: plural('Day', timeDiff[2])

          }
        ])}
        <h6>since the last parliamentary election</h6>
      </div>
    </>
  )
}
export default Home
