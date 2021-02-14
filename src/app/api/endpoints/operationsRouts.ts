export const operationsRouts = {
  createOperation: () => `/api/v1/operation/`,
  getOperations: () => `/api/v1/operation/`,
  updateOperation: (Id: number) => `/api/v1/operation/${Id}`,
  getOperation: (Id: number) => `/api/v1/operation/${Id}`,
  deleteOperation: (Id: number) => `/api/v1/operation/${Id}`,
};
