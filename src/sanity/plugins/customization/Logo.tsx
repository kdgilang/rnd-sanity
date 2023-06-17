import { definePlugin } from 'sanity'

// This custom component will be declared at the root configuration level
export function CustomLogo(props: any) {
  return (
    <div>
      {props.renderDefault({ ...props, title: props.title })}
    </div>
  )
}

// Then we add another custom logo component as part of a plugin
export const logoPlugin = definePlugin({
  name: 'logo-plugin',
  studio: {
    components: {
      logo: (props) => (
        <div>
          {/* @ts-ignore */}
          {props.renderDefault({...props, title: 'Purala'})}
        </div>
      ),
    },
  },
})