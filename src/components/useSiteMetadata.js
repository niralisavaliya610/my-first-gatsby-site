import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const data = useSiteMetadata(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return data.site.siteMetadata
}
export default useSiteMetadata;