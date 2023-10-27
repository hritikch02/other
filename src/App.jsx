import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import MyQueue from "./pages/MyQueue";
import AllMovies from "./pages/AllMovies";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Movies />} />
					<Route path="/my-queue" element={<MyQueue />} />
					<Route path="/all-movies" element={<AllMovies />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;
