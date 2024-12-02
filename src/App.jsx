import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Promo/HeroSection';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Movie from './pages/Movie';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './hooks/AuthContext';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <Header title="MovieVerse" />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <HeroSection
                                        title="Marvel 1943: Rise of Hydra"
                                        description="In the chaos of war, worlds collide. Skydance New Media and Marvel Games share an original story where an ensemble of four heroes must overcome their differences and form an uneasy alliance to confront their common enemy."
                                        imageUrl="https://i.ytimg.com/vi/Lb2wwEx6DVw/maxresdefault.jpg"
                                    />
                                    <MovieList />
                                </>
                            }
                        />
                        <Route path="/movies" element={<Movie />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}