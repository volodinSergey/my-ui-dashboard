
import { app } from '../../main'

import UButton from '@shared/ui-kit/UButton.vue'

const uiKit = {
    'UButton': UButton
}

export const useUIKit = () => Object.entries(uiKit).forEach(item => app.component(item[0], item[1]))
