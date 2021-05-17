import Thumbnail from "./Thumbnail";
import flipMove from "react-flip-move";

function Results({results}) {
    return (
        <flipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:flex flex-wrap justify-center">
            {results.map(result => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </flipMove>
    )
}

export default Results;
