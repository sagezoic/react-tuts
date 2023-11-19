import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " Constructor");

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "default",
        place: "default",
        avatar_url: "default",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name+" componentDidMount");

    const data = await fetch("https://api.github.com/users/sagezoic");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    // to simulate useEffect(()=>{}, [count])
    if (this.state.count !== prevState.count) {
    }

    // to simulate useEffect(()=>{}, [count, count2])
    // So, to improve update API they come up with the useEffect() and inside which they realized they could have multiple 
    // state change on which we want to run a code. That's why dependency array.
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //code
    }

    this.timer = setInterval(()=>{
        console.log("Job.....")
    }, 1000);

    console.log("component updated....");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmounting....");
  }

  render() {
    // const { name, place } = this.props;
    const { count, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;

    console.log(name + " render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: rakesh@dateze.in</h3>
      </div>
    );
  }
}

export default UserClass;
