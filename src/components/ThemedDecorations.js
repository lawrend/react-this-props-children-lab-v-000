import React from 'react'
import PropTypes from 'prop-types'

export default class ThemedParty extends React.Component {
    render () {
        const partyKids = React.Children.map(this.props.children, child => { return React.cloneElement(child, {
            className: this.props.theme
        });
        });

        return (
            <div className='theme-decoration'>
              {partyKids}
            </div>
        );
    }
}

