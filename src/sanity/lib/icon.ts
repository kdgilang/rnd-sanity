import * as FAIcons from 'react-icons/fa';
import * as IMIcons from 'react-icons/im';
import * as IOIcons from 'react-icons/io';

const icons = {
  ...FAIcons,
  ...IMIcons,
  ...IOIcons
}

//@ts-ignore
const IconBuilder = (name: string) => icons[name]

export default IconBuilder