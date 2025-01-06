
class Calculator extends React.Component {
    constructor(props){
        super (props)
        this.state = {
            num: "",
        }
    }

     handleClick = (value) => {
        this.setState({
            num: this.state.num + value
        })
    }

    handleClear = () => {
        this.setState({
            num: ""
        })
    }

    handleEvaluate = () => {
        try {
            this.setState({
                num: eval(this.state.num).toString()
            })
        } catch (error){
            this.setState({
                num: "Erreur"
            })
    }
}

    handleDelete = (value) => {
        this.setState({
            num : (this.state.num).slice(0, -1)
        })
}
    
    render(){
        return <div className="calculator">
                    <h1>Casio</h1>
                    <div className="ecran">
                        {this.state.num}
                    </div>
                    <div className = "touches">
                        <button className="bouton" onClick = {() => this.handleClear()}>C</button>

                        <button className="bouton" onClick = {() => this.handleClick("(")}>(</button>

                        <button className="bouton" onClick = {() => this.handleClick(")")}>)</button>

                        <button className="bouton btn-1" onClick = {() => this.handleClick("/")}>/</button>

                        <button className="bouton" onClick = {() => this.handleClick("7")}>7</button>

                        <button className="bouton" onClick = {() => this.handleClick("8")}>8</button>

                        <button className="bouton" onClick = {() => this.handleClick("9")}>9</button>

                        <button className="bouton btn-1"  onClick = {() => this.handleClick("*")}>*</button>

                        <button className="bouton" onClick = {() => this.handleClick("4")}>4</button>

                        <button className="bouton" onClick = {() => this.handleClick("5")}>5</button>

                        <button className="bouton" onClick = {() => this.handleClick("6")}>6</button>
                        <button className="bouton btn-1" onClick = {() => this.handleClick("-")}>-</button>

                        <button className="bouton"  onClick = {() => this.handleClick("1")}>1</button>

                        <button className="bouton"  onClick = {() => this.handleClick("2")}>2</button>

                        <button className="bouton"  onClick = {() => this.handleClick("3")}>3</button>

                        <button className="bouton btn-1"  onClick = {() => this.handleClick("+")}>+</button>

                        <button className="bouton"  onClick = {() => this.handleClick("0")}>0</button>

                        <button className="bouton"  onClick = {() => this.handleClick(".")}>.</button>

                        <button className="bouton btn-3" onClick = {() => this.handleDelete()}><i className="fa-solid fa-delete-left"></i></button>
                        <button  className="bouton btn-2" onClick = {() => this.handleEvaluate()}>=</button>
                    </div>
                </div>
    }
    
}

function Home (){
    return <Calculator/>
}




ReactDOM.render(<Home/>, document.getElementById("root"))