import './App.css';
import React, { Component } from 'react';


// Class-based component
class App extends Component {
  state = {
    person: {
      fullName: 'Ramzi Ouerfelli',
      imgSrc: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/384105790_189002427553539_866122583979115565_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BAu17VL4VsoAX-KvlRi&_nc_ht=scontent.ftun1-2.fna&oh=00_AfByqXvvRBcVKTh4aT0MYeaFumuzup7Y9SQYpPD2mqS_Tw&oe=65533EFA',
      bio: 'Im rapper And Devolopper',
      
    },
    show: true,
    mountTime: new Date(),
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.forceUpdate(); // Update the component 
    }, 1000); // Update the time every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className='myCard'>
        {show && (
          <div className='myobject'>
            <h2 style={{color: "#3C4B5C",}}>{person.fullName}</h2>
            <img style={{width:"20rem", borderRadius:"10rem"}} src={person.imgSrc} alt="Profile" />
            <p style={{fontSize:"20px"}}> <br /> {person.bio}</p>
          </div>
        )}
        <button className='button' style={{verticalAlign:"middle"}} onClick={this.toggleShow}>CLICK</button>
        <p>{Math.floor((new Date() - mountTime) / 1000)}</p>
      </div>
    );
  }
}

export default App;