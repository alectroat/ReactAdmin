import React from 'react';
import { Link } from 'react-router-dom';

export const FormTextControl = ({ submitted, Label, Name, Value, onChange, errMsg }) => {
    return (
        <div className='form-group'>
            <input type="text" placeholder={Label} className={'form-control' + (submitted && !Value ? ' has-error' : '')} name={Name} value={Value} onChange={onChange} />   
            {submitted && !Value && errMsg && <div className="help-block">{errMsg}</div>}         
        </div>
    );
}

export const FormPasswordControl = ({ submitted, Label, Name, Value, onChange, errMsg }) => {
    return (
        <div className='form-group'>            
            <input type="password" placeholder={Label} className={'form-control' + (submitted && !Value ? ' has-error' : '')} name={Name} value={Value} onChange={onChange} />  
            {submitted && !Value && errMsg && <div className="help-block">{errMsg}</div>}
        </div>
    );
}

export const FormSubmitButton = ({ flag, linkTo, Label1, Label2 }) => {
    return (
        <React.Fragment>
            <button className="btn btn-primary">{Label1}</button>
            {flag &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            } 
        </React.Fragment>
    );
}