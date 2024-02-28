import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialog component specs', () => {
  // Arrange
  const mockOnAccept = jest.fn();
  const mockOnClose = jest.fn();
  const defaultComponentProps = {
    isOpen: true,
    onAccept: mockOnAccept,
    onClose: mockOnClose,
    title: 'Test Title',
    labels: { closeButton: 'Close', acceptButton: 'Accept' },
    children: 'Test Content inside the ConfirmationDialogComponent',
  };

  // Reset mock methods called times
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct title, content and buttons', () => {
    // Act
    render(<ConfirmationDialogComponent {...defaultComponentProps} />);

    screen.debug();

    // Assert
    const dialogElement = screen.getByRole('dialog');
    const titleElement = within(dialogElement).getByRole('heading', {
      name: /Test Title/i,
    });
    const contentElement = within(dialogElement).getByText(
      'Test Content inside the ConfirmationDialogComponent'
    );
    const acceptButton = within(dialogElement).getByRole('button', {
      name: /Accept/i,
    });
    const closeButton = within(dialogElement).getByRole('button', {
      name: /Close/i,
    });

    expect(dialogElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onAccept and onClose when accept button is clicked', () => {
    // Act
    render(<ConfirmationDialogComponent {...defaultComponentProps} />);

    // Assert
    const dialogElement = screen.getByRole('dialog');
    const acceptButton = within(dialogElement).getByRole('button', {
      name: /Accept/i,
    });

    fireEvent.click(acceptButton);
    expect(mockOnAccept).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close button is clicked', () => {
    // Act
    render(<ConfirmationDialogComponent {...defaultComponentProps} />);

    // Assert
    const dialogElement = screen.getByRole('dialog');
    const closeButton = within(dialogElement).getByRole('button', {
      name: /Close/i,
    });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
