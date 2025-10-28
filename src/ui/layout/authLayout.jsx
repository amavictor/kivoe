import { SideMenu } from "../components";

export const AuthLayout = ({ children }) => {
    return (
        <div className="flex w-full h-screen">
            <div className="no-drag">
                <SideMenu/>
            </div>
            <div>{children}</div>
        </div>
    );
};
