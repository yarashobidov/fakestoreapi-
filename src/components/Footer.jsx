import { useLocation } from "react-router-dom";

function Footer() {
    const { pathname } = useLocation();
    return (
        <>
            {!(pathname === '/notfound') && <footer>
                <div className="ui secondary " > &copy; 27.01.2001</div>
            </footer>}
        </>

    )
}

export default Footer