import React from "react";

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Finding a person takes exactly 1.5 seconds!
      </p>
    );
  };
}

export default Loading;
