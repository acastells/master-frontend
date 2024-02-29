import { render, screen, within } from '@testing-library/react';
import React from 'react';
import * as ReactPromiseTracker from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';

// Spinner component is being displayed when loading data in employee, employee-list, login, project, project-list containers

// Mock "react-promise-tracker"
jest.mock('react-promise-tracker', () => ({
  __esModule: true,
  ...jest.requireActual('react-promise-tracker'),
}));

// Using queryByRole to get the Spinner Modal
describe('spinner component specs', () => {
  it('renders spinner when promise is in progress', () => {
    // Arrange
    jest
      .spyOn(ReactPromiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const modalElement = screen.queryByRole('presentation');
    const spinnerElement = within(modalElement).getByLabelText('Loading...');
    expect(modalElement).toBeInTheDocument();
    expect(spinnerElement).toBeInTheDocument();
  });

  it('does not render spinner when promise is not in progress', () => {
    // Arrange
    jest
      .spyOn(ReactPromiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);

    // Assert
    const spinnerElement = screen.queryByRole('presentation');
    expect(spinnerElement).not.toBeInTheDocument();
  });
});
