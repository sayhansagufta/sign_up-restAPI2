import { Button } from "@nextui-org/react";
import React, { useState } from "react";

// const Counter = () => {
//   let count = 0;
//   const [Count, setCount] = useState(0);

//   const incrementCounter = () => {
//    count += 1;
//     setCount(Count + 1);
//   };

//   const decrementCounter = () => {
//     setCount(Count - 1);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-around min-h-96">
//         <Button onClick={decrementCounter} color="danger">
//           -
//         </Button>
//         <span className="text-3xl font-semibold">{Count}</span>
//         <Button onClick={incrementCounter} color="primary">
//           +
//         </Button>
//       </div>
//     </div>
//   );
// };

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div className="flex items-center justify-around min-h-96">
          <Button onClick={this.decrementCounter} color="danger">
            -
          </Button>
          <span className="text-3xl font-semibold">{this.state.count}</span>

          <Button onClick={this.incrementCounter} color="primary">
            +
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
