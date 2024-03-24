function Progress({index,numQuestions,maxPoints,points,answer}) {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index+Number(answer!==null)}/>
            <p>Questions <strong>{index +1}/{numQuestions}</strong></p>
            <p>{points}/{maxPoints}</p>
        </header>
    )
}

export default Progress
