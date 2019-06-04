import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from '../containers/App/App';
import { allData } from '../actions';

describe('App', () => {
	let mockData;

	beforeEach(() => {
		mockData = [
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
	});

	describe('mapStateToProps', () => {
		it('should return an object with the president data array', () => {
			const mockState = {
				allData: mockData,
				fakeProp: 'hi'
			};

			const expected = {
				allData: mockData
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});

	describe('mapDispatchToProps', () => {
		it('calls dispatch with an addPresidentData action', () => {
			const mockDispatch = jest.fn();

			const actionToDispatch = allData(mockData);

			const mappedProps = mapDispatchToProps(mockDispatch);

			mappedProps.addPresidentData(mockData);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
