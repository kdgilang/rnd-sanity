import { ImUser } from 'react-icons/im'
import metaFields from '../fields/meta'
import networkField from '../fields/network'
import nameField from '../fields/name'

export const teamComponent = {
  icon: ImUser,
  name: 'teamComponent',
  type: 'document',
  title: 'Team',
  fields: [
    ...metaFields(),
    nameField({
      mandatory: true
    }),
    networkField({
      mandatory: true
    }),
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}