function Switch({ children, ...props }) {
  return (
    <label className="matter-switch">
      <input
        {...props}
        type="checkbox"
        role="switch"
      />
      <span>{children}</span>
    </label>
  )
}

export {
  Switch
}