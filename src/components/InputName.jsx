import '../css/inputName.css'
import { useDispatch, useSelector } from 'react-redux'
import { getValue } from '../store/slices/nameTrainer.slices';
import { useNavigate } from 'react-router-dom';

export const InputName = () => {
    const inputValue = useSelector(state => state.nameTraine);
    const dispatch = useDispatch()
    const navigate = useNavigate()

  

    // FUNCION PARA QUE EJECUTA ENVIA EL NOMBRE
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getValue(e.target.name.value))
        navigate("/pokedex")
      
        
        
        
    }
    return (
        <>
            <form onSubmit={onSubmit} className="container_input_name">
                <input
                    type="text"
                    id = "name"
                    required
                    placeholder='Tu nombre...' />

                <button className='btn_name'>Comenzar</button>
            </form>
        </>
    )
}
