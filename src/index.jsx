/**
Challenge: Build the main section!

Skip 2 aspects of the design for now:
1. The colored bullets in the list
2. The larger React logo on the side

Those will be separate challenges coming up.
*/

import ReactDOM from "react-dom/client";
import App from "./App";

function Page() {
    return (
        <App/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);