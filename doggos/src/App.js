import React from 'react';
import axios from 'axios';

const fetchBreed = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res)
        .catch(err => console.log(err))
}

class App extends React.Component {
    state = {
        dogImages: [],
        dogBreed: '',
        currentBreed: 'collie'
    }

    componentDidMount() {
        fetchBreed(this.state.currentBreed)
            .then(res => {
                    this.setState({
                        dogImages: res.data.message
                    })
                }   
            )
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.dogImages !== this.state.dogImages) {
            if(this.state.dogBreed === 'chihuahua') {
            fetchBreed('husky')
            .then(res => {
                this.setState({
                    dogImages: res.data.message,
                    dogBreed: 'husky'
                })
            })
            .catch(err => console.log(err))
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            dogBreed: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetchBreed(this.state.dogBreed)
            .then(res => {
                this.setState({
                    dogImages: res.data.message
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Search Dogs</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" />
                    <button>Get new dogs</button>
                </form>
                <div className="dogContainer">
                    {this.state.dogImages.map(dogImage => <img key={dogImage} width="200px" src={dogImage} />)}
                </div>
            </div>
        )
    }
}

export default App