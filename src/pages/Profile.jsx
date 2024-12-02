import React from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import MovieSections from '../components/MovieProfile/MovieSections';


export default function Profile() {
    return (
        <div className="Profile">
            <UserProfile />
            <MovieSections />
        </div>
    );
}
