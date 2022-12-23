import { Link } from "react-router-dom";

import { Button } from "../../components/button";

const Home = () => {
    return (<>
        <h1>HOME</h1>
        <Button title="teste1" />
        <Button variant={'secondary'} title="teste2" /> 
        <Link to="/login">Entra</Link>
    </>)
}

export { Home }