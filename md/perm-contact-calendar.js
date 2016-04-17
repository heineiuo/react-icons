
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdPermContactCalendar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 30v-1.6c0-3.4-6.6-5.2-10-5.2s-10 1.8-10 5.2v1.6h20z m-10-20c-2.7 0-5 2.3-5 5s2.3 5 5 5 5-2.3 5-5-2.3-5-5-5z m11.6-5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.5-3.4 3.4-3.4h1.6v-3.4h3.4v3.4h13.2v-3.4h3.4v3.4h1.6z"/></g>
            </IconBase>
        );
    }
}
