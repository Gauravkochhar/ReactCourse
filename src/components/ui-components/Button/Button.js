import './Button.css';
// import styled from 'styled-components';

// const Button = styled.button`
// & {
//     width: 150px;
//     height: 30px;
//     border: 1px solid salmon;
//     padding: 10px 20px;
//     margin-top: 20px;
// }

// &:hover {
//     background-color: ${props => (props.invalidFormState.name ? 'red': '#ccc')};
//     color: white;
// }

// @media(min-width: 767px) {
//     width:  500px;
// }

// `;

const Button = (props) => {
    return (
        <button type={props.type} className="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;