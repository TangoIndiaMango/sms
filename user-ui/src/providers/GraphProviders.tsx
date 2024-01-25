// app/providers.tsx
"use client";

import { Toaster } from "@/components/ui/sonner";
import { graphqlClient } from "@/graphql/gql.setup";
import { ApolloProvider } from "@apollo/client";


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={graphqlClient}>

            {children}
        </ApolloProvider>
    );
}