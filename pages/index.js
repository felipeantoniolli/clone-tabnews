import React from 'react';

export default function Home() {
    const [position, setPosition] = React.useState({ x: 30, y: 30 });
    const [isClicked, setIsClicked] = React.useState(0);
    function changePosition() {
        const x = Math.random() * (500 - position.x) + 0;
        const y = Math.random() * (500 - position.y) + 0;

        setPosition({ x: x, y: y });
    }

    return (
        <div style={{position: 'relative', display:"flex", flexDirection:"column", width: "100%", height: "100%"}}>
            <h1>Ana Carolina, eu te amo, se você me ama, clique no botão!!</h1>
            <div style={{position: 'relative', width: "100%", height: "100%"}}>
                <div style={{position: 'absolute', top: position.x, left: position.y, padding: 50, transitionProperty: "top, left",  transitionDuration: "0.3s",  transitionTimingFunction: "ease-out" }} onMouseEnter={changePosition}>
                    <button onClick={() => setIsClicked(isClicked + 1)}>Butão</button>
                </div>
            </div>
            { isClicked > 10 ? <h1>Nos amamos muitão!! ♥</h1> : ''}
        </div>);
}
