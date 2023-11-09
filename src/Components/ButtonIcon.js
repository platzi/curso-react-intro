const SectionAddTodo = () =>{
    return(
        <>
            <button className="button" style={{marginBottom:"36px"}}>
                <p 
                className="button-text" style={{fontSize: "20px"}}>Añade un nuevo ToDo</p>
                <img
                src="https://www.reshot.com/preview-assets/icons/ME3P9S8WHB/plus-ME3P9S8WHB.svg"
                className="button-svg" 
                alt="Add Item"
                style={{width: "20px"}}/>
            </button>

            <section className="info-todo">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="nameTodo">Agrega un nombre a tu tarea</label>
                        <input className="name-todo input" id="nameTodo" type="text" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeTodo">Agrega una hora de inicio</label>
                        <input className="time-todo input" id="timeTodo" type="time" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeTodo">Agrega una hora de finalizacion</label>
                        <input className="time-todo input" id="timeTodo2" type="time" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deascriptionTodo">Agrega una descripción</label>
                        <textarea 
                        className="description-todo input" 
                        id="descriptionTodo" 
                        style={{padding:"12px"}}
                        required></textarea>
                    </div>
                    <button 
                    className="buttonSend button"
                    style={{fontSize: "20px", marginTop:"20px"}}>
                        <p>Añadir</p>
                    </button>
                </form>
            </section>
        </>
    )
}

export {SectionAddTodo};