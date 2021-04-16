import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <>
        <CircularProgress />
        <p style={{ textAlign: "center", fontSize: "30px" }}>
          Finding a person takes exactly 1 second!
        </p>
      </>
    );
  };
}

export default Loading;
