import React from 'react'

export default function withInfo(HocComponent, propName="hovering", otherProp=0) {
    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                hovering: false,
                count: 0
            }
        }

        mouseOver = () => this.setState({ 
            hovering: true,
            count: this.state.count + 1
            
         })
        mouseOut = () => this.setState({ hovering: false })


        render() {

            const props = {
                [propName]: this.state.hovering,
                [otherProp]: this.state.count
            }
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <HocComponent {...props}>
                        {this.props.children(this.state.hovering)}
                    </HocComponent>
                </div>
            )
        }
    }
}