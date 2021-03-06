import React from 'react'
import { Styles } from './styles'
import Card from './card'
import PropTypes from 'prop-types'
import Icon from './icon'

class PostList extends React.Component {
    render() {
        const data = this.props.children

        if (data.allGhostPost) {

            var cards = []
            const gridTemplateRows = `minmax(460px, auto)`

            for (let i = 0; i < data.allGhostPost.edges.length; i++) {
                const element = data.allGhostPost.edges[i].node
                var cardType = ``
                var colSpan = `col-4-l col-6-m col-12`

                if (this.props.page === `index`) {
                    if (i == 0) {
                        cardType = `first-on-index`
                    }
                    if (((i + 1) % 5 == 0 && (i + 1) % 10 != 0) || i % 10 == 0) {
                        colSpan = `col-12 col-6-m col-8-l`
                    }
                } else {
                    if (i == 0 || (i % 5 == 1 && i % 10 != 1) || i % 10 == 0) {
                        colSpan = `col-12 col-6-m col-8-l`
                    }
                }

                cards.push(
                    <Card key={ element.id } cardtype={ cardType } colspan={ colSpan }>{ element }</Card>
                )
            }

            return (
                <div className={ Styles.page.xl + Styles.sideSpacing + Styles.gutter + `mt1 mt4-ns grid-12` } style={ {
                    gridTemplateRows: gridTemplateRows,
                    // gridAutoRows: `minmax(480px, 520px)`,
                } }>
                    { cards }
                </div>
            )
        } else {
            return (
                <div className={ Styles.page.xl + Styles.sideSpacing + `mt6 mb7` }>
                    <p className="flex flex-column items-center fw7 dark-gray">
                        <Icon name="gift" class="mb2 mr2 dark-gray" width="48" height="48" />
                        Hamarosan...
                    </p>
                </div>
            )
        }
    }
}

PostList.defaultProps = {
    page: `archives`
}

PostList.propTypes = {
    page: PropTypes.string
}

export default PostList