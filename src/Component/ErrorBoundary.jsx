import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  // Updates state when an error occurs
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  // Used for logging the error
  componentDidCatch(error, errorInfo) {
    console.log("Error caught by ErrorBoundary:");
    console.log(error);
    console.log(errorInfo);
  }

//   // Reset error state
//   handleRetry = () => {
//     this.setState({
//       hasError: false,
//       error: null,
//     });
//   };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorBox}>
          <h2>⚠️ Something went wrong!</h2>

          <p>
            {this.state.error?.message}
          </p>

          {/* <button onClick={this.handleRetry}>
            Try Again
          </button> */}
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  errorBox: {
    width: "400px",
    margin: "50px auto",
    padding: "30px",
    textAlign: "center",
    border: "1px solid red",
    borderRadius: "10px",
    backgroundColor: "#fff5f5",
  },
};

export default ErrorBoundary;