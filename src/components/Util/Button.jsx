import cssClasses from './Button.module.css';

export default function Button({butText, isActive, handleClick}){
   
    return(
        <span className={cssClasses.but_container}>
            <button 
                className={isActive ? cssClasses.selected_button : {}}
                onClick={()=>handleClick(butText)}
            >
                {butText ? butText : 'Button'}
            </button>
        </span>
    )
}