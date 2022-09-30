import * as React from "react"
const BackButton: React.FC<{
    link: string;
}> = (props) => {
    return (
        <a href={props.link} className={"text-md md:text-xl font-medium text-gray-400 font-Poppins hover:cursor-pointer hover:text-white transition-colors"}>{"< Go Back"}</a>
    );
}
export default BackButton