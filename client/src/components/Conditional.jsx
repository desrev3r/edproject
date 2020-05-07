export const Conditional = (props) => {
  return props.if ? props.children : props.else;
};
