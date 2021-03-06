drawCircularPoints(n, r=1, start=[-r, 0]) {
	const angle = this.pi().times(2).div(n)
	let buffer = {}
	buffer[start[0]] = start[1]
	let angleState = this.atan2(...start.reverse()) + angle.toNumber()
	for (var i = 0; i < n - 1; i++) {
		const x = new BigNumber(r).times(this.cos(angleState)).toString()
		const y = new BigNumber(r).times(this.sin(angleState)).toNumber()
		buffer[x] = y
		angleState += angle.toNumber()
	}
	return buffer
}
