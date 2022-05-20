import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
        }
    }
    onChange = (event)=>{
        this.setState({value:event.target.value})
    }
    render() {
        const{onName} = this.props
        const{value} = this.state
        return (
            <div>
                <form onSubmit={(event)=>onName(event,value)}>
                    <input
                        className={'form_input'}
                        type={'text'}
                        value={value}
                        onChange={this.onChange}
                        placeholder={'Write City'}
                    />
                    <button className={'search_btn'}>Search</button>
                    <hr />
                </form>
            </div>
        );
    }
}

export default Form;