import { useState } from 'react'
import './Counter.css'

export const Counter = () => {
	const [count, setCount] = useState(0)
	const increment = () => {
		setCount((prev) => prev + 1)
	}
	const decrement = () => {
		setCount((prev) => prev - 1)
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>+++</button>
			<button onClick={decrement}>---</button>
		</div>
	)
}
