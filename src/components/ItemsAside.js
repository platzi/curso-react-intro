function ItemsAside({icon, title}) {
  return (
    <li>
      <img src={icon} alt='tasks icon' />
      <h3>{title}</h3>
    </li>
  )
}

export { ItemsAside }