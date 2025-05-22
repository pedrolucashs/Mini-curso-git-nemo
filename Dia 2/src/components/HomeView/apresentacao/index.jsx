import React, { useEffect, useState, useRef } from 'react';
import Sobre from './sobre/index.jsx';
import Bolhas from './bolha/index.jsx';
import Onda from './onda/index.jsx';
import "./styles.css";

const NUM_FIREWORKS = 40; // Quantidade de fogos ao redor do modal
const MODAL_WIDTH = 20; // vw
const MODAL_HEIGHT = 15; // vh

const fireworkColors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
    '#9966FF', '#FF9F40', '#43FF64', '#FF43E3'
];

// Função para calcular pontos ao redor do retângulo do modal
function getFireworkPositions(step) {
    const positions = [];
    const w = MODAL_WIDTH;
    const h = MODAL_HEIGHT;
    for (let i = 0; i < NUM_FIREWORKS; i++) {
        // Calcula o perímetro do retângulo
        const perimeter = 2 * (w + h);
        const dist = ((i * perimeter) / NUM_FIREWORKS + step * 4) % perimeter;

        let top, left;
        if (dist < w) { // Top
            top = 48 - h / 2;
            left = 49.5 - w / 2 + dist;
        } else if (dist < w + h) { // Right
            top = 49 - h / 2 + (dist - w);
            left = 50 + w / 2;
        } else if (dist < 2 * w + h) { // Bottom
            top = 49 + h / 2;
            left = 49.5 + w / 2 - (dist - (w + h));
        } else { // Left
            top = 48 + h / 2 - (dist - (2 * w + h));
            left = 49 - w / 2;
        }
        positions.push({
            top: `${top}vh`,
            left: `${left}vw`,
            background: fireworkColors[i % fireworkColors.length],
            id: `fw-${i}-${step}`
        });
    }
    return positions;
}

function Apresentacao() {
    const [showModal, setShowModal] = useState(false);
    const [fireworks, setFireworks] = useState([]);
    const [step, setStep] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        setShowModal(true);
    }, []);

    useEffect(() => {
        if (showModal) {
            setStep(0);
            setFireworks(getFireworkPositions(0));
            intervalRef.current = setInterval(() => {
                setStep(prev => {
                    const next = prev + 1;
                    setFireworks(getFireworkPositions(next));
                    return next;
                });
            }, 80);
        } else {
            clearInterval(intervalRef.current);
            setFireworks([]);
        }
        return () => clearInterval(intervalRef.current);
    }, [showModal]);

    return (
        <>
            {showModal && (
                <>
                    {/* Fogos de artifício percorrendo a borda do modal */}
                    {fireworks.map((style) => (
                        <div
                            key={style.id}
                            className="firework"
                            style={{
                                ...style,
                                position: 'fixed',
                                width: '6px',
                                height: '32px',
                                borderRadius: '12px',
                                zIndex: 1101,
                                pointerEvents: 'none',
                                opacity: 0.85,
                                animation: 'firework-pop 0.7s linear'
                            }}
                        />
                    ))}
                    <div className='modal_container'>
                        <div className={'modal_content'}>
                            <h2>Parabéns!</h2>
                            <p>Você concluiu o desafio!</p>
                            <button onClick={() => setShowModal(false)}>Fechar</button>
                        </div>
                    </div>
                </>
            )}
            <article id='Apresentacao'>
                <section id='topo'>
                    <article>
                        <Sobre />
                    </article>
                    <article>
                        <Bolhas />
                    </article>
                </section>
                <section id='fim'>
                    <Onda />
                </section>
            </article>
        </>
    );
}

export default Apresentacao;