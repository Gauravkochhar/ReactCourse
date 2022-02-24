import './HomepageWrapper.css';

function HomepageWrapper(props) {
    let classList = 'homepage-wrapper ' + props.className;
    return (
        <div className={classList}>{props.children}</div>
    );
}

export default HomepageWrapper;