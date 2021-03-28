import styled from 'styled-components'

export default function Button({variant,text,disabled,disableShadow,size,color}){

  return (
    <div>
      <Mybutton 
      variant={variant} 
      disabled={disabled} 
      disableShadow={disableShadow}
      size={size}
      color={color}
      >
      {text}
      </Mybutton>
    </div>
  )
}


const Mybutton = styled.button`
    
    outline:none;
    border-radius: 6px;
    margin:0.5rem;

    /* Width */
    width: ${props =>props.color==='secondary'?'104px'
    : props.size ==='sm' ?'73px' 
    : props.size==='lg' ? '93px' : '81px'};

    /* Height */
    height:${props => props.size ==='sm' ?'32px' 
    :props.size==='lg' ? '42px' : '36px'};

    /* Text color */
    color:${props  =>  props.disableShadow || props.size || 
    props.color ==='primary' || props.color==='secondary' || props.color==='danger' ? '#FFFFFF'
    : props.disabled ? '#9E9E9E' 
    : props.variant ==='outline' || props.variant ==='text' ? 'blue':'9E9E9E' };

    /* Background */
    background: ${props  =>props.color==='danger'?'#e50000'
    : props.color === 'secondary' ? '#455A64'
    : props.disableShadow || props.size || props.color ==='primary'? '#3D5AFE'
    : (props.variant  ? 'white':'#E0E0E0')};

    /* Box-shadow */
    box-shadow: ${props  => props.variant ==='text' || props.disableShadow ? ''
    : '0px 2px 3px rgba(51, 51, 51, 0.2)'};  

    /* Border */
    border: ${props => props.variant === 'outline' ? '1px solid #3D5AFE' : '0' };
    
    /* Hover and focus state*/
    &:hover,
    &:focus {
    background: ${props =>props.color==='danger'?'#cc0000'
    : props.color==='secondary'?'#1C313A'
    : props.size || props.color==='primary' ? '#1515ff' 
    : props.disabled || props.disableShadow ? '' 
    : (props.variant  ? 'rgba(41, 98, 255, 0.1)':'#AEAEAE')};
    } 
`;

