import { act, renderHook } from '@testing-library/react';
import { Lookup, createEmptyLookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog hook specs', () => {
  it('should initialize with correct default values', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should reset itemToDelete on onAccept', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should set isOpen to false on onClose', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('should set isOpen to true and update itemToDelete on onOpenDialog', () => {
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: '1', name: 'Test Item' };

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should open dialog and update item, and onAccept, reset', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: '1', name: 'Test Item' };

    act(() => {
      result.current.onOpenDialog(item);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });
});
