import { ToolsList } from "./tools";

export const Tools = () => {
    return (
        <div className="px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2">
            <div className="h-80">
            <h1 className="pt-20 text-4xl lg:text-6xl font-bold">Tools & <br></br>Technologies </h1>
            <p className="pt-10 text-lg">Some of the tools I work with.</p>
            </div>
            <ToolsList/>
        </div>
    );
};