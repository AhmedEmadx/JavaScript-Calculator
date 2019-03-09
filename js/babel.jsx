class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: '',
            result: ''
        };
        this.handelValue = this.handelValue.bind(this);
        this.handelAc = this.handelAc.bind(this);
        this.handelRemove = this.handelRemove.bind(this);
    }
    handelValue(event){
        this.setState({
            display: this.state.display + event.target.value
        });
        console.log(this.state.display);
        if(event.target.value === '='){
           this.setState({
            result: eval(this.state.display).toString(),
            display: ''
            });
        };
    }
    handelAc (){
        this.setState({
            display:''
        })
    }
    handelRemove(){
        this.setState({
            display: this.state.display.slice(0, -1)
        })
    }
    render(){
        return(
            <div className='container' id='calcultor'>
                <div className='row'>
                    <div id='display'>{this.state.display}
                    </div>
                    <div id='display'>{this.state.result}
                    </div>
                </div>
                <div className='key'>
                    <button id="clear"    value='AC' className='btn btn-default' onClick={this.handelAc}>AC</button>
                    <button id="divide"   value='/' className='btn btn-default' onClick={this.handelValue}>/</button>
                    <button id="multiply" value='*' className='btn btn-default' onClick={this.handelValue}>x</button>
                    <button id="seven"    value='7' className='btn btn-default' onClick={this.handelValue}>7</button>
                    <button id="eight"    value='8' className='btn btn-default' onClick={this.handelValue}>8</button>
                    <button id="nine"     value='9' className='btn btn-default' onClick={this.handelValue}>9</button>
                    <button id="subtract" value='-' className='btn btn-default' onClick={this.handelValue}>-</button>
                    <button id="four"     value='4' className='btn btn-default' onClick={this.handelValue}>4</button>
                    <button id="five"     value='5' className='btn btn-default' onClick={this.handelValue}>5</button>
                    <button id="six"      value='6' className='btn btn-default' onClick={this.handelValue}>6</button>
                    <button id="add"      value='+' className='btn btn-default' onClick={this.handelValue}>+</button>
                    <button id="one"      value='1' className='btn btn-default' onClick={this.handelValue}>1</button>
                    <button id="two"      value='2' className='btn btn-default' onClick={this.handelValue}>2</button>
                    <button id="three"    value='3' className='btn btn-default' onClick={this.handelValue}>3</button>
                    <button id="zero"     value='0' className='btn btn-default' onClick={this.handelValue}>0</button>
                    <button id="decimal"  value='.' className='btn btn-default' onClick={this.handelValue}>.</button>
                    <button id="equals"   value='=' className='btn btn-default' onClick={this.handelValue}>=</button>
                    <button id="remove"   value='<-' className='btn btn-default' onClick={this.handelRemove}>re</button>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#app'));