
export const incrementCounter = (value: number) => {
	return {
		type: 'INCREMENT',
		state: value
	}
}

export const decrementCounter = (value: number) => {
	return {
		type: 'DECREMENT',
		state: value
	}
}
