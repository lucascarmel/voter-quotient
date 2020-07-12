export const fetcher = () =>
	fetch(
		'https://api.civicengine.com/positions?lat=34.099647&lon=-117.713674&include_candidates=1&include_endorsements=1&include_office_holders=1&include_volunteer_urls=1',
		{
			headers: { 'x-api-key': ballotReadyKeyLudo },
		}
	)
		.then((res) => res.json())
		.then((txt) => console.log(txt))
