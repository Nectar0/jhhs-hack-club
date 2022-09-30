
import * as React from "react"
import BackButton from "../shared/BackButton";
import GradientContent from "../shared/GradientContent";
import MegasiteCell from "./MegasiteCell";

const websites = [
    {
        title: "Alexweb 🌐🌐",
        backgroundColor: "bg-blue-400",
        link: "https://alexstrugacz.com",
        author: "Alex Strugacz"
    },
    {
        title: "Epic portfolio site 🔥🔥🔥",
        backgroundColor: "bg-red-400",
        link: "https://miguelaenlle.com",
        author: "Miguel Aenlle"
    }
]

const Megasite: React.FC<{}> = (props) => {
    return (
        <GradientContent move={true}>
            <BackButton link={"/"} />
            <div className={"py-10"}>

                <h2 className={"text-3xl font-bold font-Poppins text-white"}>Personal Website Megasite</h2>
                <p className={"text-lg font-Poppins text-zinc-300"}>🚧🚧🚧 This area is Under Construction 🚧🚧🚧 <br />The megasite will be completed after all websites are submitted by Meetup #5</p>
                <br />
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}>
                    {websites.map(website => {
                        return (
                            <MegasiteCell
                                title={website.title}
                                backgroundColor={website.backgroundColor}
                                link={website.link}
                                author={website.author}
                            />
                        )
                    })}
                </div>
            </div>
        </GradientContent>
    );
}
export default Megasite