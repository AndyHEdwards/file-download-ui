import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FileDownload } from './FileDownload';

import type { File } from '../../types';

const mockFiles: File[] = [
  {
    name: 'smss.exe',
    device: 'Mario',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
  },
  {
    name: 'netsh.exe',
    device: 'Luigi',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
    status: 'available',
  },
  {
    name: 'uxtheme.dll',
    device: 'Peach',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
    status: 'available',
  },
];

describe('FileDownload', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () => render(<FileDownload files={mockFiles} />);

  describe('Initial State', () => {
    it('shows no files selected initially', () => {
      renderComponent();
      expect(screen.getByText('None Selected')).toBeInTheDocument();
    });
  });

  describe('Download Behavior', () => {
    it('shows alert when no files selected', async () => {
      renderComponent();

      // Trigger download
      await userEvent.click(screen.getByRole('button', { name: 'Download files' }));

      expect(window.alert).toHaveBeenCalledWith('No files selected for download');
    });

    it('shows selected files in alert with proper formatting', async () => {
      renderComponent();

      // Select files
      const availableRows = screen.getAllByRole('cell', { name: 'Available' });
      await userEvent.click(availableRows[0]);
      await userEvent.click(availableRows[1]);

      // Trigger download
      await userEvent.click(screen.getByRole('button', { name: 'Download files' }));

      expect(window.alert).toBeCalledWith(
        `Luigi: \\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe\r\nPeach: \\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll`
      );
    });
  });

  describe('Selection States', () => {
    it('updates selection count when selecting individual files', async () => {
      renderComponent();
      const availableRows = screen.getAllByRole('cell', { name: 'Available' });

      await userEvent.click(availableRows[0]);
      expect(screen.getByText('Selected 1')).toBeInTheDocument();

      await userEvent.click(availableRows[1]);
      expect(screen.getByText('Selected 2')).toBeInTheDocument();
    });

    it('handles select-all checkbox states correctly', async () => {
      renderComponent();
      const selectAllCheckbox = screen.getByRole('checkbox', { name: 'None Selected' }) as HTMLInputElement;
      const availableRows = screen.getAllByRole('cell', { name: 'Available' });

      // Initial state
      expect(selectAllCheckbox.indeterminate).toBe(false);

      // Partial selection
      await userEvent.click(availableRows[0]);
      expect(selectAllCheckbox.indeterminate).toBe(true);

      // Full selection
      await userEvent.click(availableRows[1]);
      expect(selectAllCheckbox.indeterminate).toBe(false);
      expect(selectAllCheckbox.checked).toBe(true);

      // Deselect all
      await userEvent.click(selectAllCheckbox);
      expect(screen.getByText('None Selected')).toBeInTheDocument();
    });
  });
});
