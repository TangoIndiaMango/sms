"use client"

import { gql, DocumentNode } from "@apollo/client";

export const FORGET_PASSWORD: DocumentNode = gql`
    mutation forgotPassword (
        $email: String!
    ) {
        forgotPassword (forgotPasswordDto: {
            email: $email
         }) {
                message
            }
    }
`;