import { useState, useEffect } from 'react'

const parseHashState = () => {
	const hashValue = window.location.hash.slice(1);
	return hashValue ? JSON.parse(decodeURIComponent(hashValue)) : null;
}

export const useHashState = defaultState => {
	const state = parseHashState() || defaultState;
	const [internalState, setInternalState] = useState(state);

	useEffect(
		() => {
			const update = encodeURIComponent(JSON.stringify(internalState))
			window.location.hash = update;
		},
		[internalState]
	);

	useEffect(() => {
		setInternalState(parseHashState());
	});

	window.addEventListener('hashchange', handler)          // problem here
	return () => {
		window.removeEventListener('hashchange', handler)   // problem here
	};

	return [internalState, setInternalState];
}
