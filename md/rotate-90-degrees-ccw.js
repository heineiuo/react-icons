
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRotate90DegreesCcw extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m32.3 11.1c5.8 5.9 5.8 15.3 0 21.2-2.9 2.9-6.8 4.3-10.7 4.3-2.5 0-4.9-0.6-7.1-1.8l2.5-2.5c1.4 0.7 3 1.1 4.6 1.1 3 0 6.1-1.2 8.3-3.5 4.6-4.5 4.6-11.9 0-16.5-2.2-2.2-5.3-3.4-8.3-3.4v5.4l-7-7.1 7-7.1v5.4c3.9 0 7.8 1.5 10.7 4.5z m-26.1 10.4l6.1 6.1 6.1-6.1-6.1-6.1z m6.1-10.8l10.7 10.8-10.7 10.8-10.9-10.8z"/></g>
            </IconBase>
        );
    }
}
