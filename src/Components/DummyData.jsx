/* 
1. Put your dummy data here! Don't worry about sorting, the program handles that automatically
2. Text goes in single quotes, i.e. 'Governor'. Numbers do not, i.e. 47. true and false are lowercase without quotes. If you don't know what to put, just write null
3. When done, scroll to the bottom and hit "Make New Branch." Title it something short and memorable. It will appear as branch.voterforastra.org.

REFERENCE (each of these elements can be repeated infinitely)
- Positions
    - Candidates
        - Endorsements
*/
import EliPlay from '../Icons/eli-fun.jpg'
import EliWork from '../Icons/eli-serious.jpg'
import Barry from '../Icons/barry.jpg'

export const DummyData = [
	{
		// First Position
		positionName: 'Governor',
		positionDescription: 'Hello',
		division: 'Hello',
		divisionColor: 'green', // colors should always be lowercase
		voteMargin: '123,456',
		candidateArray: [
			// First Candidate
			{
				candidateName: 'Me',
				candidateParty: 'Democrat',
				candidatePhoto: EliPlay,
				candidateOccupation: 'Incumbent',
				candidateTenure: 23,
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

			// Second Candidate
			{
				candidateName: '',
				candidateParty: '',
				candidatePhoto: '',
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
	// {
	// 	// Second Position
	// 	positionName: '',
	// 	positionDescription: '',
	// 	division: '',
	// 	divisionColor: '',
	// 	voteMargin: '', // vote margin should be in quotes because of the comma, i.e. '123,456'
	// 	candidateArray: [
	// 		{
	// 			candidateName: '',
	// 			candidateParty: '',
	// 			candidatePhoto: '',
	// 			endorsements: [
	// 				{
	// 					Group: 'National Rifle Association',
	// 					Color: 'red',
	// 					Logo: null,
	// 					KeyEndorsement: false,
	// 				},
	// 				{
	// 					Group: 'Color of Change',
	// 					Color: 'green',
	// 					Logo: null,
	// 					KeyEndorsement: true,
	// 				},
	// 			],
	// 		},
	// 	],
	// },
]
