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
        <h3>since the last parliamentary election</h3>
      </div>
      <hr />
      <div className="page">
        <div style={{ textAlign: 'right' }}>
          <p className="quote">
            We are leaders. We know the consequences. You mean that ice-water man knows the consequences of his vote? They say people can think for themselves? Do you honestly believe that the chap who can't pass primary six knows the consequences of his choice when he answers a question viscerally on language, culture and religion?
          </p>
          <h2>Lee Kuan Yew, 1998</h2>
        </div>
      </div>
    </>
  )
}
export default Home
