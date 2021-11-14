import React from 'react';

const Layout = React.memo((props) => {
    console.log(props.children)
    return (
        <div style={{ padding: "30px" }}>
            {props.children}
        </div>
    )
})

export { Layout }