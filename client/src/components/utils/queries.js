import gql from "graphql-tag"

export const GET_ME = gql
  {
     {
      _id
      username
      email
      bookCount
       {
        bookId
        authors
        description
        title
        image
        link
      }
    }
};