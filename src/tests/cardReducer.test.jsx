import cardReducer from '../reducers/cardReducer';

describe('cardReducer', () => {
	it('should return the initial state', () => {
		const expected = [];

		const result = cardReducer(undefined, []);

		expect(result).toEqual(expected);
	});

	it('returns the correct state', () => {
		const mockData = [
			{
				number: 2,
				president: 'John Adams',
				birth_year: 1735,
				death_year: 1826,
				took_office: '1797-03-04',
				left_office: '1801-03-04',
				party: 'Democratic'
			}
		];

		const action = {
			type: 'ALL_DATA',
			payload: {
				allData: mockData
			}
		};

		const expectedState = mockData;

		expect(cardReducer(undefined, action)).toEqual(expectedState);
	});
});
