module.exports = {
	globDirectory: 'practica3/',
	globPatterns: [
		'**/*.{json,ico,jpg,css,js,html,png,txt,md,svg}'
	],
	swDest: 'practica3/public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};