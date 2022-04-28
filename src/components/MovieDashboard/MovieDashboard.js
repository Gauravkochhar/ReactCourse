import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class MovieDashboard extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            response: []
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.setState({ isLoading: true})
        fetch('https://swapi.dev/api/films')
        .then((res) => {
            return res.json()
        })
        .then((response) => {
            console.log(response);
            this.setState({ isLoading: false})
            this.setState({ response: response.results})
        })
        .catch((error) => {
            this.setState({ isLoading: false})
        })
    }

    async getMovies1() {
        try {
            this.setState({ isLoading: true})
            const apicall = await fetch('https://swapi.dev/api/films', {
                headers: {
                    'Content-Type':  'application/json'
                },
                body: JSON.stringify({
                    title: 'Sample'
                }),
                method: 'POST'
            });
            const response = await apicall.json();
            console.log(response);
            if(response && response.results) {
                this.setState({ isLoading: false})
                this.setState({ response: response.results})
            } else {
                throw new Error('Something went wrong');
            }
        }
        catch(error) {
            this.setState({ isLoading: false});
        }
    }


    


    render() {
        return <React.Fragment>
            { this.state.isLoading ? <p>Loading...</p>: <div><h1>Watch Movies</h1>
            {
                    this.state.response.map((elm, i) => {
                        return <p key={i}>Title: {elm.title}</p>
                    })
            }
            </div>}
        </React.Fragment>
    }
}

export default MovieDashboard;