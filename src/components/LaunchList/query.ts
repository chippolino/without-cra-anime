import {gql} from '@apollo/client'

export const QUERY_MEDIA_LIST = gql`
    query Query {
        Page {
            media {
                title {
                    english
                    native
                }
                episodes
                bannerImage
            }
        }
    }
`