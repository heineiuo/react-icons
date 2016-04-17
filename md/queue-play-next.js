
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdQueuePlayNext extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m40 30l-7.5 7.5-2.5-2.5 5-5-5-5 2.5-2.5z m-18.4-13.4h5v3.4h-5v5h-3.2v-5h-5v-3.4h5v-5h3.2v5z m13.4-11.6c1.8 0 3.4 1.5 3.4 3.4v13.2h-3.4v-13.2h-30v20h25v3.2h-3.4v3.4h-13.2v-3.4h-8.4c-1.9 0-3.4-1.4-3.4-3.2v-20c0-1.9 1.5-3.4 3.4-3.4h30z"/></g>
            </IconBase>
        );
    }
}
