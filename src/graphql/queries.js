/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRsvp = /* GraphQL */ `
  query GetRsvp($id: ID!) {
    getRsvp(id: $id) {
      id
      emailAddress
      guests
      rsvpSubmitted
      dietaryRestrictions
      createdAt
      updatedAt
    }
  }
`;
export const listRsvps = /* GraphQL */ `
  query ListRsvps(
    $filter: ModelRsvpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRsvps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        emailAddress
        guests
        rsvpSubmitted
        dietaryRestrictions
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
