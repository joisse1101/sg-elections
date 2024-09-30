export type PoliticalParty = {
    abv: string,
    name: string
}
export type Electorate = {
    year: number,
    constituency: string,
    registered: number,
    rejected: number | null,
    spoilt: number | null,
}
export type ElectionDate = {
    year: number,
    startDate: Date,
    endDate: Date,
}
export type Candidate = {
    year: number,
    constituency: string,
    constituency_type: string | null,
    candidates: string,
    party_abv: string | null,
    votes: number | null,
    vote_percentage: number | null,
}