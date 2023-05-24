import { NavLink } from 'react-router-dom';

function Button(props) {
    const { color, children, size, type } = props;

    return type == 'link' ? (
        <NavLink className={`btn ${color} ${size}`}>{children}</NavLink>
    ) : (
        <button className={`btn ${color} ${size}`}>{children}</button>
    );
}

export default Button;
