import networkField from "../fields/network"

const socialMedia = {
  name: 'networkSetting',
  type: 'object',
  title: 'Network',
  fields: [
    networkField({
      mandatory: true
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

export default socialMedia