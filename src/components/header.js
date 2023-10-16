import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const Data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
            siteBuildMetadata {
                buildTime
            }
        }
    `)    
    return(
        <header>
            <h1>{Data.site.siteMetadata.title}</h1>
        </header>
    )
}
