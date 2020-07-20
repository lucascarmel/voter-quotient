/* 
1. Put your dummy data here! Don't worry about sorting, the program handles that automatically
2. Text goes in single quotes, i.e. 'Governor'. Numbers do not, i.e. 47. true and false are lowercase without quotes. If you don't know what to put, just write null
3. When done, scroll to the bottom and hit "Make New Branch." Title it something short and memorable. It will appear as branch.voterforastra.org.

REFERENCE (each of these elements can be repeated infinitely)
- Positions
    - Candidates
        - Endorsements
*/

// You can import more photos here using the same syntax.
// But if you leave the photo blank, it will default to a generic avatar icon
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'
import Barry from '../Icons/barry.jpg'

export const DummyData = [
	{
		// First Position
		positionName: 'District Attorney',
		positionDescription:
			'A Distric Attorney's duties typically include reviewing police arrest reports, deciding whether to bring criminal charges against arrested people, and prosecuting criminal cases in court.',
		division: 'Location #1',
		divisionColor: 'green', // colors should always be lowercase
		voteMargin: '23,456', // vote margin should be in quotes because of the comma, i.e. '123,456'
		candidateArray: [
			// First Candidate
			{
				candidateName: 'Larry Krasner',
				candidateParty: 'Democrat',
				candidatePhoto: null, // If you don't want to use your own photo, just write null
				candidateOccupation: 'Criminal Defense Lawyer',
				candidateTenure: 
				endorsements: [
					{
						Group: 'MoveOn.Org',
						Color: 'blue',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
						{
						Group: 'Pennsylvania Democratic Party',
						Color: 'green',
						Logo: null,
						KeyEndorsement: false,
					},
				],
			},

			// Second Candidate
			{
				candidateName: 'Beth Grossman',
				candidateParty: 'Republican',
				candidatePhoto: null,
				endorsements: [
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: false,
					},
					{
						Group: 'Fraternal Order of Transit Police',
						Color: 'green',
						Logo: null,
						KeyEndorsement: false,
					},
				],
			},
		],
	},
	{
		// Second Position - You can copy and paste each element infinitely
		positionName: 'Position #2',
		positionDescription: '',
		division: 'Location #2',
		divisionColor: 'blue',
		voteMargin: '654,321',
		candidateArray: [
			{
				candidateName: '',
				candidateParty: '',
				candidatePhoto: null,
				endorsements: [
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: false,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
				],
			},
		],
	},
]
