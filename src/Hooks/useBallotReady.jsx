import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const useBallotReady = () => {
	const { data, error } = useSWR('/api/user/123', fetcher)
	if (error)
		return (
			<div>
				<span aria-label='embaressed face emoji' role='img'>
					😳
				</span>
				failed to load
			</div>
		)
	if (!data)
		return (
			<div>
				<span aria-label='confused face emoji' role='img'>
					🤔
				</span>
				loading...
			</div>
		)
	// render data
	return <div>hello {data.name}!</div>
}

export default useBallotReady
