/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      appointments {
        items {
          id
          idCreator
          title
          location
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        appointments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      idCreator
      title
      location
      date
      createdAt
      updatedAt
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idCreator
        title
        location
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const appointmentByCreator = /* GraphQL */ `
  query AppointmentByCreator(
    $idCreator: ID
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AppointmentByCreator(
      idCreator: $idCreator
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        idCreator
        title
        location
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
