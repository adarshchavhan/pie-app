import Banner from './Banner'
import Menu from './Menu'

const Topbar = ({data}) => {
  return (
    <div>
      <Banner data={data.banner}/>
      <Menu data={data.menuItems}/>
    </div>
  )
}

export default Topbar