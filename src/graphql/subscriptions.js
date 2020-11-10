/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
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
