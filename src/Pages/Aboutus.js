// import { Prompt } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

export const Aboutus = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    console.log(navigate);
    function redirectUser() {
        // history.push('/home');
        navigate('/home');
    }

    return <>
        <p>Aboutus Page</p>
        {/* <Prompt when={true} message={() => 'Do you really want to leave this screen?'}></Prompt> */}
        <button onClick={redirectUser}>Go To Home</button>
    </>
}