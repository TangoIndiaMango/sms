"use client"

import { gql, DocumentNode } from "@apollo/client";


// LOGIN_USER DocumentNode
export const LOGIN_USER: DocumentNode = gql`
  mutation loginUser(
    $email: String!,
    $password: String!
  ) {
    loginUser(
      email: $email
      password: $password
    ) {
      user {
        other_name
        surname
        matric_number
        address
      }
      accessToken
      refreshToken
      error {
        message
      }
    }
  }
`;