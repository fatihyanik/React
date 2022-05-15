import { Outlet } from "react-router";


function App() {
    return (
        <div className="App mx-auto text-center mt-4 pt-10">
            <h1 className="text-4xl text-center">
                Hello there. Take a look at the awesome Dogs. Click on them for details.
            </h1>
            <Outlet />
        </div>
    )
}

export default App
