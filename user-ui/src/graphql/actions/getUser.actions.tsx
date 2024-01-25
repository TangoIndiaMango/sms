"use client"

import { gql, DocumentNode } from "@apollo/client";


export const GET_USERS: DocumentNode = gql`
    query {
        getLoggedInUser {
            user {
                id
                other_name
                surname
                email
                address
                matric_numer
                department
                faculty
                level
                semester
            }
            accessToken
            refreshToken
        }
    }
`;