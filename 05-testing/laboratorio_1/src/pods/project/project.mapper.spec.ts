import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper specs', () => {
  it('map project from API to view model with valid project + no employees, result project', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'react app',
      isActive: true,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'react app',
      isActive: true,
      employees: [],
    };
    expect(result).toEqual(expectedResult);
  });

  it('map project from API to view model with null/undefined project, result new project', () => {
    // Arrange
    const projectNull = null;
    const projectUndefined = undefined;

    // Act
    const resultNull = mapProjectFromApiToVm(projectNull);
    const resultUndefined = mapProjectFromApiToVm(projectUndefined);

    // Assert
    const emptyProject: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    expect(resultNull).toEqual(emptyProject);
    expect(resultUndefined).toEqual(emptyProject);
  });

  it('map project from API to view model with valid project + multiple employees, result project', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'react app',
      isActive: true,
      externalId: 'externalID_123',
      comments: 'Comment test',
      employees: [
        { id: '1', isAssigned: false, employeeName: 'Victor' },
        { id: '2', isAssigned: true, employeeName: 'Jaime' },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'react app',
      isActive: true,
      externalId: 'externalID_123',
      comments: 'Comment test',
      employees: [
        { id: '1', isAssigned: false, employeeName: 'Victor' },
        { id: '2', isAssigned: true, employeeName: 'Jaime' },
      ],
    };
    expect(result).toEqual(expectedResult);
  });
});
