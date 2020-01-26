import React, { Component } from 'react';


class Movies extends Component
{
    state = {
        movies: getMovies()
    };
   
}

const movies =[
    {
        _id: "5b21ca3eebf7f6fbccd471815",
        title: "Terminator",
        genre: {
            _id:"5b21ca3eebf7f6fbccd471815",name:"Action"
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
    },
    {
        
        _id:"5b21ca3eebf7f6fbccd471816",
        title:"Die Hard",
        genre :{_id:"5b21ca3eebf7f6fbccd471818",name:"Action"},
        numberInStock:5,
        dailyRentalRate :2.5,
        
    },
    {
        _id:"5b21ca3eebf7f6fbccd471817",
        title:"Get Out",
        genre :{_id:"5b21ca3eebf7f6fbccd471820",name:"Thriler"},
        numberInStock:8,
        dailyRentalRate :3.5,
    },
    {
        _id:"5b21ca3eebf7f6fbccd471819",
        title:"Trip To Italy",
        genre :{_id:"5b21ca3eebf7f6fbccd471814",name:"Comedy"},
        numberInStock:7,
        dailyRentalRate :3.5,
    },
    {
        _id:"5b21ca3eebf7f6fbccd47181a",
        title:"AirPlane",
        genre :{_id:"5b21ca3eebf7f6fbccd471814",name:"Comedy"},
        numberInStock:7,
        dailyRentalRate :3.5,
    },
    {
        _id:"5b21ca3eebf7f6fbccd47181b",
        title:"Wedding Crashers",
        genre :{_id:"5b21ca3eebf7f6fbccd471815",name:"Comedy"},
        numberInStock:6,
        dailyRentalRate :3.5,
    },

    {
        _id:"5b21ca3eebf7f6fbccd47181e",
        title:"Terminator",
        genre :{_id:"5b21ca3eebf7f6fbccd471820",name:"Thriler"},
        numberInStock:7,
        dailyRentalRate :4.5
    },
    {
        _id:"5b21ca3eebf7f6fbccd47181f",
        title:"The Six Scene ",
        genre :{_id:"5b21ca3eebf7f6fbccd471820",name:"Thriler"},
        numberInStock:6,
        dailyRentalRate :2.5,
    },
    {
        _id:"5b21ca3eebf7f6fbccd471821",
        title:"The Avengers",
        genre :{_id:"5b21ca3eebf7f6fbccd471818",name:"Action"},
        numberInStock:7,
        dailyRentalRate :3.5,
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
    
}

export function saveMovie(movie) {
    let movieInDb= movies.find(m=>m._id===movie._id) || {};
    movieInDb.name=movie.name;
}
