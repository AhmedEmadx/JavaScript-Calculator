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
            display:'',
            result: ''
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
                    <div id='eqution'>{this.state.display}
                    </div>
                    <div id='display'>{this.state.result}
                    </div>
                </div>
                <div className='key'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="eight" value='8' className='btn btn-default' onClick={this.handelValue}>8</button>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="nine" value='9' className='btn btn-default' onClick={this.handelValue}>9</button>
                        </div>
                        <div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="clear" value='AC' className='btn btn-default' onClick={this.handelAc}>AC</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="seven"  value='6' className='btn btn-default' onClick={this.handelValue}>6</button>
                        </div>
                        <div  className=' col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="six" value='7' className='btn btn-default' onClick={this.handelValue}>7</button>
                        </div>
                        <div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="divide" value='/' className='btn btn-default' onClick={this.handelValue}>/</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="four"     value='4' className='btn btn-default' onClick={this.handelValue}>4</button>
                        </div>
                        <div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="five"     value='5' className='btn btn-default' onClick={this.handelValue}>5</button>
                        </div>
                        <div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                            <button id="add"      value='+' className='btn btn-default' onClick={this.handelValue}>+</button>
                        </div>
                    </div>
                    <div className='row'>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="two"      value='2' className='btn btn-default' onClick={this.handelValue}>2</button>
                    	</div>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="three"    value='3' className='btn btn-default' onClick={this.handelValue}>3</button>
                    	</div>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="multiply" value='*' className='btn btn-default' onClick={this.handelValue}>x</button>
                    	</div>
                    </div>
                    <div className='row'>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="zero"     value='0' className='btn btn-default' onClick={this.handelValue}>0</button>
                    	</div>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="one"      value='1' className='btn btn-default' onClick={this.handelValue}>1</button>
                    	</div>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="subtract" value='-' className='btn btn-default' onClick={this.handelValue}>-</button>
                    	</div>
                    </div>
                    <div className='row'>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="decimal"  value='.' className='btn btn-default' onClick={this.handelValue}>.</button>
                    	</div>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="equals"   value='=' className='btn btn-default' onClick={this.handelValue}>=</button>
                    	</div>
                    	<div  className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                    		<button id="remove"   value='<-' className='btn btn-default' onClick={this.handelRemove}>re</button>
                    	</div>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#app'));