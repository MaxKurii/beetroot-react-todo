function Button({ type = 'contained', nativeType = 'button', color = 'primary', ...props }) {
  // Classes: matter-primary, matter-secondary, matter-error, matter-warning, matter-success

  return (
    <button
      {...props}
      type={nativeType}
      className={`matter-button-${type} matter-${color} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export {
  Button
}