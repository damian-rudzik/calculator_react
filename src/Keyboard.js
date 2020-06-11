import React from 'react'


function keyboard(props) {
    return (<div className="keyboard">
        <table>
            <tr>
                <td><input type="button" value="C" onClick={props.handleClick} /></td>
                <td><input type="button" value="0" onClick={props.handleClick} /></td>
                <td><input type="button" value="/" onClick={props.handleClick} /></td>
                <td><input type="button" value="X" onClick={props.handleClick} /></td>
            </tr>
            <tr>
                <td><input type="button" value="7" onClick={props.handleClick} /></td>
                <td><input type="button" value="8" onClick={props.handleClick} /></td>
                <td><input type="button" value="9" onClick={props.handleClick} /></td>
                <td><input type="button" value="-" onClick={props.handleClick} /></td>
            </tr>
            <tr>
                <td><input type="button" value="4" onClick={props.handleClick} /></td>
                <td><input type="button" value="5" onClick={props.handleClick} /></td>
                <td><input type="button" value="6" onClick={props.handleClick} /></td>
                <td><input type="button" value="+" onClick={props.handleClick} /></td>
            </tr>
            <tr>
                <td><input type="button" value="1" onClick={props.handleClick} /></td>
                <td><input type="button" value="2" onClick={props.handleClick} /></td>
                <td><input type="button" value="3" onClick={props.handleClick} /></td>
                <td><input type="button" value="=" onClick={props.handleClick} /></td>
            </tr>
        </table>
    </div>
    )
}

export default keyboard