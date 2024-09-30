import csv

with open('ElectionData.tsx', "a") as tsxFile:
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
            tsxFile.write(f'\t\tyear:{row[0]},\n')
            tsxFile.write(f'\t\tconstituency:"{row[1]}",\n')
            tsxFile.write(f'\t\tregistered:{row[2]},\n')
            tsxFile.write(f'\t\trejected:{'null' if row[3] == 'na' else row[3]},\n')
            tsxFile.write(f'\t\tspoilt:{'null' if row[4] == 'na' else row[4]},\n')
            tsxFile.write('\t},\n')
            
        tsxFile.write(']\n')
    
    with open('Parliamentary General Election Dates.csv') as csvFile:
        header = csvFile.readline()
        reader = csv.reader(csvFile)
        
        tsxFile.write('export const electionDates: ElectionDate[] = [\n')
        
        for row in reader:
            tsxFile.write('\t{\n')
            tsxFile.write(f'\t\tyear:{row[0]},\n')
            tsxFile.write(f'\t\tstartDate: new Date({row[1]}),\n')
            tsxFile.write(f'\t\tendDate: new Date({row[2]}),\n')
            tsxFile.write('\t},\n')
            
        tsxFile.write(']\n')
    
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
            tsxFile.write(f'\t\tconstituency_type:"{'null' if row[2] == 'na' else row[2]}",\n')
            tsxFile.write(f'\t\tcandidates:"{row[3]}",\n')
            tsxFile.write(f'\t\tparty_abv:"{'null' if row[4] == 'na' else row[4]}",\n')
            tsxFile.write(f'\t\tvotes:{'null' if row[5] == 'na' else row[5]},\n')
            tsxFile.write(f'\t\tvote_percentage:{'null' if row[6] == 'na' else row[6]},\n')
            tsxFile.write('\t},\n')
        
        tsxFile.write(']\n')