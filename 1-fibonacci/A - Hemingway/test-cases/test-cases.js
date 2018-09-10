module.exports = [
	{input: 3, expected: [ 8, 1, 1 ], message: "3 ->  8, 1, 1 "},
	{input: 2, expected: [0, 1], message: "2 -> 0, 1"},
	{input: 4, expected: [0, 1, 1, 2], message: "4 -> 0, 1, 1, 2"},
	{input: 1, expected: "the request was made but it was not good", message: "1 -> error message"},
];
