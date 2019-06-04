import * as actions from '../actions';

describe('actions', () => {
	let mockData;

	beforeEach(() => {
		mockData = {
			number: 2,
			president: 'John Adams',
			birth_year: 1735,
			death_year: 1826,
			took_office: '1797-03-04',
			left_office: '1801-03-04',
			party: 'Democratic'
		};
	});

	it('should create an action to add president data', () => {
		const mockArray = [ mockData ];
		const expectedAction = {
			type: 'ADD_DATA',
			payload: {
				allData: mockArray
			}
		};
		expect(actions.allData(mockArray)).toEqual(expectedAction);
	});
});
