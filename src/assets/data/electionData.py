import csv

def nullIfNa(value):
    return 'null' if value == 'na' else value

with open('ElectionData.tsx', "a") as tsxFile:
    tsxFile.write('import { Candidate, ElectionDate, Electorate, PoliticalParty } from "./Types";\n\n')
    with open('List of Political Parties.csv') as csvFile:
        header = csvFile.readline()
        reader = csv.reader(csvFile)
        
        tsxFile.write('export const politicalParties: PoliticalParty[] = [\n')
        
        for row in reader:
            tsxFile.write('\t{\n')
            tsxFile.write(f'\t\tabv:"{row[0]}",\n')
            tsxFile.write(f'\t\tname:"{row[1]}"\n')
            tsxFile.write('\t},\n')
            
        tsxFile.write(']\n')
        
    with open('Parliamentary General Election - Registered Electors, Rejected Votes and Spoilt Ballots.csv') as csvFile:
        header = csvFile.readline()
        reader = csv.reader(csvFile)
        
        tsxFile.write('export const electorates: Electorate[] = [\n')
        
        for row in reader:
            tsxFile.write('\t{\n')
            tsxFile.write(f'\t\tyear: {row[0]},\n')
            tsxFile.write(f'\t\tconstituency: "{row[1]}",\n')
            tsxFile.write(f'\t\tregistered: {row[2]},\n')
            tsxFile.write(f'\t\trejected: {nullIfNa(row[3])},\n')
            tsxFile.write(f'\t\tspoilt: {nullIfNa(row[4])},\n')
            tsxFile.write('\t},\n')
            
        tsxFile.write(']\n')
    
    with open('Parliamentary General Election Dates.csv') as csvFile:
        header = csvFile.readline()
        reader = csv.reader(csvFile)
        
        tsxFile.write('export const electionDates: {[year: number]: ElectionDate} = {\n')
        
        for row in reader:
            startDate = row[1].split('/')
            endDate = row[2].split('/')
            tsxFile.write(f'\t{row[0]}: ' + '{\n')
            tsxFile.write(f'\t\tstartDate: new Date({startDate[2]}, {startDate[0]}, {startDate[1]}),\n')
            tsxFile.write(f'\t\tendDate: new Date({endDate[2]}, {endDate[0]}, {endDate[1]}),\n')
            tsxFile.write('\t},\n')
            
        tsxFile.write('}\n')
        tsxFile.write('export const electionYears = Object.keys(electionDates).map(function (year) { return parseInt(year) })\n')

    
    with open('Parliamentary General Election Results by Candidate.csv') as csvFile:
        header = csvFile.readline()
        reader = csv.reader(csvFile)
        
        year = None
        
        
        for row in sorted(reader, key=lambda row: row[0]):
            if year != row[0]:
                if year != None:
                    tsxFile.write(']\n')
                year = row[0]
                tsxFile.write(f'export const candidates{year}: Candidate[] = [\n')
                
            tsxFile.write('\t{\n')
            tsxFile.write(f'\t\tyear:{row[0]},\n')
            tsxFile.write(f'\t\tconstituency:"{row[1]}",\n')
            tsxFile.write(f'\t\tconstituency_type:"{nullIfNa(row[2])}",\n')
            tsxFile.write(f'\t\tcandidates:"{row[3]}",\n')
            tsxFile.write(f'\t\tparty_abv:"{nullIfNa(row[4])}",\n')
            tsxFile.write(f'\t\tvotes:{nullIfNa(row[5])},\n')
            tsxFile.write(f'\t\tvote_percentage:{nullIfNa(row[6])},\n')
            tsxFile.write('\t},\n')
        
        tsxFile.write(']\n')