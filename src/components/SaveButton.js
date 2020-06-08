import React, {useState} from "react";

/*class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    console.log(event);
    console.log(this);
  }

  render() {
    return <button
        onClick={this.handleButtonClick}>
      Save
    </button>
  }
}*/
function SaveButton(props) {
  const [count, setCount] = useState(0);
  const [countName, setCountName] = useState("");

  const handleButtonClick = (e) => {
    console.log(e.target);
    setCount(count + 1);
    setCountName("Hello " + (count + 1));
  }

  return <button
      className="btn btn-primary"
      onClick={handleButtonClick}>
    Save count is {count} and name is {countName}
  </button>;
}

export default SaveButton;