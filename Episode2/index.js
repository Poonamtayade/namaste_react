const root = ReactDOM.createRoot(document.getElementById("root"));

let ele = React.createElement("div", {}, 
    React.createElement("h1",{},"This text is coming from react")
);

root.render(ele);