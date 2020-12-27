import Aux from '../../hoc/Auxilary'
import classes from './Layout.module.css'

const Layout = (props) => {
  return (
    <Aux>
      <div>Hello People</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  )
}

export default Layout
