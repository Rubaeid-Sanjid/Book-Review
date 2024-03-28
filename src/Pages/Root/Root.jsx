import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Root = () => {
    return (
        <div className="container mx-auto lg:px-24 px-2">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;