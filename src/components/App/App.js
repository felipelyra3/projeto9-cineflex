import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../reset.css";
import MovieSelector from '../MovieSelector/MovieSelector';
import TimeSelector from '../TimeSelector/TimeSelector';
import SeatSelector from '../SeatSelector/SeatSelector';
import Success from '../Success/Success';

export default function App() {
    return (
        <div className='page'>
            <BrowserRouter>
                {/* Tudo que tiver uma rota entre Routes */}
                <Header />
                <Routes>
                    {/* Cada rota tem que estar em Route */}
                    <Route path="/" element={<MovieSelector />} />
                    <Route path="/TimeSelector/:imageId" element={<TimeSelector />} />
                    <Route path="/SeatSelector/:timeId" element={<SeatSelector />} />
                    <Route path="/Success" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}