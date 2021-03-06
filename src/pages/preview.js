import React from "react"
import qs from "qs"
import Prismic from 'prismic-javascript'
// import { RichText } from 'prismic-reactjs'
import Layout from '../components/layout'
import Post from "../components/post"
import Icon from "../components/icon";
// import Cookies from 'js-cookie'

const apiEndpoint = 'https://hello-budaors.cdn.prismic.io/api/v2'

var post

class Preview extends React.Component {

    componentDidMount() {
        this.preview(this.props);
    }

    preview(props) {
        const params = qs.parse(this.props.location.search.slice(1))
        var that = this

        const apiLinkResolver = function (doc) {
            post = doc.data
            that.forceUpdate()
        }

        Prismic.getApi(apiEndpoint)
            .then(api => { 
                api.previewSession(params.token, apiLinkResolver, '/')
        })
        
        // Grrrr.....
        // Prismic.getApi(apiEndpoint)
        //     .then(api => { 
        //         api.previewSession(params.token, linkResolver, '/')
        //     .then(docId => {

        //         const previewRef = Cookies.get(Prismic.previewCookie)
        //         const masterRef = api.refs.find(ref => { return ref.isMasterRef === true }).ref
        //         const ref = previewRef || masterRef

        //         api.query(
        //             Prismic.Predicates.at('document.id', docId),
        //             { ref }
        //         ).then(function (response) {
        //             // response is the response object, response.results holds the documents
        //             console.log(`response` + JSON.stringify(response))  
        //         })
        //     })
        // })
    }

    render() {
        if (post) {
            return (
                <Layout>
                    <Post data={ post } html={ false } />
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <div className="flex flex-column justify-center items-center pt7 pb7">
                        <Icon name="clock" width="36" height="36" class="dark-gray mb1 mr2" />
                        Előnézet betöltése...
                    </div>
                </Layout>
            )
        }
    }
}

export default Preview