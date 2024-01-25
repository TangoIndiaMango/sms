import { GET_USERS } from '@/graphql/actions/getUser.actions'
import { useQuery } from '@apollo/client'
import React from 'react'

type Props = {}

const useUser = (props: Props) => {
    const { data, loading } = useQuery(GET_USERS)
    console.log(data);
    return {
        loading,
        user: data.getLoggedInUser.user
    }
}

export default useUser