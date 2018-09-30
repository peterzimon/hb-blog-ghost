import React from 'react'
import feather from 'feather-icons'
import PropTypes from 'prop-types'

class Icon extends React.Component {
    render() {

        const iconProps = this.props
        var attrs = {
            color: iconProps.color,
            width: iconProps.width,
            height: iconProps.height,
            class: iconProps.class,
        }

        return (
            <>
                <span dangerouslySetInnerHTML={{
                    __html: feather.icons[iconProps.name].toSvg(attrs),
                }} />
            </>
        )
    }
}

Icon.defaultProps = {
    name: ``,
    width: `24px`,
    height: `24px`,
    color: `black`,
    class: ``,
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    class: PropTypes.string,
}

export default Icon